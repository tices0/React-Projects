import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";
import question_svg from "./media/undraw_adventure_4hum 1.svg";
import result_svg from "./media/undraw_winners_ao2o 2.svg";

const question0 = {
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

const question1 = {
	type: "flag",
	flag: "finland",
	options: {
		A: "Vietnam",
		B: "Finland",
		C: "Sweden",
		D: "Austria",
	},
	correct: function () {
		return this.options.B;
	},
};

function Questions(props) {
	const { setShowResults, setScore } = props;

	const questions = [question0, question1];
	const [questionIndex, setQuestionIndex] = useState(0);
	const [question, setQuestion] = useState(question0);

	const correctRef = useRef();
	const incorrectRef = useRef({});
	const correctIcon = useRef();
	const incorrectIcon = useRef({});

	const Options = () => {
		let options = [];
		for (const key in question.options) {
			let option;
			if (question.correct() === question.options[key]) {
				option = (
					<button
						onClick={() => setAnswer(question.options[key])}
						type="button"
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
						<i
							ref={correctIcon}
							className="fa-regular fa-circle-check"
						></i>
					</button>
				);
			} else {
				option = (
					<button
						onClick={() => setAnswer(question.options[key])}
						key={key}
						type="button"
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
						<i
							ref={ref =>
								(incorrectIcon.current[question.options[key]] =
									ref)
							}
							className="fa-regular fa-circle-xmark"
						></i>
					</button>
				);
			}
			options.push(option);
		}
		return options;
	};

	const [answer, setAnswer] = useState();
	const [moveOn, setMoveOn] = useState(false);
	const [attempts, setAttempts] = useState(1);
	const [previousFail, setPrevious] = useState();
	const [lastChoice, setLastChoice] = useState();

	useEffect(() => {
		if (typeof answer !== "undefined" && !moveOn) {
			if (answer === question.correct()) {
				console.log("correct");
				setScore(old => old + 1);
				setLastChoice("correct");
				setMoveOn(true);
				setAttempts(old => old + 1);
			} else {
				if (previousFail !== answer) {
					console.log("incorrect");
					setLastChoice(answer);
					if (!previousFail) setPrevious(answer);
					if (attempts > 1) setMoveOn(true);
					setAttempts(old => old + 1);
				}
			}
		}

		if (moveOn || attempts > 1) {
			if (lastChoice === "correct") {
				correctRef.current.style.backgroundColor = "#60bf88";
				correctRef.current.style.borderColor = "#60bf88";
				correctRef.current.style.color = "#fff";
				correctIcon.current.style.display = "block";
			} else {
				incorrectRef.current[lastChoice].style.backgroundColor =
					"#ea8282";
				incorrectRef.current[lastChoice].style.borderColor = "#ea8282";
				incorrectRef.current[lastChoice].style.color = "#fff";
				incorrectIcon.current[lastChoice].style.display = "block";
			}

			if (typeof previousFail !== "undefined") {
				incorrectRef.current[previousFail].style.backgroundColor =
					"#ea8282";
				incorrectRef.current[previousFail].style.borderColor =
					"#ea8282";
				incorrectRef.current[previousFail].style.color = "#fff";
				incorrectIcon.current[previousFail].style.display = "block";
			}
		}

		// eslint-disable-next-line
	}, [answer, moveOn, previousFail]);

	const handleSubmit = event => {
		event.preventDefault();
		console.log("next question");
		if (questionIndex + 1 !== questions.length)
			setQuestionIndex(old => old + 1);
		else setShowResults(true);
	};

	useEffect(() => {
		console.log("useeffect ran");
		setMoveOn(false);
		setQuestion(questions[questionIndex]);
		setAnswer();
		setAttempts(1);
		setLastChoice();
		setPrevious();
		// eslint-disable-next-line
	}, [questionIndex]);

	return (
		<section className="quiz">
			<h1>Country Quiz</h1>
			<img className="svg" src={question_svg} alt="" />
			{question.type === "flag" ? (
				<img
					className="flag"
					crossOrigin="anonymous"
					src={`https://countryflagsapi.com/png/${question.flag}`}
					alt=""
				/>
			) : (
				""
			)}
			{question.type === "capital" ? (
				<h2>{question.place} is the capital of</h2>
			) : (
				<h2>Which country does this flag belong to?</h2>
			)}
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

function Results(props) {
	const { score, setShowResults, setScore } = props;
	return (
		<section className="results">
			<h1>Country Quiz</h1>
			<img src={result_svg} alt="" />
			<h2>Results</h2>
			<p>
				You got <i>{score}</i> correct answers
			</p>
			<button
				onClick={() => {
					setShowResults(false);
					setScore(0);
				}}
				className="btn btn-outline-dark"
			>
				Try Again
			</button>
		</section>
	);
}

function App() {
	const [showResults, setShowResults] = useState(false);
	const [score, setScore] = useState(0);

	if (!showResults)
		return (
			<Questions setShowResults={setShowResults} setScore={setScore} />
		);
	else
		return (
			<Results
				score={score}
				setShowResults={setShowResults}
				setScore={setScore}
			/>
		);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
