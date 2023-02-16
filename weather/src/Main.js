import React, { useState, useEffect, createRef } from "react";
import "./styles/style.css";
import { getData, weathercode } from "./index.js";
import { getLocation } from "./Sidebar";

function Main(props) {
	const { newLon, newLat, isCurrent, celcius, setCelcius } = props;

	const [loaded, setLoaded] = useState(false);
	const [dates, setDates] = useState([]);
	const [imgs, setImgs] = useState([]);
	const [minTemps, setMinTemps] = useState([]);
	const [maxTemps, setMaxTemps] = useState([]);

	const [wind, setWind] = useState();
	const [humidity, setHumidity] = useState();
	const [visibility, setVisibility] = useState();
	const [pressure, setPressure] = useState();

	useEffect(() => {
		async function setCurrent() {
			let both = await getLocation();
			let lon = both[0];
			let lat = both[1];
			console.log(lon, lat);

			const data = await getData(lon, lat);
			console.log(data);
			return setUp(data);
		}

		async function setUp(data) {
			let dateList = data.daily.time;
			dateList = dateList.map(value =>
				new Date(value).toString("ddd, d MMM"),
			);
			setDates(dateList);

			let mins = data.daily.temperature_2m_min;
			mins = mins.map(value => Math.round(value));
			setMinTemps(mins);

			let maxes = data.daily.temperature_2m_max;
			maxes = maxes.map(value => Math.round(value));
			setMaxTemps(maxes);

			setImgs([]);
			for (let i = 0; i < 6; i++) {
				let imgcode = weathercode(data, true, i);
				if (imgcode) {
					setImgs(old => [...old, imgcode]);
				} else {
					setImgs(old => [...old, "Clear"]);
				}
			}

			let vInMeters = data.hourly.visibility[12];
			let vInMiles = vInMeters * 0.000621371;
			vInMiles = vInMiles.toFixed(1).toString();
			setVisibility(vInMiles.replace(".", ","));

			setWind(Math.round(data.hourly.windspeed_10m[12]));
			setHumidity(Math.round(data.hourly.relativehumidity_2m[12]));
			setPressure(Math.round(data.hourly.surface_pressure[12]));

			setLoaded(true);
			console.log("loaded");
		}

		setCurrent();
	}, [newLon, newLat, isCurrent]);

	let days = [];
	for (let i = 0; i < 6; i++) {
		days.push(i);
	}

	const Days = () => {
		const boxes = days.map((value, index) => (
			<li key={index} className="day">
				<div className="date">
					{value === 1 ? (
						<span>Tomorrow</span>
					) : (
						<span>{dates[value]}</span>
					)}
				</div>
				<img src={require(`./media/${imgs[value]}.png`)} alt="" />
				<div className="temp">
					<span className="max">
						{maxTemps[value]}
						{celcius ? <i>&#176;C</i> : <i>&#176;F</i>}
					</span>
					<span className="min">
						{minTemps[value]}
						{celcius ? <i>&#176;C</i> : <i>&#176;F</i>}
					</span>
				</div>
			</li>
		));
		boxes.shift();
		return boxes;
	};

	const Highlights = () => {
		return (
			<>
				<li className="wind-status">
					<p>Wind Status</p>
					<div className="value">
						<strong>{wind}</strong>
						<span>mph</span>
					</div>
				</li>
				<li className="humidity">
					<p>Humidity</p>
					<div className="value">
						<strong>{humidity}</strong>
						<span>%</span>
					</div>
				</li>
				<li className="visibility">
					<p>Visibility</p>
					<div className="value">
						<strong> {visibility} </strong>
						<span>miles</span>
					</div>
				</li>
				<li className="air-pressure">
					<p>Air Pressure</p>
					<div className="value">
						<strong> {pressure} </strong>
						<span>mb</span>
					</div>
				</li>
			</>
		);
	};

	const c_button = createRef();
	const f_button = createRef();

	useEffect(() => {
		c_button.current.style.fontWeight = "bold";
		f_button.current.style.fontWeight = "bold";
		if (celcius) {
			c_button.current.style.backgroundColor = "#E7E7EB";
			c_button.current.style.color = "#110E3C";
			f_button.current.style.backgroundColor = "#585676";
			f_button.current.style.color = "#E7E7EB";
		} else {
			f_button.current.style.backgroundColor = "#E7E7EB";
			f_button.current.style.color = "#110E3C";
			c_button.current.style.backgroundColor = "#585676";
			c_button.current.style.color = "#E7E7EB";
		}
	}, [celcius, c_button, f_button]);

	return (
		<section className="main">
			<div className="btns">
				<button
					className="c"
					ref={c_button}
					onClick={() => setCelcius(true)}
				>
					&#176;C
				</button>
				<button
					className="f"
					ref={f_button}
					onClick={() => setCelcius(false)}
				>
					&#176;F
				</button>
			</div>
			<main>
				<ul className="daily">{loaded ? <Days /> : ""}</ul>
				<h1>Today's Highlights</h1>
				<ul className="highlights">{loaded ? <Highlights /> : ""}</ul>
			</main>
		</section>
	);
}

export default Main;
