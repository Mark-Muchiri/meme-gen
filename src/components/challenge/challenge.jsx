import './challenge.css';
import boxes from './boxes';
import { useState } from 'react';
import propTypes from 'prop-types';

export default function Challenge(props) {
    Challenge.propTypes = {
        darkmode: propTypes.bool.isRequired,
    };
    /**
     * Challenge part 2:
     * 1. Create a separate component called "Box" and
     *    replace the `div` above with our <Box /> components
     * 2. Pass the Box component a prop called `on` with the
     *    value of the same name from the `boxes` objects
     * 3. In the Box component, apply dynamic styles to determine
     *    the backgroundColor of the box. If it's `on`, set the
     *    backgroundColor to "#222222". If off, set it to "none"
     */
    const [data, setData] = useState(boxes);
    const [theme, setTheme] = useState(props.darkmode);

    function themeSwitch() {
        setTheme(color => !color);
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