import React, { useState } from "react";
import "../styles/style.css";

function App() {
	const [search, setSearch] = useState();

	const handleSumbit = event => {
		event.preventDefault();
	};

	const getData = async () => {
		const res = await fetch(
			`https://serpapi.com/search.json?engine=google_jobs&q=barista&hl=en`,
		);
		const data = await res.json();
		console.log(data);
		return data;
	};

	getData();

	// console.log(getData());

	return (
		<div className="search-container">
			<form onSubmit={handleSumbit} className="search-bar">
				<i className="fa-solid fa-briefcase"></i>
				<input
					type="text"
					placeholder="Title, companies, expertise or benefits"
					className="search"
					value={search}
					onChange={event => setSearch(event.target.value)}
				/>
				<input type="submit" value="Search" />
			</form>
		</div>
	);
}

export default App;
