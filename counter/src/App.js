import "./styles/styles.css";
import { useState } from "react";

function App() {
	const [counter, setCounter] = useState(0);

	function decreaseCounter() {
		setCounter(counter - 1);
	}
	function resetCounter() {
		setCounter(0);
	}
	function increaseCounter() {
		setCounter(counter + 1);
	}

	return (
		<div className="container">
			<h1>Counter</h1>
			<p> {counter} </p>
			<div className="btns">
				<button
					onClick={decreaseCounter}
					className="decrease btn btn-outline-dark"
				>
					decrease
				</button>
				<button
					onClick={resetCounter}
					className="reset btn btn-outline-dark"
				>
					reset
				</button>
				<button
					onClick={increaseCounter}
					className="increase btn btn-outline-dark"
				>
					increase
				</button>
			</div>
		</div>
	);
}

export default App;
