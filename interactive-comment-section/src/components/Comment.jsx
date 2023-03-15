import React from "react";
import Replies from "./Replies";
import { user } from "..";

// add extra designs for user
// - you tag //
// - edit instead of reply
// - delete button

// add user tag to replies //

function Comments({ comment, index }) {
	return (
		<>
			<li className="comment" key={index}>
				<div className="score">
					<i className="fas fa-plus"></i>
					<div className="value">{comment.score}</div>
					<i className="fas fa-minus"></i>
				</div>
				<section>
					<div className="top">
						<div className="left">
							<img
								src={require(`../images/avatars/${comment.user.image.png}`)}
								alt=""
							/>
							<h6 className="username">
								{comment.user.username}
								<br />
								{user.username === comment.user.username ? (
									<div className="you-tag">you</div>
								) : (
									""
								)}
							</h6>
							<p className="time">{comment.createdAt}</p>
						</div>
						<div className="right">
							<button className="reply">
								<i className="fas fa-reply"></i>
								Reply
							</button>
						</div>
					</div>
					<div className="content">
						{comment.replyingTo ? (
							<i className="replying-to">
								@{comment.replyingTo}{" "}
							</i>
						) : (
							""
						)}
						<p>{comment.content}</p>
					</div>
				</section>
			</li>
			{comment.replies && comment.replies.length > 0 ? (
				<Replies comment={comment} />
			) : (
				""
			)}
		</>
	);
}

export default Comments;
