import { useState } from 'react';
import './inputChanges.css';

export default function InputChanges() {
    const [formData, setFormData] = useState(
        { firstName: "", lastName: "" }
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
            </form>
            <div className="center">
                <p>Hello {formData.firstName} {formData.lastName} 😃</p>
            </div>
        </section>
    );
}