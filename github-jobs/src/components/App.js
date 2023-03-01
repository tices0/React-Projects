import React from "react";
import "../styles/style.css";
import Search from "./Search";
import Sidebar from "./Sidebar";

function App() {
	return (
		<>
			<Search />
			<main>
				<Sidebar />
			</main>
		</>
	);
}

export default App;
