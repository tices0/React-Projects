import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.css";
import App from "./App";
import jsonData from "./data.json";
const moment = require("moment");

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
	const highestId = getHighestId();
	const newComment = {
		id: highestId + 1,
		content: commentContent,
		createdAt: moment().format("DD-MM-YYYY, HH:mm:ss"),
		score: 0,
		user: user,
		replies: [],
	};
	console.log(newComment);
	parsedJsonData.comments = [...parsedJsonData.comments, newComment];
	localStorage.data = JSON.stringify(parsedJsonData);
};

const getHighestId = () => {
	let highestId = Math.max(
		...parsedJsonData.comments.map(comment => comment.id),
	);
	let replyIds = [];
	parsedJsonData.comments.forEach(comment => {
		if (comment.replies.length > 0) {
			replyIds = [
				...replyIds,
				Math.max(...comment.replies.map(reply => reply.id)),
			];
		}
	});
	if (Math.max(...replyIds) > highestId) highestId = Math.max(...replyIds);
	return highestId;
};

export const getTimeAgo = timeCommentCreated => {
	return moment(timeCommentCreated, "DD-MM-YYYY, HH:mm:ss")
		.startOf("minute")
		.fromNow();
};

const root = createRoot(document.getElementById("root"));
root.render(<App comments={parsedJsonData.comments} />);

export const user = parsedJsonData.currentUser;
