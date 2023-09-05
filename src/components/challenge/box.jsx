import propTypes from 'prop-types';

export default function Box(props) {
    Box.propTypes = {
        on: propTypes.bool,
        toggle: propTypes.func,
        id: propTypes.number,
    };

    const styles = {
        borderRadius: '0.3em',
        width: '100px',
        height: '100px',
        padding: '0',
        // onValue style
        backgroundColor: props.on ? '#0f111a' : 'lightslategrey',
        border: props.on ? '1px solid darkslategray' : '1px solid #0f111a'
    };

    return (
        <div onClick={props.toggle} style={styles} className="box"></div>
    );
}