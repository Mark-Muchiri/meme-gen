import "./Meme.css";
// import memeData from "../../data/memesData";
import { useEffect, useState } from "react";

export default function Meme() {

	/**
	 * Challenge: 
	 * As soon as the Meme component loads the first time,
	 * make an API call to "https://api.imgflip.com/get_memes".
	 * 
	 * When the data comes in, save just the memes array part
	 * of that data to the `allMemes` state
	 * 
	 * Think about if there are any dependencies that, if they
	 * changed, you'd want to cause to re-run this function.
	 * 
	 * Hint: for now, don't try to use an async/await function.
	 * Instead, use `.then()` blocks to resolve the promises
	 * from using `fetch`. We'll learn why after this challenge.
	 */

	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg"
	});
	const [allMemes, setAllMemes] = useState([]);

	// using an async function inside a useEffect
	/**
	useEffect takes a function as its parameter. If that function
	returns something, it needs to be a cleanup function. Otherwise,
	it should return nothing. If we make it an async function, it
	automatically retuns a promise instead of a function or nothing.
	Therefore, if you want to use async operations inside of useEffect,
	you need to define the function separately inside of the callback
	function, as seen below:
	*/
	useEffect(() => {
		async function getMemes() {
			const res = await fetch("https://api.imgflip.com/get_memes");
			const data = await res.json();
			setAllMemes(data.data.memes);
		}
		getMemes();
	}, []);
	// using a promise inside a useEffect
	// useEffect(() => {
	//     fetch("https://api.imgflip.com/get_memes")
	//         .then(res => res.json())
	//         .then(data => setAllMemes(data.data.memes))
	// }, [])

	function getMemeImage() {
		const randomNumber = Math.floor(Math.random() * allMemes.length);
		const url = allMemes[randomNumber].url;
		setMeme(prevMeme => ({
			...prevMeme,
			randomImage: url
		}));

	}

	function handleChange(event) {
		const { name, value } = event.target;
		setMeme(prevMeme => ({
			...prevMeme,
			[name]: value
		}));
	}

	return (
		<>
			{/* form */}
			<div className="form-section">
				{/* inputs container */}
				<div className="input-pos">
					<div className="inputs-container">
						<input
							onChange={handleChange}
							name="toptext"
							value={meme.toptext}
							type="text"
							placeholder="Top text"
						/>
						<input
							onChange={handleChange}
							name="bottomtext"
							value={meme.bottomtext}
							type="text"
							placeholder="Bottom text"
						/>
					</div>
				</div>
				<div className="button">
					<button onClick={getMemeImage}>
						<p>Get a new meme image 🏞️ </p>
					</button>
				</div>
			</div>

			{/* image */}
			<div className="meme-image-container">
				<img
					className="meme-img"
					src={meme.randomImage}
					// src="images/allMemes.png"
					alt="Meme image generated"
				/>
				<p className="top-text">{meme.toptext}</p>
				<p className="bottom-text">{meme.bottomtext}</p>
			</div>
			{/* <pre>{JSON.stringify(allMemes, null, 2)}</pre> */}
		</>
	);
}
