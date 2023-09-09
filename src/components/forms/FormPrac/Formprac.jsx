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
    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */
    const [formData, setFormData] = useState({
        email: '',
        password1: '',
        password2: '',
        newsletter: false,
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

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
