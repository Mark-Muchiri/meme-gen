import './useEffectDep.css';
import { useEffect, useState } from 'react';

export default function useEffectDep() {
    const [starWarsData, setStarWarsData] = useState({});
    const [count, setCount] = useState(1);

    /**
 * Challenge: Combine `count` with the request URL
 * so pressing the "Get Next Character" button will
 * get a new character from the Star Wars API.
 * Remember: don't forget to consider the dependencies
 * array!
 */

    function countAdd() {
        setCount(prevCount => prevCount + 1);
    }

    useEffect(function () {
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data));
    }, [count]);

    return (
        <div>
            <div className="parentpos">
                <h2>The count is {count}</h2>
                <button onClick={countAdd}>Get Next Character</button>
            </div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    );
}
