import React, { useState } from 'react';
import './styles/style.css';
import Search from './components/Search';
import Sidebar from './components/Sidebar';
import Jobs from './components/Jobs';
import JobView from './components/JobView';
import { Loading } from 'react-loading-dot';

function App(props) {
	const { data, loaded } = props;
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
				{loaded ? (
					<Jobs
						itemsPerPage={5}
						setJobView={setJobView}
						items={data.jobs_results}
						setCurrentJob={setCurrentJob}
					/>
				) : (
					<div className="loading">
						<Loading background="#334680" margin="0.5rem" size="2.5rem" />
					</div>
				)}
			</main>
		</>
	);
}

export default App;
