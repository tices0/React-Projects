import React from "react";
import "../styles/style.css";

function JobView(props) {
	const { setJobView, currentJob } = props;
	console.log(currentJob);
	return (
		<section className="job-view">
			<div className="sidebar">
				<button onClick={() => setJobView(false)}>
					<i className="fa-solid fa-long-arrow-alt-left"></i>
					Back to search
				</button>
				<h2>How to apply</h2>
				<p>Apply </p>
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
			<main>
				<div className="top">
					<h1>Front-End Software Engineer</h1>
					<button className="full-time">Full time</button>
				</div>
				<div className="time">
					<i className="fa-solid fa-clock"></i>5 days ago
				</div>
				<div className="company-info">
					<div className="img-container">
						<p>not found</p>
					</div>
					<div className="info">
						<h2>Kasisto</h2>
						<div className="location">
							<i className="fa-solid fa-globe-americas"></i>
							New York
						</div>
					</div>
				</div>
				<p className="description">(description)</p>
			</main>
		</section>
	);
}

export default JobView;
