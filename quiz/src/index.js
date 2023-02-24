import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";
import question_svg from "./media/undraw_adventure_4hum 1.svg";

function App() {
	const question = {
		type: "capital",
		place: "Kuala Lumpur",
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
	const incorrectRef = useRef({});

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
						<div className="right">
							<span className="letter">{key}</span>
							<span className="answer">
								{question.options[key]}
							</span>
						</div>
						<i className="fa-regular fa-circle-check"></i>
					</button>
				);
			} else {
				option = (
					<button
						// onClick={() => console.log("clicked")}
						onClick={() => setAnswer(question.options[key])}
						key={key}
						type="submit"
						// ref={incorrectRef}
						ref={ref =>
							(incorrectRef.current[question.options[key]] = ref)
						}
						className="btn btn-outline-secondary"
					>
						<div className="right">
							<span className="letter">{key}</span>
							<span className="answer">
								{question.options[key]}
							</span>
						</div>
						<i className="fa-regular fa-circle-xmark"></i>
					</button>
				);
			}
			options.push(option);
		}
		console.log(incorrectRef.current);
		return options;
	};

	const [answer, setAnswer] = useState();
	const [moveOn, setMoveOn] = useState(false);
	// const [score, setScore] = useState(0);
	const [attempts, setAttempts] = useState(1);
	const [previousFail, setPrevious] = useState();

	useEffect(() => {
		if (typeof answer !== "undefined" && !moveOn) {
			if (answer === question.correct()) {
				console.log("correct");
				// setScore(old => old + 1);
				setMoveOn(true);
			} else {
				if (previousFail !== incorrectRef.current[answer]) {
					console.log("incorrect");
					setPrevious(incorrectRef.current[answer]);
					if (attempts > 1) setMoveOn(true);
					setAttempts(old => old + 1);
				}
			}
		}

		if (moveOn) {
			if (answer === question.correct()) {
				correctRef.current.style.backgroundColor = "#60bf88";
				correctRef.current.style.borderColor = "#60bf88";
			} else {
				incorrectRef.current[answer].style.backgroundColor = "#ea8282";
				incorrectRef.current[answer].style.borderColor = "#ea8282";
			}
		}

		if (typeof previousFail !== "undefined") {
			console.log("attempts more than 1");
			previousFail.style.backgroundColor = "#ea8282";
			previousFail.style.borderColor = "#ea8282";
		}

		// eslint-disable-next-line
	}, [answer, moveOn]);

	const handleSubmit = event => {
		event.preventDefault();
		console.log("next question");
	};

	return (
		<section className="quiz">
			<h1>Country Quiz</h1>
			<img src={question_svg} alt="" />
			<h2>{question.place} is the capital of</h2>
			<form id="form" onSubmit={handleSubmit} className="options">
				<Options />
				{moveOn ? (
					<input type="submit" value="Next" className="next" />
				) : (
					""
				)}
			</form>
		</section>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
