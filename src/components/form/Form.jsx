import "./Form.css";
import memeData from "../../data//memesData";
import { useState } from "react";

export default function Form() {
	/**
	 * Challenge: Save the random meme URL in state
	 * - Create new state called `memeImage` with an
	 *   empty string as default
	 * - When the getMemeImage function is called, update
	 *   the `memeImage` state to be the random chosen
	 *   image URL
	 * - Below the div.form, add an <img /> and set the
	 *   src to the new `memeImage` state you created
	 */

	const [memeImg, setMemeImg] = useState("images/memeimg.png");
	const [memeName, setMemeName] = useState("AND TAKE MY MONEY");
	const [prevMemeName, setPrevMemeName] = useState("SHUT UP")

	function randomMeme() {
		const memes = memeData.data.memes;
		const random_meme = memes[Math.floor(Math.random() * memes.length)];
		const url = random_meme.url;
		const name = random_meme.name;
		console.log(url, name);
		setMemeImg(url);
		setMemeName(name);
		setPrevMemeName()
	}

	return (
		<>
			{/* form */}
			<div className="form-section">
				{/* inputs container */}
				<div className="inputs-container">
					<input type="text" placeholder="Shut up" />
					<input type="text" placeholder="and take my money" />
				</div>
				<div className="button">
					<button onClick={randomMeme}>
						<p>Get a new meme image 🏞️ </p>
					</button>
				</div>
			</div>

			{/* image */}
			<div className="meme-image-container">
				<img
					className="meme-img"
					src={memeImg}
					// src="images/memeimg.png"
					alt="Meme image generated"
				/>
				<p className="top-text">{prevMemeName}</p>
				<p className="bottom-text">{memeName}</p>
			</div>
		</>
	);
}
