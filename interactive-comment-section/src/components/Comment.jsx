import React from "react";

function Comments({ comment, index }) {
	console.log(comment);
	console.log(index);
	return (
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
							src={require(`../.${comment.user.image.png}`)}
							alt="pfp"
						/>
						{/* <img
							src={require("../images/avatars/image-amyrobson.png")}
							alt=""
						/> */}

						{/* <img
							src={require("")}
							alt=""
						/> */}

						<h6 className="username">{comment.user.username}</h6>
						<p className="time">{comment.createdAt}</p>
					</div>
					<div className="right">
						<button className="reply">
							<i className="fas fa-reply"></i>
							Reply
						</button>
					</div>
				</div>
				<p className="content">{comment.content}</p>
			</section>
		</li>
	);
}

export default Comments;
