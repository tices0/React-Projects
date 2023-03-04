import React, { createRef, useEffect, useState } from "react";
import "../styles/style.css";
import ReactPaginate from "react-paginate";

let items = [];
for (let i = 0; i < 15; i++) {
	items.push(i);
}

function SingleJob(props) {
	const { currentItems, setJobView } = props;
	const ref = createRef();
	useEffect(() => {
		console.log(ref.current.clientHeight);
	});
	// 147px
	// 155px

	return (
		<ul ref={ref} className="jobs">
			{currentItems &&
				currentItems.map(item => (
					<li key={item} onClick={() => setJobView(true)}>
						<div className="img-container">
							<p>not found {item}</p>
						</div>
						<div className="info">
							<div className="left">
								<h6>New York University</h6>
								<p>Senior Engineer</p>
								<button className="full-time">Full time</button>
							</div>
							<div className="right">
								<div className="location">
									<i className="fa-solid fa-globe-americas"></i>
									New York
								</div>
								<div className="time">
									<i className="fa-solid fa-clock"></i>5 days
									ago
								</div>
							</div>
						</div>
					</li>
				))}
		</ul>
	);
}

// let maxPerPage = 0;

function Jobs(props) {
	const { itemsPerPage, setJobView } = props;
	const [itemOffset, setItemOffset] = useState(0);

	// Simulate fetching items from another resources.
	// (This could be items from props; or items loaded in a local state
	// from an API endpoint with useEffect and useState)
	const endOffset = itemOffset + itemsPerPage;
	console.log(`Loading items from ${itemOffset} to ${endOffset}`);
	const currentItems = items.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(items.length / itemsPerPage);

	// Invoke when user click to request another page.
	const handlePageClick = event => {
		const newOffset = (event.selected * itemsPerPage) % items.length;
		console.log(
			`User requested page number ${event.selected}, which is offset ${newOffset}`,
		);
		setItemOffset(newOffset);
	};

	return (
		<section className="jobs-container">
			<SingleJob setJobView={setJobView} currentItems={currentItems} />
			<nav>
				<ReactPaginate
					breakLabel={<i className="fa-solid fa-ellipsis"></i>} // turn this into font awesome ... icon
					nextLabel={<i className="fa-solid fa-chevron-right"></i>}
					onPageChange={handlePageClick}
					pageRangeDisplayed={3}
					pageCount={pageCount}
					previousLabel={<i className="fa-solid fa-chevron-left"></i>}
					renderOnZeroPageCount={null}
					marginPagesDisplayed={1}
				/>
			</nav>
		</section>
	);
}

export default Jobs;
