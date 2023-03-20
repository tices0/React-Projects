import React from "react";

function DeleteScreen() {
	return (
		<div className="big-delete-container">
			<div className="delete-container">
				<h1>Delete comment</h1>
				<p>
					Are you sure you want to delete this comment? This will
					remove the comment and this can't be undone.
				</p>
				<div className="btns">
					<button className="cancel">No, cancel</button>
					<button className="delete">Yes, delete</button>
				</div>
			</div>
		</div>
	);
}

export default DeleteScreen;
