import './challenge.css';
import boxes from './boxes';
import { useState } from 'react';
import propTypes from 'prop-types'

export default function Challenge(props) {
    Challenge.propTypes = {
        darkmode: propTypes.bool.isRequired,
    }
    /**
 * Challenge part 1:
 * 1. Initialize state with the default value of the
 *    array pulled in from boxes.js
 * 2. Map over that state array and display each one
 *    as an empty square (black border, transparent bg color)
 *    (Don't worry about using the "on" property yet)
 */
    const [data, setData] = useState(boxes);
    const [theme, setTheme] = useState(props.darkmode);

    function themeSwitch() {
        setTheme(color => !color)
    }

    function emptyState() {
        setData();
    }

    const styles = {
        backgroundColor: theme ? '#0f111a' : 'lightslategrey',
        border: theme ? '1px solid darkslategray' : '1px solid white'
    };

    // box map fn
    const boxItems = data.map(items => (
        <div style={styles} className='box' key={items.id}></div>
    ));
    return (
        <main>
            <h1 onClick={emptyState}>Boxes will go here</h1>
            <div onClick={themeSwitch} className='boxes'>
                {boxItems}
            </div>
        </main>
    );
}