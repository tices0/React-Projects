import React, { useEffect, useState } from "react";
import "./styles/style.css";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";
import Jobs from "./components/Jobs";
import JobView from "./components/JobView";
import { getIntial, getData } from ".";
import { Loading } from "react-loading-dot";

function App() {
	const [jobView, setJobView] = useState(false);
	const [currentJob, setCurrentJob] = useState();
	const [data, setData] = useState();
	const [search, setSearch] = useState("");
	const [location, setLocation] = useState("");
	const [fromHome, setFromHome] = useState(false);
	const [update, setUpdate] = useState(false);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// get inital data
		const setInitial = async () => {
			const initial = await getIntial();
			setData(initial);
			setLoading(false);
		};

		// update data
		const updateData = async () => {
			if (update) {
				console.log("updating data...");
				setLoading(true);
				const updated = await getData(search, location, fromHome);
				setData(updated);
				setUpdate(false);
				setLoading(false);
			}
		};

		if (typeof data === "undefined") setInitial();
		else updateData();

		// eslint-disable-next-line
	}, [update]);

	if (jobView)
		return <JobView setJobView={setJobView} currentJob={currentJob} />;
	return (
		<>
			<h1 class="title">
				<i>Github</i> Jobs
			</h1>
			{loading ? (
				// show loading screen while data is being fetched
				<Loading background="#334680" margin="0.5rem" size="2.5rem" />
			) : (
				<>
					<Search
						setData={setData}
						search={search}
						setSearch={setSearch}
						setUpdate={setUpdate}
					/>
					<main>
						<Sidebar
							setLocation={setLocation}
							setFromHome={setFromHome}
						/>
						<Jobs
							itemsPerPage={5}
							setJobView={setJobView}
							items={data.jobs_results}
							setCurrentJob={setCurrentJob}
						/>
					</main>
				</>
			)}
		</>
	);
}

export default App;
