import React from "react";

function Replies({ comment }) {
	console.log("comment:", comment);
	return (
		<ul className="replies">
			<div className="line"></div>
			{comment.replies &&
				comment.replies.map((reply, index) => (
					<li className="reply comment" key={index}></li>
				))}
		</ul>
	);
}

export default Replies;
