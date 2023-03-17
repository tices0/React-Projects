import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.css";
import App from "./App";
import jsonData from "./data.json";
const moment = require("moment");

// order replies by data added
// - get relative time and time created of comment
// - sort replies list

// localStorage.removeItem("data");

if (!localStorage.getItem("data"))
	localStorage.setItem("data", JSON.stringify(jsonData));

let parsedJsonData = JSON.parse(localStorage.data);
parsedJsonData.comments.sort((a, b) => b.score - a.score);

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
	parsedJsonData.comments.sort((a, b) => b.score - a.score);
	localStorage.data = JSON.stringify(parsedJsonData);
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
	parsedJsonData.comments.sort((a, b) => b.score - a.score);
	localStorage.data = JSON.stringify(parsedJsonData);
};

export const addTopLevelComment = commentContent => {
	console.log("comment added");
	const currentDate = new Date().toISOString().slice(0, 10);
	const newComment = {
		id: 1,
		content: commentContent,
		dateCreated: currentDate,
		createdAt: moment(this.dateCreated, "YYYY-MM-DD").fromNow(),
		score: 0,
		user: user,
		replies: [],
	};
	console.log(newComment);
};

const root = createRoot(document.getElementById("root"));
root.render(<App comments={parsedJsonData.comments} />);

export const user = parsedJsonData.currentUser;
