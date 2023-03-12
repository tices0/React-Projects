import React from "react";
import "../styles/style.css";

function Sidebar(props) {
	const { location, setLocation, setFromHome } = props;

	return (
		<section className="sidebar">
			<div className="from-home-toggle">
				<input
					type="checkbox"
					name="from-home-toggle"
					id="from-home-toggle"
					// toggle fromHome value
					onClick={() => setFromHome(old => !old)}
				/>
				<label htmlFor="from-home-toggle">From Home</label>
			</div>
			<div className="location-container">
				<h2>Location</h2>
				<div className="search">
					<i className="fa-solid fa-globe-americas"></i>
					<input
						type="text"
						placeholder="City, state, zip code or country"
						value={location}
						// set location variable to search value
						onChange={event => setLocation(event.target.value)}
					/>
				</div>
				<section className="options">
					<li>
						<input
							type="radio"
							name="locations"
							id="london-radio"
							// set location variable to radio value
							onClick={() => setLocation("London")}
						/>
						<label htmlFor="london-radio">London</label>
					</li>
					<li>
						<input
							type="radio"
							name="locations"
							id="amsterdam-radio"
							onClick={() => setLocation("Amsterdam")}
						/>
						<label htmlFor="amsterdam-radio">Amsterdam</label>
					</li>
					<li>
						<input
							type="radio"
							name="locations"
							id="new-york-radio"
							onClick={() => setLocation("New York")}
						/>
						<label htmlFor="new-york-radio">New York</label>
					</li>
					<li>
						<input
							type="radio"
							name="locations"
							id="berlin-radio"
							onClick={() => setLocation("Berlin")}
						/>
						<label htmlFor="berlin-radio">Berlin</label>
					</li>
				</section>
			</div>
		</section>
	);
}

export default Sidebar;
