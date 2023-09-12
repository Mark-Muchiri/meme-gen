import './useEffectDep.css';
import { useEffect, useState } from 'react';

export default function useEffectDep() {
    // const [starWarsData, setStarWarsData] = useState({})
    const [count, setCount] = useState(0);

    console.log("Component rendered");
    /**
     * Challenge: re-write the useEffect
     * It should run any time `count` changes
     * For now, just console.log("Effect function ran")
     */
    useEffect(function () {
        console.log(`Effect function run`);
    }, [count]);

    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
        </div>
    );
}
