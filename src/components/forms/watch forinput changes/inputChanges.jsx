import { useState } from 'react';
import './inputChanges.css';

export default function InputChanges() {
    const [formData, setFormData] = useState(
        { firstName: "", lastName: "", email: "" }
    );
    console.log("🚀 ~ file: inputChanges.jsx:8 ~ InputChanges ~ formData:", formData)
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
            </form>
            <div className="center">
                <p>Hello {formData.firstName} {formData.lastName} 😃</p>
                <p className='emailprompt'>Your ✉️ is:</p>
                <p>{formData.email}</p>
            </div>
        </section>
    );
}