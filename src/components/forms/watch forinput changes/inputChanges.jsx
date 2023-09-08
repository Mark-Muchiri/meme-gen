import { useState } from 'react';
import './inputChanges.css';

export default function InputChanges() {
    const [formData, setFormData] = useState(
        { firstName: "", lastName: "", email: "", comments:"" }
    );
    function handleChange(event) {
        /**
         * Challenge: Add a textarea for "comments" to the form
         * Make sure to update state when it changes.
         */
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            };
        });
    }
    return (
        <section>
            <form>
                {/* note: For every input in React you have to add the name and value tag for it to work well. This is a standard */}
                <div className="allnames">
                    <input
                        name='firstName'
                        type="text"
                        placeholder="First Name"
                        onChange={handleChange}
                        value={formData.firstName}
                    />
                    <input
                        name='lastName'
                        type="text"
                        placeholder="Last Name"
                        onChange={handleChange}
                        value={formData.lastName}
                    />
                </div>
                <div className="center">
                    <input
                        className='center'
                        name='email'
                        type="text"
                        placeholder='Email'
                        onChange={handleChange}
                        value={formData.email}
                    />
                </div>
                <div className="center">
                    <textarea
                        placeholder='Add your comments here'
                        name='comments'
                        value={formData.comments}
                        type='text'
                        onChange={handleChange}
                    />
                </div>
            </form>
            <div className="center">
                <p>Hello {formData.firstName} {formData.lastName} 😃</p>
                <h3 className='prompt'>Your ✉️ is:</h3>
                <p>{formData.email}</p>
                <h3 className='prompt'>Comments:</h3>
                <p>{formData.comments}</p>
            </div>
        </section>
    );
}