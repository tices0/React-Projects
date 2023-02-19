import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";
import question_svg from "./media/undraw_adventure_4hum 1.svg";

function App() {
	const question = {
		type: "capital",
		options: {
			A: "Vietnam",
			B: "Malaysia",
			C: "Sweden",
			D: "Austria",
		},
		correct: function () {
			return this.options.B;
		},
	};

	const correctRef = useRef();
	const incorrectRef = useRef([]);

	const Options = () => {
		let options = [];
		for (const key in question.options) {
			let option;
			if (question.correct() === question.options[key]) {
				option = (
					<button
						onClick={() => setAnswer(question.options[key])}
						type="submit"
						ref={correctRef}
						className="btn btn-outline-secondary"
						key={key}
					>
						<span className="letter">{key}</span>
						<span className="answer">{question.options[key]}</span>
					</button>
				);
			} else {
				option = (
					<button
						// onClick={() => console.log("clicked")}
						onClick={() => {
							setAnswer(question.options[key]);
							// console.log("click incorrect");
						}}
						key={key}
						type="submit"
						ref={incorrectRef}
						className="btn btn-outline-secondary"
					>
						<span className="letter">{key}</span>
						<span className="answer">{question.options[key]}</span>
					</button>
				);
			}
			options.push(option);
		}
		return options;
	};

	const [answer, setAnswer] = useState();

	useEffect(() => {
		if (typeof answer !== "undefined") {
			if (answer === question.correct()) {
				console.log("correct");
				correctRef.current.style.backgroundColor = "#60bf88";
			} else {
				console.log("incorrect");
				incorrectRef.current.style.backgroundColor = "#ea8282";
			}
		}
		// eslint-disable-next-line
	}, [answer]);

	// const [correctAnswer, setCorrectAnswer] = useState();
	// const [correct, setCorrect] = useState();
	// const [score, setScore] = useState(0);

	const handleSubmit = event => {
		event.preventDefault();
		console.log("form submitted");
	};

	return (
		<section className="quiz">
			<h1>Country Quiz</h1>
			<img src={question_svg} alt="" />
			<h2>Kuala Lumpur is the capital of</h2>
			<form id="form" onSubmit={handleSubmit} className="options">
				<Options />
			</form>
		</section>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
