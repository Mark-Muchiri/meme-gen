import { useState } from 'react';
import './inputChanges.css'


export default function InputChanges() {
    const [firstName, setFirstName] = useState("")
    
    console.log(firstName)
    
    function handleChange(event) {
        console.log(event.target.value)
        /**
         * Challenge: update the firstName state on every keystroke
         */
    }
    
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
            />
        </form>
    )
}