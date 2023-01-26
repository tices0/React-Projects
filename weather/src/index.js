import react, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.css";

let currentLon;
let currentLat;

setCurrent()

async function setCurrent() {
    navigator.geolocation.getCurrentPosition(position => {
       return currentLon = position.coords.longitude;
        // currentLat = position.coords.latitude;
    });
}

let lat = await currentLat
let lon

function Sidebar() {


	const setToCurrent = () => {
		lat = currentLat;
		lon = currentLon;
		console.log("set to current location");
		console.log(lon, lat, "lon and  lat");
		console.log(currentLon);
	};

	const data = (lon, lat) => {
		fetch(
			`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode&current_weather=true&timezone=GMT`,
			{
				method: "GET",
			},
		)
			.then(res => res.json())
			.then(data => {
				return data;
			})
			.catch(error => console.error(error));
	};

	console.log(data(lon, lat));

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
					src={require("./media/Cloud-background.png")}
					alt="Cloud Background"
				/>
			</div>
			<div className="image">
				<img src={require("./media/Shower.png")} alt="" />
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
