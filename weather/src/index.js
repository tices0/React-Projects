import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.css";
import Sidebar from "./Sidebar";
import Main from "./Main";

let currentLon;
let currentLat;

// console.log(window.innerWidth, "window width");

export function setGeo() {
	return new Promise((resolve, reject) => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(position => {
				currentLon = position.coords.longitude;
				currentLat = position.coords.latitude;
				return resolve([currentLon, currentLat]);
			});
		} else {
			return reject([100, 100]);
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

export const getData = async (lon, lat, changeUnit) => {
	const timezone = await getTimezone(lon, lat);
	let res;
	if (!changeUnit) {
		res = await fetch(
			`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=relativehumidity_2m,surface_pressure,visibility,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&windspeed_unit=mph&timezone=${timezone}`,
		);
	} else {
		res = await fetch(
			`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=relativehumidity_2m,surface_pressure,visibility,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&windspeed_unit=mph&timezone=${timezone}&temperature_unit=fahrenheit`,
		);
	}
	const data = await res.json();
	return data;
};

async function getTimezone(lon, lat) {
	const code = await getCountryCode(lon, lat);
	const ct = require("countries-and-timezones");
	const country = ct.getCountry(code.toUpperCase());
	return country.timezones[0];
}

export function weathercode(data, multiple, index) {
	let code;
	if (multiple) {
		code = data.daily.weathercode[index];
	} else {
		code = data.current_weather.weathercode;
	}
	let img;
	if (code === 0) {
		img = "Clear";
	} else if (code < 3) {
		img = "LightCloud";
	} else if (code === 3 || code === 45 || code === 48) {
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
		img = "Shower";
	} else if (code === 95 || code === 96 || code === 99) {
		img = "Thunderstorm";
	} else {
		return console.error("Invalid Weather Code");
	}
	return img;
}

function Render() {
	const [newLat, setLat] = useState();
	const [newLon, setLon] = useState();
	const [isCurrent, setIsCurrent] = useState(true);
	const [celcius, setCelcius] = useState(true);

	// do 

	return (
		<>
			<div id="sidebar">
				<Sidebar
					newLat={newLat}
					setLat={setLat}
					newLon={newLon}
					setLon={setLon}
					isCurrent={isCurrent}
					setIsCurrent={setIsCurrent}
					celcius={celcius}
				/>
			</div>
			<div id="main">
				<Main
					newLat={newLat}
					newLon={newLon}
					isCurrent={isCurrent}
					celcius={celcius}
					setCelcius={setCelcius}
				/>
			</div>
		</>
	);
}

const root = createRoot(document.querySelector("#root"));
root.render(<Render />);