import React, { useEffect, useState } from 'react';
import './styles/style.css';
import Search from './components/Search';
import Sidebar from './components/Sidebar';
import Jobs from './components/Jobs';
import JobView from './components/JobView';
import { getIntial } from '.';
import { Loading } from 'react-loading-dot';

function App(props) {
	const [jobView, setJobView] = useState(false);
	const [currentJob, setCurrentJob] = useState();
	const [data, setData] = useState();

	useEffect(() => {
		const getData = async () => {
			const initial = await getIntial();
			setData(initial);
			// console.log(initial);
		};

		getData();
	}, []);

	if (jobView)
		return <JobView setJobView={setJobView} currentJob={currentJob} />;
	return (
		<>
			{typeof data === 'undefined' ? (
				<Loading background="#334680" margin="0.5rem" size="2.5rem" />
			) : (
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
			)}
		</>
	);
}

export default App;
