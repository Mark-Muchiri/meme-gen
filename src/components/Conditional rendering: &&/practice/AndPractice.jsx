import './AndPractice.css';
import { useState } from 'react';

export default function AndPractice() {
    const [messages] = useState(['hello', 'email job note', 'jira']);
    /**
     * Challenge:
     * - Only display the <h1> below if there are unread messages
     */
    return (
        <div>
            {
                messages.length > 0 &&
                <h1>You have {messages.length} unread messages!</h1>
            }
        </div>
    );
}