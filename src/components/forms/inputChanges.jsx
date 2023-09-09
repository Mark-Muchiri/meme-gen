import { useState } from 'react';
import './inputChanges.css';

export default function InputChanges() {
    const [formData, setFormData] = useState(
        {
            firstName: '',
            lastName: '',
            email: '',
            comments: '',
            isDone: false,
            employed: '',
            favColor: '',
        }
    );
    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value
            };
        });
    }
    function handleSubmit(event) {
        event.preventDefault()
        console.log("🚀 ~ file: inputChanges.jsx:27 ~ InputChanges ~ formData:", formData);
    }
    return (
        <section>
            <form onSubmit={handleSubmit}>
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

                {/* Fieldset */}
                <div className="center centerField">
                    <fieldset>
                        <legend className='checkbox-label' style={{ fontWeight: "700", fontSize: "23px" }} >Current employment status</legend>
                        <div className="inputcheck">
                            <input
                                className='checkbox-input'
                                type="radio"
                                id="unemployed"
                                name='employed'
                                checked={formData.employed === 'unemployed'}
                                onChange={handleChange}
                                value='unemployed'
                            />
                            <label className='checkbox-label' htmlFor="unemployed">Unemployed</label>
                            <br />
                            <br />
                        </div>
                        <div className="inputcheck">
                            <input
                                className='checkbox-input'
                                type="radio"
                                id="part-time"
                                name='employed'
                                checked={formData.employed === 'Part-time'}
                                onChange={handleChange}
                                value='Part-time'
                            />
                            <label className='checkbox-label' htmlFor="part-time">Part-time</label>
                            <br />
                            <br />
                        </div>
                        <div className="inputcheck">
                            <input
                                className='checkbox-input'
                                type="radio"
                                id="full-time"
                                name='employed'
                                checked={formData.employed === 'full-time'}
                                onChange={handleChange}
                                value='full-time'
                            />
                            <label className='checkbox-label' htmlFor="full-time">Full-time</label>
                            <br />
                        </div>
                    </fieldset>
                </div>
                <br />
                {/* selector */}
                <div className="center">
                    <label className='checkbox-label' style={{ fontWeight: "400", fontSize: "30px" }} htmlFor="favColor">What is your favorite color?</label>
                    <br />
                    <select
                        id="favColor"
                        value={formData.favColor}
                        onChange={handleChange}
                        name="favColor"
                    >
                        <option value="" className='center' style={{fontWeight: "400", fontSize: "20px"}} > Choose </option>
                        <option value="orange" className='center' style={{fontWeight: "400", fontSize: "20px"}} >Orange</option>
                        <option value="yellow" className='center' style={{fontWeight: "400", fontSize: "20px"}} >Yellow</option>
                        <option value="green" className='center' style={{fontWeight: "400", fontSize: "20px"}} >Green</option>
                        <option value="blue" className='center' style={{fontWeight: "400", fontSize: "20px"}} >Blue</option>
                        <option value="indigo" className='center' style={{fontWeight: "400", fontSize: "20px"}} >Indigo</option>
                        <option value="violet" className='center' style={{fontWeight: "400", fontSize: "20px"}} >Violet</option>
                    </select>
                </div>
                <br />
                <div className="center">
                <button style={{fontWeight: "600", fontSize: "25px"}}>Submit</button>
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