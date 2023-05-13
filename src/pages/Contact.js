import React from 'react';
import LeftSide from "../assets/leftside.jpg";
import "../styles/Contact.css";

const Contact = () => {
    return (
        <div className='contact'>
            <div
                className='leftSide'
                style={{ backgroundImage: `url(${LeftSide})` }}
            >
            </div>
            <div className='rightSide'>
                <h1>CONTACT US</h1>
                <form id='contact-form' method='POST'>
                    <label htmlFor='name'>Full Name</label>
                    <input name='name' placeholder='Enter full Name...' type="text" />

                    <label htmlFor='name'>Email</label>
                    <input name='email' placeholder='Enter email..' type="email" />
                    <label htmlFor='message'>Message</label>
                    <textarea
                        rows="6"
                        placeholder='Enter message...'
                        name='message'
                        required
                    >
                    </textarea>
                    <button type='submit'>SEND MESSAGE</button>

                </form>
            </div>
        </div>
    )
}

export default Contact
