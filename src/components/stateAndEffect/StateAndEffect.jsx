import { useState } from 'react';
import './StateAndEffect.css';
import WindowTracker from './WindowTracker';

export default function StateAndEffec() {
    /**
     * Challenge:
     * 1. Create state called `show`, default to `true`
     * 2. When the button is clicked, toggle `show`
     * 3. Only display `<WindowTracker>` if `show` is `true`
     */
    const [show, setShow] = useState(true);
    function toggleShow() {
        setShow(show => !show);
    }

    return (
        <section>
            <div className="container">
                <button onClick={toggleShow}>
                    <p>Toggle WindowTracker</p>
                </button>
                {show && <WindowTracker />}
            </div>
        </section>
    );
}