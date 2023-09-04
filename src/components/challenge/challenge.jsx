import './challenge.css';
import boxes from './boxes';
import { useState } from 'react';
import Box from './box';

export default function Challenge() {
    const [data] = useState(boxes);
    // box map func
    const boxItems = data.map(items => (
        <Box key={items.id} on={items.on} />
    ));

    /**
     * Challenge: Create a toggle() function that logs
     * "clicked!" to the console
     * 
     * Pass that function down to each of the Box components
     * and set it up so when they get clicked it runs the function
     */

    return (
        <main>
            <h1>Boxes will go here</h1>
            <div className="pos">
                <div className='boxes'>
                    {boxItems}
                </div>
            </div>
        </main>
    );
}