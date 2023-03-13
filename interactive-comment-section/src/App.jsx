import React from "react";
import Comments from "./components/Comment";

function App({ comments, user }) {
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
