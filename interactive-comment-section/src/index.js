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
	console.log("reply added to reply");
	const newReply = getNewComment(replyContent, true);
	const topLevelReplyIsFrom = getTopLevelCommentReplyIsFrom(commentId);
	console.log(topLevelReplyIsFrom);
	comments[topLevelReplyIsFrom].replies = [
		...comments[topLevelReplyIsFrom].replies,
		newReply,
	];
	localStorage.data = JSON.stringify(parsedJsonData);
};

export const editComment = (comment, isReply, newContent) => {
	console.log("comment edited");
	let commentToUpdate = findComment(comment.id, isReply)[0];
	let topLevelReplyIsFrom = findComment(comment.id, isReply)[1];
	if (isReply)
		comments[topLevelReplyIsFrom].replies[commentToUpdate].content =
			newContent;
	else parsedJsonData.comments[commentToUpdate].content = newContent;
	localStorage.data = JSON.stringify(parsedJsonData);
};

export const deleteComment = (commentId, isReply) => {
	console.log("comment deleted");
	let commentToDelete = findComment(commentId, isReply)[0];
	let topLevelReplyIsFrom = findComment(commentId, isReply)[1];

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

	commentContent = addParagraphsToContent(commentContent);
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

function addParagraphsToContent(content) {
	return content
		.replace(/<div>/g, "\n")
		.replace(/<\/div>/g, "")
		.replace(/<br>/g, "\n");
}

const findComment = (commentId, isReply) => {
	let found = false;
	let commentIndex;
	let topLevelReplyIsFrom;
	comments.forEach((comment, commentIndexInComments) => {
		if (!found && comment.id === commentId && !isReply) {
			found = true;
			commentIndex = commentIndexInComments;
		} else {
			comment.replies.forEach((reply, replyIndex) => {
				if (!found && reply.id === commentId) {
					found = true;
					commentIndex = replyIndex;
					isReply = true;
					topLevelReplyIsFrom = commentIndex;
				}
			});
		}
	});
	return [commentIndex, topLevelReplyIsFrom];
};

const getTopLevelCommentReplyIsFrom = commentId => {
	let topLevelReplyIsFrom;
	parsedJsonData.comments.forEach((comment, commentIndex) => {
		comment.replies.forEach(reply => {
			if (reply.id === commentId) {
				topLevelReplyIsFrom = commentIndex;
			}
		});
	});
	return topLevelReplyIsFrom;
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
