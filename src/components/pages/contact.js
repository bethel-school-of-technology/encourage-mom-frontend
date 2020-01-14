import React, { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <div className="contact-page">
            <h1>Did you have any problems, comments, or want to share your thoughts or ideas for Crowned Jewels?</h1>
            <h1>Please send us a message!</h1>
            <form className="form">
                <div className="contact-form">
                    First Name: 
                    <input
                        type= 'text'
                        name='firstName' />
                </div>
                <br />
                <div className="contact-form">
                Last Name:
                <input
                    type='text'
                    name='lastName'/>
                </div>
                <br />
                <div className="contact-form">
                    Email:
                    <input
                        type='text'
                        name= 'email' />
                </div>
                <br />
                Comments/Thoughts:
                <div className="contact-form">
                    <textarea
                        type= 'text'
                        name= 'comments/thoughts'>
                    </textarea>
                </div>
                <br />
                <div className="contact-form">
                    <input
                    type="submit"
                    className="btn btn-primary"
                    />
                </div>
            </form>
            </div>
        );
    }
}

export default Contact;