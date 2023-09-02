import propTypes from "prop-types";

export default function Star(props) {
    // props validation
    Star.propTypes = {
        isFilled: propTypes.string.isRequired,
        handleClick: propTypes.func.isRequired,
    };

    const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png";
    return (<img
        src={`../images/${starIcon}`}
        className="card--favorite"
        onClick={props.handleClick}
    />);
}