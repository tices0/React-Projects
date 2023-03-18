import React, { useRef } from "react";
import { user } from "..";
import { addTopLevelComment, addReply } from "..";

function AddComment({ comment, commentIndex, isReply, isEdit }) {
	const textareaRef = useRef();
	console.log(comment);

	const handleSubmit = event => {
		event.preventDefault();
		if (textareaRef.current.innerHTML === "") return null;
		if (!isReply) {
			addTopLevelComment(textareaRef.current.innerHTML);
			textareaRef.current.innerHTML = "";
		} else if (!isEdit) {
			addReply(commentIndex, textareaRef.current.innerHTML);
			textareaRef.current.innerHTML = `@${comment.user.username}`;
		}
	};

	return (
		<form className="text-box" onSubmit={handleSubmit}>
			<img src={require(`../images/avatars/${user.image.png}`)} alt="" />
			<div
				className="textarea"
				ref={textareaRef}
				contentEditable
				suppressContentEditableWarning
			>
				{isEdit ? (
					comment.replyingTo ? (
						<>@{comment.user.username + " " + comment.content}</>
					) : (
						comment.content
					)
				) : isReply ? (
					<>@{comment.user.username}</>
				) : (
					""
				)}
			</div>
			<input type="submit" value="SEND" className="submit" />
		</form>
	);
}

export default AddComment;
