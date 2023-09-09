import './Formprac.css';
import { useState } from 'react';

export default function Formprac() {
    const passwordred = {
        marginTop: '-1rem',
        color: 'red',
        fontWeight: '600'
    };
    const passwordgreen = {
        marginTop: '-1rem',
        color: 'green',
        fontWeight: '600'
    };
    const newsletter = {
        marginTop: '-1rem',
        color: 'green',
        fontWeight: '600',
        textAlign: 'center'
    };
    // #################### All States ####################
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password1: '',
        password2: '',
        newsletter: false,
    });

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        // Mark the form as submitted for it to render the conditional elements
        setFormSubmitted(true);
        console.log(formData);
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    name='email'
                    value={formData.email}
                    type="email"
                    placeholder="Email address"
                    className="form--input"
                />
                <input
                    onChange={handleChange}
                    name='password1'
                    value={formData.password1}
                    type="password"
                    placeholder="Password"
                    className="form--input"
                />
                <input
                    onChange={handleChange}
                    name='password2'
                    value={formData.password2}
                    type="password"
                    placeholder="Confirm password"
                    className="form--input"
                />
                {/* && password alert render */}
                {
                    formSubmitted && (
                        formData.password1 === formData.password2 ?
                            <p style={passwordgreen}>Successfully signed up</p>
                            : <p style={passwordred}>Password does not match</p>
                    )
                }
                <div className="form--marketing">
                    <input
                        onChange={handleChange}
                        checked={formData.newsletter}
                        name='newsletter'
                        id="okayToEmail"
                        type="checkbox"
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                {/* newsletter render */}
                {
                    formSubmitted && (
                        formData.newsletter &&
                        <div>
                            <p style={newsletter}>Thanks for signing up </p>
                            <p style={newsletter}>for our newsletter!</p>
                        </div>
                    )
                }
                <button
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    );
}
