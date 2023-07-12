import React from "react";
import "../styles/style.css";

function Search(props) {
	const { search, setSearch, setUpdate } = props;

	const handleSumbit = async event => {
		event.preventDefault();
		setUpdate(true);
	};

	return (
		<div className="search-container">
			<form onSubmit={handleSumbit} className="search-bar">
				<i className="fa-solid fa-briefcase"></i>
				<input
					type="text"
					placeholder="Title, companies, expertise or benefits"
					className="search"
					value={search}
					// set search varaible to search value
					onChange={event => setSearch(event.target.value)}
					required
				/>
				<input type="submit" value="Search" />
			</form>
		</div>
	);
}

export default Search;
