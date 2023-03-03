import React from "react";
import "../styles/style.css";

function Sidebar() {
	return (
		<section className="sidebar">
			<div className="full-time">
				<input type="checkbox" name="full-time" id="full-time" />
				<label htmlFor="full-time">Full Time</label>
			</div>
			<div className="location-container">
				<h2>Location</h2>
				<div className="search">
					<i className='fa-solid fa-globe-americas'></i>
					<input
						type="text"
						placeholder="City, state, zip code or country"
					/>
				</div>
				<section className="options">
					<li>
						<input
							type="radio"
							name="locations"
							id="london-radio"
						/>
						<label htmlFor="london-radio">London</label>
					</li>
					<li>
						<input
							type="radio"
							name="locations"
							id="amsterdam-radio"
						/>
						<label htmlFor="amsterdam-radio">Amsterdam</label>
					</li>
					<li>
						<input
							type="radio"
							name="locations"
							id="new-york-radio"
						/>
						<label htmlFor="new-york-radio">New York</label>
					</li>
					<li>
						<input
							type="radio"
							name="locations"
							id="berlin-radio"
						/>
						<label htmlFor="berlin-radio">Berlin</label>
					</li>
				</section>
			</div>
		</section>
	);
}

export default Sidebar;
