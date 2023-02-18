import React from "react";
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
		correct: function() {
			return this.options.B;
		},
	};

	console.log(question.correct(), "correct answer");

	const Options = () => {
		let options = [];
		for (const key in question) {
            let option
            if (question.correct() === question[key]) {
                option = (
                    <button type="submit" ref={correct} className="btn btn-outline-secondary">
                     
                        <span className="letter">{key}</span>
                        <span className="answer">{question[key]}</span>
                    </button>
                );
            } else {
                option = (
                    <button type="submit" ref={incorrect} className="btn btn-outline-secondary">
                        <span className="letter">{key}</span>
                        <span className="answer">{question[key]}</span>
                    </button>
                );

            }
			options.push(option);
		}
		return options;
	};

	const handleSubmit = event => {
		event.preventDefault();
	};

	return (
		<section className="quiz">
			<h1>Country Quiz</h1>
			<img src={question_svg} alt="" />
			<h2>Kuala Lumpur is the capital of</h2>
			<form onSubmit={handleSubmit} className="options">
                <Options />
				{/* <button type="submit" className="btn btn-outline-secondary">
					<span className="letter">A</span>
					<span className="answer">Vietnam</span>
				</button>
				<button type="submit" className="btn btn-outline-secondary">
					<span className="letter">B</span>
					<span className="answer">Malaysia</span>
				</button>
				<button type="submit" className="btn btn-outline-secondary">
					<span className="letter">C</span>
					<span className="answer">Sweden</span>
				</button>
				<button type="submit" className="btn btn-outline-secondary">
					<span className="letter">D</span>
					<span className="answer">Austria</span>
				</button> */}
			</form>
		</section>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
