import React, { useState } from "react";
import "../styles/style.css";
import ReactPaginate from "react-paginate";

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
			</ul>
			<nav>
				<Pagination />
			</nav>
		</section>
	);
}

export default Jobs;

function Pagination() {
	const [itemOffset, setItemOffset] = useState(0);

	let itemsPerPage = 2;

	const endOffset = itemOffset + itemsPerPage;

	console.log(`Loading items from ${itemOffset} to ${endOffset}`);
	// const currentItems = items.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(16 / itemsPerPage);

	const handlePageClick = event => {
		const newOffset = (event.selected * itemsPerPage) % 16;
		console.log(
			`User requested page number ${event.selected}, which is offset ${newOffset}`,
		);
		setItemOffset(newOffset);
	};

	return (
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
	);
}
