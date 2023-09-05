import { useState } from 'react';
import './challenge.css';
import boxes from './boxes';
import Box from './box';

export default function Challenge() {
    const [squares, setSquares] = useState(boxes);

    function toggle(id) {
        /**
         * this toggle maps through prevSquare anf gives us the new array, on the condition given by the tenary operator
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