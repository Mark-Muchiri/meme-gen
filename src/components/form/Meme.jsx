import "./Meme.css";
import memeData from "../../data/memesData";
import { useState } from "react";

export default function Meme() {
	/**
	 * Challenge: 
	 * 1. Set up the text inputs to save to
	 *    the `topText` and `bottomText` state variables.
	 * 2. Replace the hard-coded text on the image with
	 *    the text being saved to state.
	 */

	const [memeImg, setMemeImg] = useState("images/memeimg.png");
	const [formData, setFormData] = useState(
		{
			toptext: '',
			bottomtext: '',
		}
	);

	function randomMeme() {
		const memes = memeData.data.memes;
		const random_meme = memes[Math.floor(Math.random() * memes.length)];
		const url = random_meme.url;
		setMemeImg(url);
	}
	function handleChange(event) {
		const { name, type, value, checked } = event.target;
		setFormData(prevFormData => ({
			...prevFormData,
			[name]: type === 'checkbox' ? checked : value
		})
		);
	}

	return (
		<>
			{/* form */}
			<div className="form-section">
				{/* inputs container */}
				<div className="inputs-container">
					<input
						onChange={handleChange}
						name="toptext"
						value={formData.toptext}
						type="text"
						placeholder="Top text"
					/>
					<input
						onChange={handleChange}
						name="bottomtext"
						value={formData.bottomtext}
						type="text"
						placeholder="Bottom text"
					/>
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
				<p className="top-text">{formData.toptext}</p>
				<p className="bottom-text">{formData.bottomtext}</p>
			</div>
		</>
	);
}
