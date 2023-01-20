import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";

let questions;

console.log(localStorage.getItem("questions"));
console.log(JSON.parse(localStorage.getItem("questions")));

if (JSON.parse(localStorage.getItem("questions"))) {
	questions = JSON.parse(localStorage.getItem("questions"));
	console.log("local storage");
} else {
	questions = [];
	console.log("not local storage");
}

console.log(questions);

function Question({ questionList }) {
	const [show, setShow] = useState({});
	const onClick = index =>
		setShow(prev => ({ ...prev, [index]: !Boolean(prev[index]) }));

	const questions = questionList.map((question, index) => (
		<div key={index} onClick={() => onClick(index)} className="container">
			<div className="line"></div>
			{show[index] ? (
				<ColorToBlue question={question} show={show} index={index} />
			) : (
				<ColorToNormal question={question} show={show} index={index} />
			)}

			{show[index] ? <Answer question={question} /> : null}
		</div>
	));
	return <section>{questions}</section>;
}

function Answer(props) {
	const question = props.question;
	console.log(question.question);
	const answer = (
		<div className="answer">
			<p>{question.answer}</p>
		</div>
	);
	return answer;
}

function DownArrow() {
	return <i className="fa-solid fa-caret-down"></i>;
}

function UpArrow() {
	return <i className="fa-solid fa-caret-up"></i>;
}

function ColorToBlue(props) {
	return (
		<div
			className="question-container"
			style={{ backgroundColor: "#e3eafd" }}
		>
			<h3 className="question">{props.question.question}</h3>
			<div className="drop-icon">
				{props.show[props.index] ? <UpArrow /> : <DownArrow />}
			</div>
		</div>
	);
}

function ColorToNormal(props) {
	return (
		<div className="question-container">
			<h3 className="question">{props.question.question}</h3>
			<div className="drop-icon">
				{props.show[props.index] ? <UpArrow /> : <DownArrow />}
			</div>
		</div>
	);
}

console.log(questions);

function NewQuestion(question, answer) {
	this.question = question;
	this.answer = answer;

	this.addToArray = function () {
		questions.push(this);
	};

	this.addToArray();

	console.log("add to questions list");
	localStorage.setItem("questions", JSON.stringify(questions));
}

const example1 = new NewQuestion(
	"How does this work?",
	"Lorem ipsum dolor sit amet. Sit autem odit At consequatur ipsum vel facilis molestiae ut itaque quas eos necessitatibus necessitatibus aut tenetur debitis et facilis architecto. Sit quisquam impedit eos eveniet doloremque et omnis obcaecati aut illo aperiam est odit ratione eos rerum voluptatem ea reiciendis quaerat.",
);

const example2 = new NewQuestion(
	"Where can I find you?",
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus in ornare quam viverra orci sagittis eu. Sit amet tellus cras adipiscing enim eu turpis egestas. Tristique senectus et netus et malesuada fames ac turpis. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Sit amet venenatis urna cursus eget nunc scelerisque. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Consectetur a erat nam at lectus urna. Commodo elit at imperdiet dui accumsan sit. Turpis egestas sed tempus urna et pharetra pharetra massa. Tristique magna sit amet purus gravida. Euismod in pellentesque massa placerat duis. At augue eget arcu dictum varius duis at consectetur.",
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Question questionList={questions} />);

// button
const formContainer = ReactDOM.createRoot(document.getElementById("form"));

function Button() {
	function showForm() {
		formContainer.render(<New />);
	}

	return (
		<button onClick={showForm} className="btn btn-primary">
			<i>+</i> Add FAQ
		</button>
	);
}

const buttonContainer = ReactDOM.createRoot(document.getElementById("button"));
buttonContainer.render(<Button />);

// console.log(questions.length);
// let length = questions.length;

// questions[questions.length] = { example: "worked" };

// console.log(length);

// const converter = require("number-to-words");
// console.log(converter.toWords(length), "length");

function New() {
	function hideForm() {
		formContainer.render(null);
	}

	const [question, setQuestion] = useState("");
	const [answer, setAnswer] = useState("");

	function submitNew(event) {
		console.log("submit");
		questions[questions.length] = new NewQuestion(question, answer);
		console.log(questions.length);
		console.log(questions);

		return null;
	}

	const questionChange = event => setQuestion(event.target.value);
	const answerChange = event => setAnswer(event.target.value);

	return (
		<form onSubmit={submitNew}>
			<i onClick={hideForm} className="fa-solid fa-xmark fa-xl"></i>
			<input
				type="text"
				className="new new-question"
				placeholder="How do I contact you?"
				onChange={questionChange}
				// value={this.value}
			/>
			<textarea
				className="new new-answer"
				placeholder="You can email us at company@example.com or call us at 01234 567890."
				cols="30"
				rows="10"
				onChange={answerChange}
			></textarea>
			<input type="submit" value="Submit" className="btn btn-primary" />
		</form>
	);
}
