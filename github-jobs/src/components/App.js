import React, { useState } from "react";
import "../styles/style.css";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Jobs from "./Jobs";
import JobView from "./JobView";

function App(props) {
	const { data } = props;
	console.log(data);
	const [jobView, setJobView] = useState(false);

	if (jobView) return <JobView setJobView={setJobView} />;
	return (
		<>
			<Search />
			<main>
				<Sidebar />
				<Jobs
					itemsPerPage={2}
					setJobView={setJobView}
					items={data.jobs_results}
				/>
			</main>
		</>
	);
}

export default App;
