import React from "react";
import "../styles/style.css";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Jobs from "./Jobs";

function App() {
	return (
		<>
			<Search />
			<main>
				<Sidebar />
				<Jobs />
			</main>
		</>
	);
}

export default App;
