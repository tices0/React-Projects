import React, { useState } from "react";
import "../styles/style.css";
import ReactPaginate from "react-paginate";

let items = [];
for (let i = 0; i < 15; i++) {
	items.push(i);
}

function SingleJob({ currentItems }) {
	return (
		<ul className="jobs">
			{currentItems &&
				currentItems.map(item => (
					<li key={item}>
						<div className="img-container">
							<p>not found {item}</p>
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
									<i className="fa-solid fa-briefcase"></i>5
									days ago
								</div>
							</div>
						</div>
					</li>
				))}
		</ul>
	);
}

function Jobs({ itemsPerPage }) {
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
			<SingleJob currentItems={currentItems} />
			<nav>
				<ReactPaginate
					breakLabel="..." // turn this into font awesome ... icon
					nextLabel=">" // change into icon
					onPageChange={handlePageClick}
					pageRangeDisplayed={3}
					pageCount={pageCount}
					previousLabel="<" // change into icon
					renderOnZeroPageCount={null}
					marginPagesDisplayed={1}
				/>
			</nav>
		</section>
	);
}

export default Jobs;
