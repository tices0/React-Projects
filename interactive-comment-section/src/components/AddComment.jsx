import React from "react";
import { user } from "..";

function AddComment({ commentValue }) {
	console.log("comment value:", commentValue);

	return (
		<form className="text-box">
			<img src={require(`../images/avatars/${user.image.png}`)} alt="" />
			<div
				className="textarea"
				contentEditable
				suppressContentEditableWarning
			>
				<p className="content">
					{commentValue && commentValue[0] !== undefined ? (
						<>@{commentValue.map(value => value + " ")}</>
					) : (
						commentValue
					)}
				</p>
			</div>
			<input type="submit" value="SEND" className="submit" />
		</form>
	);
}

export default AddComment;
