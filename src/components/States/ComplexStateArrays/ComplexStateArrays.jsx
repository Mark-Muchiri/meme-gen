import "./ComplexStateArrays.css";
import { useState } from "react";
export default function ComplexStateArrays() {
	/**
	 * Challenge: See if you can do it all again by yourself :)
	 * => First create an array of the things data in a state
	 * => Render the data in a prop through mapping. Here you'll map through the thingsArray
	 * => Now create an onclick function for adding the items.
	 * => inside the items use the setThingsArray to return an array since here we are using an array in thingsArray. This is for uniformity of the data flowing through. Array in - Array out.
	 * => KEY: Use the spread operator to show all the elements of the array and add the addition function.
	 *
	 * Explanation: The onClick function will now look at the new data in the setThingsArray function. That responds with a callback. that relies on the previous data. 
	 */
	const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"]);

	function addItem() {
		// Build from scratch :)
		setThingsArray((prevThingsArray) => {
			return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`];
		});
	}

	const thingsElements = thingsArray.map((items) => {
		return <p key={items}>{items}</p>;
	});

	return (
		<div>
			<button onClick={addItem}>Add Item</button>
			{thingsElements}
		</div>
	);
}