import React from "react";
import { user } from "..";

function AddComment() {
	return (
		<form className="text-box">
			<img src={require(`./images/avatars/${user.image.png}`)} alt="" />
			<div class="textarea" contentEditable></div>
			<input type="submit" value="SEND" className="submit" />
		</form>
	);
}

export default AddComment;
