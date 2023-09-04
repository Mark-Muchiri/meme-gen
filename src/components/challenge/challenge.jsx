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
     * Challenge part 2:
     * 1. Create a separate component called "Box" and
     *    replace the `div` above with our <Box /> components
     * 2. Pass the Box component a prop called `on` with the
     *    value of the same name from the `boxes` objects
     * 3. In the Box component, apply dynamic styles to determine
     *    the backgroundColor of the box. If it's `on`, set the
     *    backgroundColor to "#222222". If off, set it to "none"
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