import React from "react";
import Comments from "./components/Comment";
import AddComment from "./components/AddComment";
// import { user } from ".";

// add textarea section at the bottom
// add functionality to button clicks
// - reply button causes text area to show

function App({ comments }) {
	return (
		<>
			<ul className="comments">
				{comments &&
					comments.map((comment, index) => (
						<Comments comment={comment} index={index} />
					))}
			</ul>
			<AddComment />
		</>
	);
}

export default App;
