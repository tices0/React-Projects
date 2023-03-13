import React from "react";
import Comments from "./Comment";

function Replies({ comment }) {
	return (
		<ul className="replies">
			<div className="line"></div>
			{comment.replies &&
				comment.replies.map((reply, index) => (
					<Comments comment={reply} index={index} />
				))}
		</ul>
	);
}

export default Replies;
