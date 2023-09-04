import { useState } from 'react';
import propTypes from 'prop-types';

export default function Box(props) {
    Box.propTypes = {
        on: propTypes.bool,
    };

    const [onValue, setOnValue] = useState(props.on);

    const styles = {
        borderRadius: '0.3em',
        width: '100px',
        height: '100px',
        padding: '0',
        // onValue style
        backgroundColor: onValue ? '#0f111a' : 'lightslategrey',
        border: onValue ? '1px solid darkslategray' : '1px solid #0f111a'
    };

    function colorSwitch() {
        setOnValue(color => !color);
    }
    return (
        <div onClick={colorSwitch} style={styles} className="box"></div>
    );
}