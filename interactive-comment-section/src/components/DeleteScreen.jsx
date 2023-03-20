import React from "react";
import { deleteComment } from "..";

function DeleteScreen({ commentId, setOnDeleteScreen }) {
	return (
		<div className="big-delete-container">
			<div className="delete-container">
				<h1>Delete comment</h1>
				<p>
					Are you sure you want to delete this comment? This will
					remove the comment and this can't be undone.
				</p>
				<div className="btns">
					<button
						className="cancel"
						onClick={() => setOnDeleteScreen(false)}
					>
						No, cancel
					</button>
					<button
						className="delete"
						onClick={() => deleteComment(commentId)}
					>
						Yes, delete
					</button>
				</div>
			</div>
		</div>
	);
}

export default DeleteScreen;
