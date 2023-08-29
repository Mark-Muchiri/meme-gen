import "./Form.css";

export default function Form() {
    return (
        <>
            <div className="form-section">
                {/* inputs container */}
                <div className="inputs-container">
                    <input type="text" placeholder="Shut up" />
                    <input type="text" placeholder="and take my money" />
                </div>
                <div className="button">
                    <button>
                        <p>Get a new meme image 🏞️</p>
                    </button>
                </div>
            </div>
        </>
    );
}
