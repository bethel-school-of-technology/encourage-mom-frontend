import React, { useState } from 'react';
import { createMessage } from '../../actions/contact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../img/logo.jpg';

const Contact = ({ createMessage }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');

  return (
    <div className='contact-page'>
      <h1>
        Did you have any problems, comments, or want to share your thoughts or
        ideas for Crowned Jewels?
      </h1>
      <h1>Please send us a message! We love hearing feedback!</h1>
      <h2>
        And if you have any questions, concerns, or problems, we will respond to
        your message as soon as we are able!
      </h2>
      <form
        className='form'
        onSubmit={e => {
          {
            e.preventDefault();
          }
          createMessage({ firstName, lastName, email, comments });
          setFirstName('');
          setLastName('');
          setEmail('');
          setComments('');
        }}
      >
        <div className='contact-form'>
          First Name:
          <input
            type='text'
            name='firstName'
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </div>
        <br />
        <div className='contact-form'>
          Last Name:
          <input
            type='text'
            name='lastName'
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </div>
        <br />
        <div className='contact-form'>
          Email:
          <input
            type='text'
            name='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <br />
        Comments/Thoughts:
        <div className='contact-form'>
          <textarea
            type='text'
            name='comments/thoughts'
            value={comments}
            onChange={e => setComments(e.target.value)}
          ></textarea>
        </div>
        <br />
        <div className='contact-form'>
          <input type='submit' className='btn btn-primary' />
        </div>
      </form>
      <div>
        <h2>
          <img
            alt='logo'
            src={logo}
            width='70px'
            height='70px'
            padding='50px'
          />
        </h2>
      </div>
    </div>
  );
};

Contact.propTypes = {
  createMessage: PropTypes.func.isRequired
};

export default connect(null, { createMessage })(Contact);
