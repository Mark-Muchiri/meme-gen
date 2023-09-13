import { useEffect, useState } from "react";

export default function WindowTracker() {
    /**
 * Challenge:
 * 1. Create state called `windowWidth`, default to 
 *    `window.innerWidth`
 * 2. When the window width changes, update the state
 * 3. Display the window width in the h1 so it updates
 *    every time it changes
 */
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function watchWidth() {
            console.log('setting up...')
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', watchWidth)
        // This is meant to avoid memory leaking
        // Memory leaking means the dom is looking for state for a component that is not rendering.
        // To counteract this we need to add a function to the effect that cleans uo the memeory leak when the component is not being rendered
        return function () {
            console.log('cleaning up...')
            window.removeEventListener("resize", watchWidth)
        }
    }, []);

    return (
        <h1>Window width: {windowWidth}</h1>
    );
}
