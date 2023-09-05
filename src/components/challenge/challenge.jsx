import './challenge.css';
import boxes from './boxes';
import { useState } from 'react';
import Box from './box';

export default function Challenge() {
    const [squares, setSquares] = useState(boxes);

    function toggle(id) {
        /**
         * Challenge: use setSquares to update the
         * correct square in the array.
         * 
         * Make sure not to directly modify state!
         * 
         */
        setSquares((prevSquares) => {
            return (prevSquares.map(square => {
                return square.id === id ? { ...square, on: !square.on } : square;
            }));
        });
    }
    // box map func
    const squareElements = squares.map(square => (
        <Box
            key={square.id}
            toggle={() => toggle(square.id)}
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