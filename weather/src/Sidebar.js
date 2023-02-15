import React, { useState, useEffect, useLayoutEffect, createRef } from "react";
import "./styles/style.css";
import { getData, weathercode, setGeo } from "./index.js";

let lon;
let lat;

export let currentLon;
export let currentLat;

function updateLocation(lon, lat) {
	currentLon = lon;
	currentLat = lat;
	return [currentLon, currentLat];
}

export async function getLocation() {
	while (typeof currentLon === "undefined") {
		console.log("waiting...");
		await new Promise(resolve => setTimeout(resolve, 250));
	}
	return [currentLon, currentLat];
}

function Sidebar(props) {
	const { newLon, setLon, newLat, setLat } = props;

	const [code, setCode] = useState("");
	const [codeSet, setCodeSet] = useState(false);

	const [temp, setTemp] = useState();
	const [label, setLabel] = useState();
	const [date, setDate] = useState();
	const [location, setLocation] = useState();

	const [isCurrent, setIsCurrent] = useState(true);
	const [onSearch, setOnSearch] = useState(false);

	const [recent, setRecent] = useState([]);

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
			updateLocation(lon, lat);
			const data = await getData(lon, lat);
			return setUp(data);
		}

		async function setUp(data) {
			let imgcode = weathercode(data);
			if (imgcode) {
				setCode(imgcode);
			} else {
				setCode("Clear");
			}
			setCodeSet(true);

			if (imgcode) {
				let label = imgcode.replace(/([A-Z])/g, " $1").trim();
				if (imgcode.includes("Cloud")) {
					label = "Cloudy";
				}
				setLabel(label);
			} else {
				setLabel("No Image");
			}

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

	const [reverse, setReverse] = useState(true);
	const [list, setList] = useState();

	const RecentSearches = () => {
		useEffect(() => {
			if (reverse) {
				setList([...recent].reverse());
				setReverse(false);
			}

			if (list) {
				const alreadySeen = {};
				let duplicate;
				list.forEach(str => {
					alreadySeen[str]
						? (duplicate = str)
						: (alreadySeen[str] = true);
				});

				const index = list.indexOf(duplicate);
				let item = list[index];
				if (index > -1) {
					let i = 0;
					while (i < list.length) {
						if (list[i] === duplicate) {
							list.splice(i, 1);
						} else {
							++i;
						}
					}
					setRecent([...recent, item]);
					setList([item].concat(list));
				}
			}
		}, []);

		let searches;

		if (list) {
			searches = list.map((value, index) => (
				<button
					type="submit"
					form="form"
					key={index}
					onClick={() => setSearch(value)}
					onMouseEnter={() => setSearch(value)}
					onMouseLeave={() => setSearch("")}
				>
					{value}
					<i className="fa-solid fa-chevron-right"></i>
				</button>
			));
		} else {
			searches = "";
		}
		return searches;
	};

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

			setLat(parseFloat(data[0].lat));
			setLon(parseFloat(data[0].lon));

			setRecent([...recent, search]);
			setReverse(true);
		} catch (error) {
			console.error(error);
		}
	};

	const InsideSection = () => {
		const ulRef = createRef();
		useLayoutEffect(() => {
			if (onSearch) {
				const element = ulRef.current;
				element.style.height =
					"calc(" +
					(window.innerHeight - element.offsetTop) +
					"px - 2rem - 0.5rem)";
			}
		}, [ulRef]);

		if (onSearch) {
			return (
				<>
					<div className="search-container">
						<i
							className="fa-solid fa-xmark fa-xl"
							onClick={() => setOnSearch(false)}
						></i>
						<form id="form" onSubmit={handleSubmit}>
							<div className="bar">
								<i className="fa-solid fa-magnifying-glass"></i>
								<input
									required
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
						<ul ref={ulRef}>
							<RecentSearches />
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
						onClick={() => {
							setOnSearch(true);
							setSearch("");
						}}
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

export default Sidebar;
