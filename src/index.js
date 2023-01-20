import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";

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

let questions = [];

function NewQuestion(question, answer) {
	this.question = question;
	this.answer = answer;

	this.addToArray = function () {
		questions.push(this);
	};

	this.addToArray();
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

function Button() {
	return (
		<button className="btn btn-primary">
			<i>+</i> Add FAQ
		</button>
	);
}

const buttonContainer = ReactDOM.createRoot(document.getElementById("button"));
buttonContainer.render(<Button />);

function New() {
	return (
		<form action="">
			<input
				type="text"
				className="new-question"
				placeholder="How do I contact you?"
			/>
			<textarea
				className="new-answer"
				placeholder="You can email us at company@example.com or call us at 01234 56789"
				cols="30"
				rows="10"
			></textarea>
			<input type="submit" value="Submit" className="btn btn-primary" />
		</form>
	);
}

const formContainer = ReactDOM.createRoot(document.getElementById("form"));
formContainer.render(<New />);
