<!-- Please update value in the {}  -->

<h1 align="center">Weather App</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://weather-app-e04df.web.app/">
      Live
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/solutions/s6uFQbZcFFb28o0acv5x">
      Solution
    </a> 
    <span> | </span>
    <a href="https://devchallenges.io/challenges/mM1UIenRhK808W8qmLWv">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

-   [Overview](#overview)
    -   [Built With](#built-with)
-   [Features](#features)
    -   [Sharing Components](#sharing-componentsfunctions-between-files)
    -   [Mulitple APIs Together](#using-multiple-apis-together)
    -   [Current Location](#getting-the-current-location-of-the-user)
    -   [Using async/await](#using-async/await-instead-of-.then)
    -   [Sharing States](#sharing-states-between-components)
    -   [createRoot](#use-createroot)
    -   [Waiting For Variable](#waiting-for-a-variable-to-be-assigned-a-value)
    -   [Using useEffect](#using-useeffect)
    -   [HTML Items With Array](#using-arrays-to-create-html-elements)
    -   [Conditional Rendering](#conditional-rendering)
    -   [Using useRef](#using-useref-to-access-dom-elements)
-   [How to Use](#how-to-use)
-   [Contact](#contact)
-   [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

![screenshot](/src/media/Screenshot.png)

<!-- Introduce your projects by taking a screenshot or a gif. Try to tell visitors a story about your project by answering: -->
<!-- -   Where can I see your demo?
-   What was your experience?
-   What have you learned/improved?
-   Your wisdom? :) -->

This [mindmap](https://mm.tt/map/2575601274?t=Nr2gU4FpWC) was used to plan the process of building the app. It utilised the concept of decomposition to make the big features easier to implement by breaking them down into smaller problems. After completition, the completed branch becomes white in order to show how much progress has been made.

_Check [features](#features) to see what I learned/improved on through this project_

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

-   [React](https://reactjs.org/)
-   [SCSS](https://sass-lang.com/)

## Features

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/mM1UIenRhK808W8qmLWv) was to build an application to complete the given user stories.

### Sharing Components/Functions Between Files

The component/function needs to exported from the file it is declared in after it is declared.

```
export const getData = async (lon, lat, celcius) => {
  ...
};

export default Sidebar;
```

It can then be used in other files by being imported.

```
import Sidebar from "./Sidebar";
import { getData, weathercode } from "./index.js";
```

### Using Multiple APIs Together

```
const getData = async (lon, lat, celcius) => {
	const timezone = await getTimezone(lon, lat);
	let res;
	if (celcius) {
		res = await fetch(
			`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=relativehumidity_2m,surface_pressure,visibility,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&windspeed_unit=mph&timezone=${timezone}`,
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

async function getCountryCode(lon, lat) {
	const res = await fetch(
		`https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lon}`,
	);
	const data = await res.json();
	return data.features[0].properties.address.country_code;
}
```

### Getting The Current Location Of The User

This is done be using the `navigator`. An alert is shown to the user requesting for permission to get their location.

```
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lon = position.coords.longitude;
      const lat = position.coords.latitude;
    });
  }
```

### Using async/await Instead Of .then

By using `async/await`, the fetched information can be returned directly in the function, so the information is returned when the function is called. It also looks cleaner than using `.then` multiple times.

```
async function getCountryCode(lon, lat) {
	const res = await fetch("");
	const data = await res.json();
	return data.features[0].properties.address.country_code;
}
```

### Sharing States Between Components

Sharing states between components can be done through a parent function that passes the variable and function using [props](https://reactjs.org/docs/components-and-props.html). This allows multiple child components to read and change the value of the same state variable.

```
function Render() {
	const [celcius, setCelcius] = useState(true);

	return (
		<>
			<div id="sidebar">
				<Sidebar celcius={celcius} />
			</div>
			<div id="main">
				<Main celcius={celcius} setCelcius={setCelcius} />
			</div>
		</>
	);
}
```

```
const { celcius, setCelcius } = props;
```

### Use createRoot

```
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));
root.render(<Render />);
```

### Waiting For A Variable To Be Assigned A Value

This was done by using `async/await`.

```
async function getLocation() {
	while (typeof currentLon === "undefined") {
		console.log("waiting...");
		await new Promise(resolve => setTimeout(resolve, 250));
	}
	return [currentLon, currentLat];
}
```

### Using useEffect

A `useEffect` was used everytime a state had to be changed. It cannot be used conditionally (inside and `if` statement). It re-runs everytime a variable in the **dependency list** changes. It only runs once if the dependency list is empty.

```
useEffect(() => {
  if (reverse) {
    setList([...recent].reverse());
    setReverse(false);
  }
}, []);
```

### Using Arrays To Create HTML Elements

This can be done using the `map` array function.

```
searches = list.map((value, index) => (
  <button>
    {value}
    <i className="fa-solid fa-chevron-right"></i>
  </button>
));
```

### Conditional Rendering

This is when components or the values of variables are only rendered when a criteria has been met.

```
<div className="date">
  {codeSet ? <span>{date}</span> : ""}
</div>

<ul className="daily">{loaded ? <Days /> : ""}</ul>
```

```
{value === 1 ? (<span>Tomorrow</span>) : (<span>{dates[value]}</span>)}
```

### Using useRef to Access DOM Elements

By using `useRef`, styling can be changed outside of the CSS and can be applied to HTML elements dynamically.

```
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
```

```
<button ref={c_button}> &#176;C </button>
<button ref={f_button}> &#176;F </button>
```

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/tochidavids/React-Projects/tree/master/weather/

# Install dependencies
$ npm install

# Run the app
$ npm start
```

You will see something similar to the screenshot shown [here](#overview), however it will be updated according to your location. The _side bar_ shows the current temperature, state of weather, date and location, and the _main page_ shows the date, and maximum and minimum temperatures for the next 5 days. It also shows **Today's Highlights** according to the location: humidity, wind status (wind speed), visibilty and air pressure.

To **search for other locations**, click on the `Search for places` buttons. The sidebar will be changed to a search page where you can search for a location that is anywhere in the world. Use the `Search` button or hit enter to see the weather of the searched location. The information on the right of the search bar will also change.

To **return to your current location**, click on the *location button* which is on the top-right edge of the sidebar. All the information displayed will be about your current location.

To **change between celcius and fahrenheit**, you can toggle between the `C` and `F` buttons on the top-right of the page.

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example: -->

-   [Font Awesome](https://fontawesome.com/)
-   [Countries and Timezones](https://github.com/manuelmhtr/countries-and-timezones)
-   [Open-Meteo API](https://open-meteo.com/)
-   [Nominatim API](https://nominatim.org/)
-   [Firebase Hosting](https://firebase.google.com/)

## Contact

-   [Portfolio Website](https://tochidavids.netlify.app)
-   GitHub [@tochidavids](https://github.com/tochidavids)
-   Email - tochidavids18@gmail.com
