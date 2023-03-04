import React, { createRef, useEffect, useState } from "react";
import "../styles/style.css";
import ReactPaginate from "react-paginate";

// let items = [];
// for (let i = 0; i < 15; i++) {
// 	items.push(i);
// }

function SingleJob(props) {
	const { currentItems, setJobView, setCurrentJob } = props;
	const ref = createRef();
	useEffect(() => {
		console.log(ref.current.clientHeight);
	});
	// 147px
	// 155px

	return (
		<ul ref={ref} className="jobs">
			{currentItems &&
				currentItems.map((item, index) => (
					<li
						key={index}
						onClick={() => {
							setJobView(true);
							setCurrentJob(item);
						}}
					>
						<div className="img-container">
							{"thumbnail" in item ? (
								<img src={item.thumbnail} alt="" />
							) : (
								<p>not found</p>
							)}
						</div>
						<div className="info">
							<div className="left">
								<h6>{item.company_name}</h6>
								<p>{item.title}</p>
								{item.extensions.includes("Full-time") ? (
									<button className="full-time">
										Full time
									</button>
								) : (
									""
								)}
							</div>
							<div className="right">
								<div className="location">
									<i className="fa-solid fa-globe-americas"></i>
									{item.location}
								</div>
								{"posted_at" in item.detected_extensions ? (
									<div className="time">
										<i className="fa-solid fa-clock"></i>
										{item.detected_extensions.posted_at}
									</div>
								) : (
									""
								)}
							</div>
						</div>
					</li>
				))}
		</ul>
	);
}

// let maxPerPage = 0;

function Jobs(props) {
	const { itemsPerPage, setJobView, items } = props;
	const [itemOffset, setItemOffset] = useState(0);

	console.log(items);

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
