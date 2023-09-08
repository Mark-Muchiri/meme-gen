import { useState } from 'react';
import './inputChanges.css';

export default function InputChanges() {
    const [formData, setFormData] = useState(
        { firstName: "", lastName: "", email: "" }
    );
    function handleChange(event) {
        /**
        * Challenge: Track the applicant's last name as well
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
                <div className="allnames">
                    <input
                        name='firstName'
                        type="text"
                        placeholder="First Name"
                        onChange={handleChange}
                    />
                    <input
                        name='lastName'
                        type="text"
                        placeholder="Last Name"
                        onChange={handleChange}
                    />
                </div>
                <div className="center">
                    <input
                        name='email'
                        type="text"
                        placeholder='Email'
                        onChange={handleChange}
                        className='center'
                    />
                </div>
            </form>
            <div className="center">
                <p>Hello {formData.firstName} {formData.lastName} 😃</p>
                <p className='emailprompt'>Your ✉️ is:</p>
                <p>{formData.email}</p>
            </div>
        </section>
    );
}