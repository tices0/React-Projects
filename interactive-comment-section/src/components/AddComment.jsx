import React, { useRef } from "react";
import { user } from "..";
import { addTopLevelComment } from "..";

function AddComment({ commentValue }) {
	const textareaRef = useRef();

	const handleSubmit = event => {
		event.preventDefault();
		addTopLevelComment(textareaRef.current.innerHTML);
		textareaRef.current.innerHTML = "";
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
				{commentValue ? (
					<>
						{commentValue[0] !== undefined ? (
							<>@{commentValue.map(value => value + " ")}</>
						) : (
							commentValue
						)}
					</>
				) : (
					""
				)}
			</div>
			<input type="submit" value="SEND" className="submit" />
		</form>
	);
}

export default AddComment;
