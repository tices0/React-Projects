import React from "react";

function App({ comments, user }) {
	return (
		<>
			<ul className="comments">
				{comments &&
					comments.map((comment, index) => (
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
											src={require(`${comment.user.image.png}`)}
											alt=""
										/>
										<h6 className="username">
											{comment.user.username}
										</h6>
										<p className="time">
											{comment.createdAt}
										</p>
									</div>
									<div className="right">
										<div className="reply">
											<i className="fas fa-reply"></i>
											Reply
										</div>
									</div>
								</div>
								<p className="content">{comment.content}</p>
							</section>
						</li>
					))}
			</ul>
		</>
	);
}

export default App;
