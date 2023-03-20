import React from "react";
import { deleteComment } from "..";

function DeleteScreen({ commentId, setOnDeleteScreen }) {
	return (
		<section className="delete">
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
						type="submit"
						className="delete"
						onClick={() => deleteComment(commentId)}
					>
						Yes, delete
					</button>
				</div>
			</div>
		</section>
	);
}

export default DeleteScreen;
