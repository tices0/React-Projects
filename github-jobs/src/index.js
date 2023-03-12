import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

let city;

const getPosition = async () => {
	if (navigator.geolocation) {
		// get location of user
		navigator.geolocation.getCurrentPosition(async position => {
			const lon = position.coords.longitude;
			const lat = position.coords.latitude;
			const res = await fetch(
				`https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lon}`,
			);
			const json = await res.json();

			// get city closest to user
			let rtn;
			if (json.features[0].properties.address.city)
				rtn = json.features[0].properties.address.city;
			else if (json.features[0].properties.address.town)
				rtn = json.features[0].properties.address.town;
			else if (json.features[0].properties.address.county)
				rtn = json.features[0].properties.address.county;
			else if (json.features[0].properties.address.state)
				rtn = json.features[0].properties.address.state;
			else rtn = "";
			city = rtn;
			// return rtn;
		});
	}
};

// assigns value to city variable
getPosition();

export const getIntial = async () => {
	console.log("waiting...");
	while (typeof city === "undefined")
		await new Promise(resolve => setTimeout(resolve, 1000));
	if (city === "") city = "Paris";
	const res = await fetch(
		`https://serpapi.com/search.json?engine=google_jobs&q=jobs&location=${city}&hl=en&api_key=27e0108af97309a0df7bf13e37daa58f18465351e20a59ad2f4ec3f78c6f02bc`,
	);
	const json = await res.json();
	return json;
};

export const getData = async (query, location, fromHome) => {
	let ltype;
	if (fromHome) ltype = 1;
	else ltype = 0;
	if (location === "") location = city;

	const res = await fetch(
		`https://serpapi.com/search.json?engine=google_jobs&q=${query}&location=${location}&ltype=${ltype}&hl=en&api_key=27e0108af97309a0df7bf13e37daa58f18465351e20a59ad2f4ec3f78c6f02bc`,
	);
	const json = await res.json();
	return json;
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);

// console.log("width:", window.innerWidth);
