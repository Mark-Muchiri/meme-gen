import propTypes from 'prop-types';
import { useState } from 'react';

export default function Joke(props) {
    Joke.propTypes = {
        setup: propTypes.string,
        punchline: propTypes.string,
    };
    const styles = {
        marginTop: '-20px',
        marginBottom: '15px',
        border: '1px solid',
        borderRadius: '5px',
        paddingTop: '3px',
        paddingBottom: '4px',
        paddingLeft: '13px',
        paddingRight: '13px',
    };
    /**
 * Challenge:
 * - Create state `isShown` (boolean, default to `false`)
 * - Add a button that toggles the value back and forth
 */
    const [isShown, setIsShown] = useState(false);
    function showSwitch() {
        setIsShown(prevIsShown => {
            return prevIsShown = !prevIsShown;
        });
    }
    return (
        <section>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            {<button onClick={showSwitch} style={styles}>{isShown ? "Hide" : "Show"} punchline</button>}
            <div className='line' />
        </section>
    );
}