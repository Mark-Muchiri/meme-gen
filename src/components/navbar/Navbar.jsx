import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="Navbar">
        {/* logo container */}
        <div className="logo-container">
          {/* logo img */}
            <img className="logo-img" src="images/troll-face.png" alt="Logo troll face" />
          {/* logo text */}
          <div className="logo-text">
            <p>Meme Generator</p>
          </div>
        </div>

        {/* other text */}
        <div className="other-text">
          <p>React Course - Project 3</p>
        </div>
      </div>
    </>
  );
}
