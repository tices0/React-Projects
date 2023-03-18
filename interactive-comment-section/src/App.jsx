import React, { useState, useEffect } from "react";
import Comments from "./components/Comment";
import AddComment from "./components/AddComment";

function App({ comments }) {
	const [reload, setReload] = useState(false);

	useEffect(() => {
		if (reload) setReload(false);
		if (reload) console.log("reload");
	}, [reload]);

	return (
		<>
			<ul className="comments">
				{comments &&
					comments.map((comment, index) => (
						<Comments
							comment={comment}
							index={index}
							setReload={setReload}
						/>
					))}
			</ul>
			<AddComment setReload={setReload} />
		</>
	);
}

export default App;
