import React, { useState } from "react";
import Replies from "./Replies";
import AddComment from "./AddComment";
import { user } from "..";

function Comments({ comment, index }) {
	const [showReplyForm, setShowReplyForm] = useState({});

	const replyButtonClicked = key => {
		setShowReplyForm(old => ({ ...old, [key]: !old[key] }));
	};

	const editButtonClicked = key => {
		setShowReplyForm(old => ({ ...old, [key]: !old[key] }));
	};

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
							{user.username === comment.user.username ? (
								<>
									<button className="delete">
										<i className="fas fa-trash"></i>
										Delete
									</button>
									<button
										className="edit"
										onClick={() => editButtonClicked(index)}
									>
										<i className="fas fa-pen"></i>
										Edit
									</button>
								</>
							) : (
								<button
									className="reply"
									onClick={() => replyButtonClicked(index)}
								>
									<i className="fas fa-reply"></i>
									Reply
								</button>
							)}
						</div>
					</div>
					<p className="content">
						{comment.replyingTo ? (
							<i className="replying-to">
								@{comment.replyingTo}{" "}
							</i>
						) : (
							""
						)}
						{comment.content}
					</p>
				</section>
			</li>
			{showReplyForm[index] ? <AddComment /> : ""}
			{comment.replies && comment.replies.length > 0 ? (
				<Replies comment={comment} />
			) : (
				""
			)}
		</>
	);
}

export default Comments;
