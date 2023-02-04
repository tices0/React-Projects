import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.css";

let currentLon;
let currentLat;

// console.log(window.innerWidth, "window width");

let lon;
let lat;

function setGeo() {
	return new Promise((resolve, reject) => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(position => {
				currentLon = position.coords.longitude;
				currentLat = position.coords.latitude;
				return resolve([currentLon, currentLat]);
			});
		} else {
			return reject(null);
		}
	});
}

async function getCountryCode(lon, lat) {
	const res = await fetch(
		`https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lon}`,
	);
	const data = await res.json();
	return data.features[0].properties.address.country_code;
}

const getData = async (lon, lat) => {
	const timezone = await getTimezone(lon, lat);
	const res = await fetch(
		`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode&current_weather=true&timezone=${timezone}`,
	);
	const data = await res.json();
	return data;
};

async function getTimezone(lon, lat) {
	const code = await getCountryCode(lon, lat);
	const ct = require("countries-and-timezones");
	const country = ct.getCountry(code.toUpperCase());
	return country.timezones[0];
}

function Sidebar() {
	const [code, setCode] = useState("");
	const [codeSet, setCodeSet] = useState(false);

	const [temp, setTemp] = useState();
	const [label, setLabel] = useState();
	const [date, setDate] = useState();
	const [location, setLocation] = useState();

	const [isCurrent, setIsCurrent] = useState(true);
	const [onSearch, setOnSearch] = useState(false);

	const [newLat, setLat] = useState();
	const [newLon, setLon] = useState();

	useEffect(() => {
		async function setCurrent() {
			if (isCurrent) {
				const both = await setGeo();
				lon = both[0];
				lat = both[1];
			} else {
				lon = newLon;
				lat = newLat;
			}
			// console.log("lon:", lon, "lat:", lat);

			let data = await getData(lon, lat);

			return setUp(data);
		}

		async function setUp(data) {
			let imgcode = weathercode(data);
			setCode(imgcode);
			setCodeSet(true);

			let label = imgcode.replace(/([A-Z])/g, " $1").trim();
			if (imgcode.includes("Cloud")) {
				label = "Cloudy";
			}
			setLabel(label);

			let current_temp = data.current_weather.temperature;
			setTemp(Math.round(current_temp));

			let date = new Date(
				data.current_weather.time.split("T")[0],
			).toString("ddd, d MMM");
			setDate(date);

			let location = await locationToCity(lon, lat);
			setLocation(location);
		}

		setCurrent();
	}, [code, temp, label, date, location, isCurrent, newLat, newLon]);

	const [search, setSearch] = useState("");

	const handleSubmit = async event => {
		event.preventDefault();
		try {
			const res = await fetch(
				`https://nominatim.openstreetmap.org/?addressdetails=1&q=${search}&format=json&limit=1`,
			);
			const data = await res.json();
			setOnSearch(false);
			setIsCurrent(false);
			setSearch("");

			setLat(parseFloat(data[0].lat));
			setLon(parseFloat(data[0].lon));
		} catch (error) {
			console.error(error);
		}
	};

	const InsideSection = () => {
		if (onSearch) {
			return (
				<>
					<div className="search-container">
						<i
							className="fa-solid fa-xmark fa-xl"
							onClick={() => setOnSearch(false)}
						></i>
						<form action="" onSubmit={handleSubmit}>
							<div className="bar">
								<i className="fa-solid fa-magnifying-glass"></i>
								<input
									type="text"
									className="search"
									placeholder="search location"
									onChange={event =>
										setSearch(event.target.value)
									}
									value={search}
									autoFocus
								/>
							</div>
							<input
								type="submit"
								value="Search"
								className="submit"
							/>
						</form>
						<ul className="results">
							<li className="result">
								London{" "}
								<i className="fa-solid fa-chevron-right"></i>
							</li>
							<li className="result">
								Barcelona{" "}
								<i className="fa-solid fa-chevron-right"></i>
							</li>
							<li className="result">
								Paris{" "}
								<i className="fa-solid fa-chevron-right"></i>
							</li>
						</ul>
					</div>
				</>
			);
		}

		// else
		return (
			<>
				<div className="top">
					<button
						className="places"
						onClick={() => setOnSearch(true)}
					>
						Search for places
					</button>
					<button
						className="current"
						onClick={() => setIsCurrent(true)}
					>
						<i className="fa-solid fa-location-crosshairs fa-xl"></i>
					</button>
				</div>
				<div className="background">
					<img
						src={require("./media/Cloud-background.png")}
						alt="Cloud Background"
					/>
				</div>
				<div className="image">
					{codeSet ? (
						<img src={require(`./media/${code}.png`)} alt="" />
					) : (
						""
					)}
				</div>
				<div className="temp">
					{codeSet ? <span>{temp}</span> : ""}
					<i>&#176;C</i>
				</div>
				<div className="label">
					{codeSet ? <span>{label}</span> : ""}
				</div>
				<div className="date">
					<span>Today</span> <i className="fa-solid fa-circle"></i>
					{codeSet ? <span>{date}</span> : ""}
				</div>
				<div className="location">
					<i className="fa-solid fa-location-dot"></i>
					{codeSet ? <span>{location}</span> : ""}
				</div>
			</>
		);
	};

	return (
		<section className="sidebar">
			<InsideSection />
		</section>
	);
}

function weathercode(data) {
	const code = data.current_weather.weathercode;
	let img;
	if (code === 0) {
		img = "Clear";
	} else if (code < 3) {
		img = "LightCloud";
	} else if (code === 3) {
		img = "HeavyCloud";
	} else if ((code > 50 && code < 56) || code === 61) {
		img = "LightRain";
	} else if (
		code === 56 ||
		code === 57 ||
		code === 66 ||
		code === 67 ||
		code === 85 ||
		code === 86
	) {
		img = "Sleet";
	} else if (code === 63 || code === 65) {
		img = "HeavyRain";
	} else if (code > 70 && code < 76) {
		img = "Snow";
	} else if (code === 77) {
		img = "Hail";
	} else if (code > 79 && code < 84) {
		img = "Showers";
	} else if (code === 95 || code === 96 || code === 99) {
		img = "Thunderstorm";
	} else {
		return console.error("Invalid Weather Code");
	}
	return img;
}

async function locationToCity(lon, lat) {
	const res = await fetch(
		`https://nominatim.openstreetmap.org/reverse?format=geocodejson&lat=${lat}&lon=${lon}`,
	);
	const data = await res.json();

	let rtn;
	if (data.features[0].properties.geocoding.city) {
		rtn = data.features[0].properties.geocoding.city;
	} else if (data.features[0].properties.geocoding.county) {
		rtn = data.features[0].properties.geocoding.county;
	} else if (data.features[0].properties.geocoding.state) {
		rtn = data.features[0].properties.geocoding.state;
	} else if (data.features[0].properties.geocoding.country) {
		rtn = data.features[0].properties.geocoding.country;
	} else {
		rtn = data.features[0].properties.geocoding.place;
	}
	return rtn;
}

const sidebar = createRoot(document.querySelector("#sidebar"));
sidebar.render(<Sidebar />);
