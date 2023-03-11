import React, { useState } from "react";
import "../styles/style.css";
import ReactPaginate from "react-paginate";

function SingleJob(props) {
	const { currentItems, setJobView, setCurrentJob } = props;

	return (
		<ul className="jobs">
			{currentItems &&
				currentItems.map((item, index) => (
					<li
						key={index}
						onClick={() => {
							setJobView(true);
							setCurrentJob(item);
						}}
					>
						{"thumbnail" in item ? (
							<div className="img-container">
								<img src={item.thumbnail} alt="" />
							</div>
						) : (
							<div className="not-found">
								<p>not found</p>
							</div>
						)}
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

function Jobs(props) {
	const { itemsPerPage, setJobView, items, setCurrentJob } = props;
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
			<SingleJob
				setJobView={setJobView}
				currentItems={currentItems}
				setCurrentJob={setCurrentJob}
			/>
			<nav>
				<ReactPaginate
					breakLabel={<i className="fa-solid fa-ellipsis"></i>} 
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
