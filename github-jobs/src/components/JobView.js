import React from "react";
import "../styles/style.css";

function JobView(props) {
	const { setJobView } = props;
	return (
		<section className="job-view">
			<div className="sidebar">
				<button onClick={() => setJobView(false)}>
					<i className="fa-solid fa-long-arrow-alt-left"></i>
					Back to search
				</button>
				<h2>How to apply</h2>
				<p>
					Please email a copy of your resume and online portfolio to
					wes@kasisto.com & CC eric@kasisto.com
				</p>
			</div>
			<main></main>
		</section>
	);
}

export default JobView;
