import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";

function Question(props) {
	const questionList = props.questionList;
	const questions = questionList.map(question => (
		<div onClick={showAnswer()} className="container">
			<div className="line"></div>
			<div className="question-container">
				<h3 className="question">{question.question}</h3>
				<div className="drop-icon">
					<i className="fa-solid fa-caret-down"></i>
				</div>
			</div>
			<div className="answer">
				<p>{question.answer}</p>
			</div>
		</div>
		// Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur doloremque dolore quia iusto repudiandae quisquam rerum maiores ipsa totam illum quam ipsam, dolorum commodi cupiditate.
		// Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit est dignissimos esse ipsa saepe rerum aliquid voluptate consectetur! Nesciunt odio autem ipsa! Sed cupiditate cum iusto voluptate deleniti, quia quisquam.
	));
	return <section>{questions}</section>;
}

// function Answer(props) {}

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

console.log(questions);
console.log(questions[0].question);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Question questionList={questions} />);

function showAnswer() {}
