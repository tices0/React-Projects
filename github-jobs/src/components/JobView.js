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
			<main>
				<div className="top">
					<h1>Front-End Software Engineer</h1>
					<button>Full time</button>
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
				<p className="description">
					Client Support Specialist London As a Barclays Client
					Support Specialist, you will join the Corporate Digital
					Banking Team within Client Service Business Area. You will
					be instrumental in providing excellent service to the bank’s
					corporate clients. You will be responsible for using
					available tools and resources to handle servicing requests
					and general queries from clients in the most efficient way.
					Barclays is one of the world's largest and most respected
					financial institutions, with 329 years of success, quality
					and innovation behind us. We offer careers that provide
					endless opportunity – helping millions of individuals and
					businesses thrive, and creating financial and digital
					solutions that the world now takes for granted. Hybrid
					Working We are currently operating in a hybrid working
					environment, meaning that many colleagues spend part of
					their working hours at home and part in the office,
					depending on the nature of the role they are in. Please
					discuss the detail of the working... pattern options for the
					role with the hiring manager What will you be doing? •
					Responding to servicing or channels related requests
					received from clients, as well as those from other business
					areas and third parties where appropriate • Providing
					world-class service, using skills and knowledge to
					understand the request and taking appropriate action •
					Acting as a knowledgeable point of contact for technical and
					procedural queries handling request within your remit or
					using knowledge of the business area • Servicing clients in
					line with current processes to ensure requests are actioned
					right first time • Advocating for digital capabilities and
					enhancements being delivered so that informed and
					knowledgeable conversations can be held with clients •
					Identifying opportunities for clients to transfer their
					servicing needs to more efficient and cost-effective
					self-serve channels • Working closely with the rest of the
					team providing mutual support by training, coaching and
					sharing of knowledge and best practices • Supporting and
					testing products or version enhancements What we’re looking
					for: • Exposure to Client Channels e.g. Barclays.Net,
					iPortal, Bacs • Experience in systems such as Siebel, AFTS,
					QMS, etc • Confident with Computer literacy • Proactive
					focus towards request resolution efficiency, quickly and
					accurately Skills that will help you in the role: • Exposure
					to customer service skills • Excellent communication skills
					• Ability to adapt to change • Ability to drive
					self-development Where will you be working? In the heart of
					Canary Wharf, our headquarters at Churchill Place boasts
					onsite amenities such as; a gym, staff restaurant and deli
					bar, and is easily accessible by tube and bus links. With a
					population of around 5000 staff the atmosphere is second to
					none with a real buzz being created around the offices
					within.
				</p>
			</main>
		</section>
	);
}

export default JobView;
