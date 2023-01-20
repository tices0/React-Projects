import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";

function Question(props) {
	const [show, setShow] = useState(false);
	const onClick = () => {
		console.log(this, "this");
		if (show) {
			setShow(false);
			console.log("show is true");
		} else {
			setShow(true);
			console.log("show is false");
		}
	};

	const questionList = props.questionList;
	const questions = questionList.map(question => (
		<div onClick={onClick} className="container">
			<div className="line"></div>
			<div className="question-container">
				<h3 className="question">{question.question}</h3>
				<div className="drop-icon">
					<i className="fa-solid fa-caret-down"></i>
				</div>
			</div>
			{/* <div className="answer">
				<p>{question.answer}</p>
			</div> */}
			{show ? <Answer question={question} /> : null}
		</div>
	));
	// console.log(questions);
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

function Button() {
	
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Question questionList={questions} />);

const buttonContainer = ReactDOM.createRoot(
	document.getElementsByClassName("button-container"),
);
buttonContainer.render(<Button />);
