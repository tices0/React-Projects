import React from "react";
import Comments from "./components/Comment";
import { user } from ".";

// add textarea section at the bottom
// add functionality to button clicks
// - reply button causes text area to show

function App({ comments }) {
	// const [commentValue, setCommentValue] = useState("");

	const handleSubmit = event => {
		event.preventDefault();
		// console.log("comment value:", commentValue);
	};

	return (
		<>
			<ul className="comments">
				{comments &&
					comments.map((comment, index) => (
						<Comments comment={comment} index={index} />
					))}
			</ul>
			<form onSubmit={handleSubmit} className="text-box">
				<img
					src={require(`./images/avatars/${user.image.png}`)}
					alt=""
				/>
				{/* <textarea
					name="add-comment"
					placeholder="Add a comment..."
					value={commentValue}
					onChange={event => setCommentValue(event.target.value)}
				></textarea> */}
				<div class="textarea" contentEditable></div>
				<input type="submit" value="SEND" className="submit" />
			</form>
		</>
	);
}

export default App;
