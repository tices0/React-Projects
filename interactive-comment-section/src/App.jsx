import React from "react";
import Comments from "./components/Comment";
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
		</>
	);
}

export default App;
