import { useState } from 'react';
import './inputChanges.css'


export default function InputChanges() {
    const [firstName, setFirstName] = useState("")
    
    function handleChange(event) {
        /**
         * Challenge: update the firstName state on every keystroke
         */
        setFirstName(event.target.value)
    }
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
            />
            <p>{firstName}</p>
        </form>
    )
}