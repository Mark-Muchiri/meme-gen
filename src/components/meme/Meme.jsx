import './Meme.css';

export default function Meme() {
    return (
        <>
            <div className="meme-image-container">
                <p className='top-text'>SHUT UP</p>
                <img className='meme-img' src="images/memeimg.png" alt="Meme image generated" />
                <p className='bottom-text'>AND TAKE MY MONEY</p>
            </div>
        </>
    );
}
