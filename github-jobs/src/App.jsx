import React, { useState } from "react";
import "./styles/style.css";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";
import Jobs from "./components/Jobs";
import JobView from "./components/JobView";

function App(props) {
	const { data } = props;
	console.log(data);
	const [jobView, setJobView] = useState(false);
	const [currentJob, setCurrentJob] = useState();

	if (jobView)
		return <JobView setJobView={setJobView} currentJob={currentJob} />;
	return (
		<>
			<Search />
			<main>
				<Sidebar />
				<Jobs
					itemsPerPage={5}
					setJobView={setJobView}
					items={data.jobs_results}
					setCurrentJob={setCurrentJob}
				/>
			</main>
		</>
	);
}

export default App;
