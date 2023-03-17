import React, { useState, useEffect } from "react";
import Comments from "./components/Comment";
import AddComment from "./components/AddComment";

function App({ comments }) {
	const [reload, setReload] = useState(false);

	useEffect(() => {
		if (reload) setReload(false);
	}, [reload]);

	return (
		<>
			<ul className="comments">
				{comments &&
					comments.map((comment, index) => (
						<Comments
							comment={comment}
							index={index}
							reload={reload}
							setReload={setReload}
						/>
					))}
			</ul>
			<AddComment />
		</>
	);
}

export default App;
