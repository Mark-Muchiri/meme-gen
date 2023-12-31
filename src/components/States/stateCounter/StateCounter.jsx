import { useState } from "react";
import "./StateCounter.css";

export default function StateCounter() {
	/**
	 * Challenge: Set up state to track our count (initial value is 0)
	 */
	const [count, setCount] = useState(0);

	function add() {
		setCount((prevCount) => prevCount + 1);
	}

	function subtract() {
		setCount((prevCount) => prevCount - 1);
	}

	return (
		<div className="counter">
			<button className="counter--minus" onClick={subtract}>
				–
			</button>
			<div className="counter--count">
				<h1>{count}</h1>
			</div>
			<button className="counter--plus" onClick={add}>
				+
			</button>
		</div>
	);
}
