import React, { useState } from 'react';
import './Form.css';


function Form({ callback }) {
    const [field, setField] = useState({ message: '', sender: '' });

    const isEmpty = txt => !txt || !txt.trim()

    const handleMessage = (event) => {
        setField({ ...field, message: event.target.value });
    }

    const handleSender = (event) => {
        setField({ ...field, sender: event.target.value });
    }

    const savePost = async () => {
        if (isEmpty(field.message) || isEmpty(field.sender)) {
            return;
        }

        const postData = {
            action: 'savepost',
            message: field.message,
            sender: field.sender,
        }
        const response = await fetch('./api/post.php', {
            method: 'post',
            body: JSON.stringify(postData)
        });

        const data = await response.json()
        if (data.status) {
            setField({ message: '', sender: '' })
            callback({
                message: field.message,
                sender: field.sender,
            })
        }
    }

    return (
        <div className="form">
            <form className="form-inline">
                <label htmlFor="text">Message:</label>
                <textarea type="text" rows="5" maxLength="5000" value={field.message} onChange={handleMessage} placeholder="Enter your message" /> <br />
                <label htmlFor="pwd">Name:</label>
                <input type="text" maxLength="30" value={field.sender} onChange={handleSender} placeholder="Enter name" /><br />
                <button type="button" onClick={savePost}>Post</button>
            </form>
        </div>
    );
}

export default Form;