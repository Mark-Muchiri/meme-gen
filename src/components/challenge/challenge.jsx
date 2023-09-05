import './challenge.css';
import boxes from './boxes';
import { useState } from 'react';
import Box from './box';

export default function Challenge() {
    const [data] = useState(boxes);

    /**
     * Challenge: Create a toggle() function that logs
     * "clicked!" to the console
     * 
     * Pass that function down to each of the Box components
     * and set it up so when they get clicked it runs the function
     */

    function toggle(id) {
        console.log(id);
    }
    // box map func
    const squareElements = data.map(square => (
        <Box
            key={square.id}
            id={square.id}
            toggle={toggle}
            on={square.on}
        />
    ));

    return (
        <main>
            <h1>Boxes will go here</h1>
            <div className="pos">
                <div className='boxes'>
                    {squareElements}
                </div>
            </div>
        </main>
    );
}