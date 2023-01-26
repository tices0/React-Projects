import react, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.css";

navigator.geolocation.getCurrentPosition(show);

let currentLon;
let currentLat;

function show(position) {
	currentLon = position.coords.longitude;
	currentLat = position.coords.latitude;
}

function Sidebar(props) {
	let lat = currentLat;
	let lon = currentLon;

	const setToCurrent = () => {
		lat = currentLat;
		lon = currentLon;
	};

	let insideSection = (
		<>
			<div className="top">
				<button className="places">Search for places</button>
				<button className="current" onClick={setToCurrent}>
					<i className="fa-solid fa-location-crosshairs fa-xl"></i>
				</button>
			</div>
			<div className="background">
				<img
					src="../media/Cloud-background.png"
					alt="Cloud Background"
				/>
			</div>
		</>
	);
	return <section className="sidebar">{insideSection}</section>;
}

// function Search(props) {
// 	const fetch = () => {};

// 	return <input onClick={fetch} type="text" />;
// }

const sidebar = createRoot(document.querySelector("#sidebar"));
sidebar.render(<Sidebar />);

// fetch(
// 	`https://nominatim.openstreetmap.org/?addressdetails=1&q=London&format=json&limit=1`,
// 	{
// 		method: "GET",
// 	},
// )
// 	.then(res => res.json())
// 	.then(data => console.log(data))
// 	.catch(error => console.error(error));
