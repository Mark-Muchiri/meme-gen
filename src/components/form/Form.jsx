import "./Form.css";
import memeData from "../../data//memesData";

export default function Form() {

    /**
     * Challenge: Get a random image from the `memesData` array
     * when the "new meme image" button is clicked.
     *
     * Log the URL of the image to the console. (Don't worry
     * about displaying the image yet)
     */
    function randomMeme() {
        const memes = memeData.data.memes;
        const random_meme = memes[Math.floor(Math.random() * memes.length)];
        const url = random_meme.url;
        console.log(url);
    }

    return (
        <>
            <div className="form-section">
                {/* inputs container */}
                <div className="inputs-container">
                    <input type="text" placeholder="Shut up" />
                    <input type="text" placeholder="and take my money" />
                </div>
                <div className="button">
                    <button onClick={randomMeme} >
                        <p>Get a new meme image 🏞️</p>
                    </button>
                </div>
            </div>
        </>
    );
}
