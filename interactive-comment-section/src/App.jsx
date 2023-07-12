import React from "react";
import Comments from "./components/Comment";
import AddComment from "./components/AddComment";

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
