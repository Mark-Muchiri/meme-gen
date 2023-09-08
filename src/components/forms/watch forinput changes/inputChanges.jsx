import { useState } from 'react';
import './inputChanges.css';

export default function InputChanges() {
    const [formData, setFormData] = useState(
        {
            firstName: '',
            lastName: '',
            email: '',
            comments: '',
            isDone: true,
        }
    );
    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        console.log(formData.isDone);
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value
            };
        });
    }
    return (
        <section>
            <form>
                {/* note: For every input in React you have to add the name and value tag for it to work well. This is a standard */}
                <div className="allnames">
                    <input
                        className='inputtext'
                        name='firstName'
                        type="text"
                        placeholder="First Name"
                        onChange={handleChange}
                        value={formData.firstName}
                    />
                    <input
                        className='inputtext'
                        name='lastName'
                        type="text"
                        placeholder="Last Name"
                        onChange={handleChange}
                        value={formData.lastName}
                    />
                </div>
                <div className="center">
                    <input
                        className='inputtext'
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
                {/* Checkboxes use the value `checked` instead of `value` */}
                <div className="inputcheck">
                    <input
                        className='checkbox-input'
                        type='checkbox'
                        name='isDone'
                        id='isDone'
                        checked={formData.isDone}
                        onChange={handleChange}
                    />
                    <label className='checkbox-label' htmlFor='isDone'>
                        Are you done filling the form
                    </label>
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