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
let comments = parsedJsonData.comments;

// ==================

export const addToCommentScore = comment => {
	comments.forEach(element => {
		if (element.id === comment.id) {
			element.score++;
		}
		element.replies.forEach(reply => {
			if (reply.id === comment.id) {
				reply.score++;
			}
		});
	});
	comments.sort((a, b) => b.score - a.score);
	localStorage.data = JSON.stringify(parsedJsonData);
};

export const substractFromCommentScore = comment => {
	comments.forEach(element => {
		if (element.id === comment.id) {
			element.score--;
		}
		element.replies.forEach(reply => {
			if (reply.id === comment.id) {
				reply.score--;
			}
		});
	});
	comments.sort((a, b) => b.score - a.score);
	localStorage.data = JSON.stringify(parsedJsonData);
};

// ==================

export const addTopLevelComment = commentContent => {
	console.log("comment added");
	const newComment = getNewComment(commentContent);
	console.log(newComment);
	parsedJsonData.comments = [...parsedJsonData.comments, newComment];
	localStorage.data = JSON.stringify(parsedJsonData);
};

export const addReplyToTopLevelComment = (commentIndex, replyContent) => {
	console.log("reply added");
	const newReply = getNewComment(replyContent, true);
	console.log(newReply);
	comments[commentIndex].replies = [
		...comments[commentIndex].replies,
		newReply,
	];
	localStorage.data = JSON.stringify(parsedJsonData);
};

export const addReplyToReply = (commentId, replyContent) => {
	console.log("reply added");
	const newReply = getNewComment(replyContent, true);
	console.log(newReply);
	getReplyingTo(commentId);
};

export const editComment = () => {
	console.log("comment edited");
};

export const deleteComment = commentId => {
	console.log("comment deleted");
	let found = false;
	let commentToDelete;
	let isReply = false;
	let topLevelReplyIsFrom;

	comments.forEach((comment, commentIndex) => {
		if (!found && comment.id === commentId) {
			console.log("checking comments...", commentIndex);
			console.log("found:", comment);
			found = true;
			commentToDelete = commentIndex;
		} else {
			comment.replies.forEach((reply, replyIndex) => {
				if (!found && reply.id === commentId) {
					console.log("checking replies...", commentIndex);
					found = true;
					commentToDelete = replyIndex;
					isReply = true;
					topLevelReplyIsFrom = commentIndex;
				}
			});
		}
	});

	if (isReply)
		comments[topLevelReplyIsFrom].replies.splice(commentToDelete, 1);
	else parsedJsonData.comments.splice(commentToDelete, 1);
	localStorage.data = JSON.stringify(parsedJsonData);
};

// ==================

const getNewComment = (commentContent, isReply) => {
	let replyingTo;
	if (isReply) {
		replyingTo = commentContent.substring(0, commentContent.indexOf(" "));
		replyingTo = replyingTo.split("@")[1];
		commentContent = commentContent.substring(
			commentContent.indexOf(" ") + 1,
		);
	}

	const highestId = getHighestId();
	const newComment = {
		id: highestId + 1,
		content: commentContent,
		createdAt: moment().format("DD-MM-YYYY, HH:mm:ss"),
		score: 0,
		user: user,
	};
	if (isReply) newComment.replyingTo = replyingTo;
	else newComment.replies = [];
	return newComment;
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

const getReplyingTo = commentId => {
	parsedJsonData.comments.forEach(comment => {
		comment.replies.forEach(reply => {
			if (reply.id === commentId) console.log(commentId, "found");
		});
	});
};

// ==================

export const getTimeAgo = timeCommentCreated => {
	return moment(timeCommentCreated, "DD-MM-YYYY, HH:mm:ss")
		.startOf("minute")
		.fromNow();
};

// ==================

const root = createRoot(document.getElementById("root"));
root.render(<App comments={parsedJsonData.comments} />);

export const user = parsedJsonData.currentUser;
