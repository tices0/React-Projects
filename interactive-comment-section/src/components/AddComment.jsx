import React from "react";
import { user } from "..";

function AddComment({ commentValue }) {
	return (
		<form className="text-box" onSubmit={event => event.preventDefault()}>
			<img src={require(`../images/avatars/${user.image.png}`)} alt="" />
			<div
				className="textarea"
				contentEditable
				suppressContentEditableWarning
			>
				{commentValue ? (
					<p className="content">
						{commentValue[0] !== undefined ? (
							<>@{commentValue.map(value => value + " ")}</>
						) : (
							commentValue
						)}
					</p>
				) : (
					""
				)}
			</div>
			<input type="submit" value="SEND" className="submit" />
		</form>
	);
}

export default AddComment;
