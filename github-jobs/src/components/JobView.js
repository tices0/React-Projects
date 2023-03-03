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
				<p>Apply via Indeed</p>
				<h2>Related links</h2>
				<ul>
					<li>
						<a href="https://www.barclays.com/">barcleys.com</a>
					</li>
					<li>
						<a href="https://www.google.com/search?ucbcb=1&q=Barclays&sa=X&ved=0ahUKEwikncn75cD9AhX3cWwGHZMYC9gQmJACCL0J">
							See web results for Barclays
						</a>
					</li>
				</ul>
			</div>
			<main></main>
		</section>
	);
}

export default JobView;
