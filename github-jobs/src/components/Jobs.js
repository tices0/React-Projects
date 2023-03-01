import React from "react";
import "../styles/style.css";

function Jobs() {
	return (
		<section className="jobs-container">
			<ul className="jobs">
				<li>
					<div className="img-container">
						<p>not found</p>
					</div>
					<div className="info">
						<div className="left">
							<h6>New York University</h6>
							<p>Senior Engineer</p>
							<button>Full time</button>
						</div>
						<div className="right">
							<div className="location">
								<i className="fa-solid fa-briefcase"></i>
								New York
							</div>
							<div className="time">
								<i className="fa-solid fa-briefcase"></i>5 days
								ago
							</div>
						</div>
					</div>
				</li>
				<li>
					<div className="img-container">
						<p>not found</p>
					</div>
					<div className="info">
						<div className="left">
							<h6>New York University</h6>
							<p>Senior Engineer</p>
							<button>Full time</button>
						</div>
						<div className="right">
							<div className="location">
								<i className="fa-solid fa-briefcase"></i>
								New York
							</div>
							<div className="time">
								<i className="fa-solid fa-briefcase"></i>5 days
								ago
							</div>
						</div>
					</div>
				</li>
			</ul>
			<nav>(pagination)</nav>
		</section>
	);
}

export default Jobs;
