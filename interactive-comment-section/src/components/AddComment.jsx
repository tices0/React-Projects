import React, { useRef } from "react";
import { user } from "..";
import { addTopLevelComment } from "..";

function AddComment({ commentValue, setReload }) {
	const textareaRef = useRef();
	let isReply = false;
	let isEdit = false;
	if (commentValue !== undefined) {
		if (commentValue[0] !== undefined) isReply = true;
		if (commentValue[1] !== "") isEdit = true;
	}

	const handleSubmit = event => {
		// event.preventDefault();
		if (!isReply) addTopLevelComment(textareaRef.current.innerHTML);
		textareaRef.current.innerHTML = "";
		setReload(true);
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
					isReply ? (
						<>@{commentValue.map(value => value + " ")}</>
					) : (
						commentValue
					)
				) : isReply ? (
					<>@{commentValue[0]}</>
				) : (
					""
				)}
			</div>
			<input type="submit" value="SEND" className="submit" />
		</form>
	);
}

export default AddComment;
