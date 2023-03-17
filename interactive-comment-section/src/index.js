import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.css";
import App from "./App";
import jsonData from "./data.json";

// localStorage.removeItem("data");

if (!localStorage.getItem("data"))
	localStorage.setItem("data", JSON.stringify(jsonData));

let parsedJsonData = JSON.parse(localStorage.data);

export const addToCommentScore = comment => {
	parsedJsonData.comments.forEach(element => {
		if (element.id === comment.id) {
			element.score++;
		}
		element.replies.forEach(reply => {
			if (reply.id === comment.id) {
				reply.score++;
			}
		});
	});
};

export const substractFromCommentScore = comment => {
	parsedJsonData.comments.forEach(element => {
		if (element.id === comment.id) {
			element.score--;
		}
		element.replies.forEach(reply => {
			if (reply.id === comment.id) {
				reply.score--;
			}
		});
	});
};

const root = createRoot(document.getElementById("root"));
root.render(<App comments={parsedJsonData.comments} />);

export const user = parsedJsonData.currentUser;
