import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.css";
import App from "./App";
import data from "./data.json";

// console.log(data);
// console.log(window.innerWidth);

export const user = data.currentUser;

// const trial = async () => {
// 	const res = await fetch(require("./data.json"), {
// 		method: "POST",
// 		body: JSON.stringify({ a: 1, b: "Textual content" }),
// 	});
// 	console.log(res);
// 	const json = await res.json();
// 	console.log("json:", json);
// };

// trial();
// console.log(data);

const root = createRoot(document.getElementById("root"));
root.render(<App comments={data.comments} />);
