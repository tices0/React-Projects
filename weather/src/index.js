import React, { useState, useEffect, createRef } from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.css";
import Sidebar from "./Sidebar";

export { getData, weathercode, setGeo };

let currentLon;
let currentLat;

// console.log(window.innerWidth, "window width");

function setGeo() {
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

const getData = async (lon, lat, unit) => {
	const timezone = await getTimezone(lon, lat);
	let res;
	if (!unit) {
		res = await fetch(
			`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=relativehumidity_2m,surface_pressure,visibility,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&windspeed_unit=mph&timezone=${timezone}`,
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

function RenderSidebar() {
	return (
		<section className="sidebar">
			<Sidebar />
		</section>
	);
}

const sidebar = createRoot(document.querySelector("#sidebar"));
sidebar.render(<RenderSidebar />);

function Main() {
	const [celcius, setCelcius] = useState(true);
	const c_button = createRef();
	const f_button = createRef();

	useEffect(() => {
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
		<>
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
			<main></main>
		</>
	);
}

function RenderMain() {
	return (
		<section className="main">
			<Main />
		</section>
	);
}

const main = createRoot(document.querySelector("#main"));
main.render(<RenderMain />);
