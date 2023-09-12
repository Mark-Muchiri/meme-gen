import './useEffectDep.css';
import { useEffect, useState } from 'react';

export default function useEffectDep() {
    const [starWarsData, setStarWarsData] = useState({});
    const [count, setCount] = useState(0);

    /**
 * Challenge: Combine `count` with the request URL
 * so pressing the "Get Next Character" button will
 * get a new character from the Star Wars API.
 * Remember: don't forget to consider the dependencies
 * array!
 */

    useEffect(function () {
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => setStarWarsData(data));
    }, []);

    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    );
}
