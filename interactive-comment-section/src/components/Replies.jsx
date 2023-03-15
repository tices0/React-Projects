import React from "react";
import Comments from "./Comment";

// fix reply section design

function Replies({ comment }) {
	return (
		<ul className="replies">
			<div className="line"></div>
			<ul className="comments">
				{comment.replies &&
					comment.replies.map((reply, index) => (
						<Comments comment={reply} index={index} />
					))}
			</ul>
		</ul>
	);
}

export default Replies;
