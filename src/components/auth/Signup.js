import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { signup } from '../../actions/auth';
import propTypes from 'prop-types';

const Signup = ({ setAlert,}) => {        
    const [ formData, setFormData ] =  useState ({
            firstName:'',
            lastName:'',
            email:'',
            username: '',
            password:'',
            password2:'',
        });

    const {firstName, lastName, email, username, password, password2 } = formData

    const onChange = e => 
        setFormData({...FormData, [e.target.name]: e.target.value});

     const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            // setAlert('Passwords do not match', 'danger')
            console.log('Passwords do not match')
        } else {
                signup ({firstName, lastName, email, username, password})
                // console.log('SUCCESS')
                // console.log(FormData)
             }
      };

            // if (isAuthenticated) {
            //     return <Redirect to='/profile'/>
            // }
return (
    <Fragment>
        <div>
            <h1>Sign Up!!</h1>
            <p>Create Your Account Here!!</p>
            <form className="form"
                onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    First Name:
                    <input
                        type='text'
                        name='firstName'
                        value={firstName}
                        onChange={e => onChange(e)} 
                        required />
                </div>
                <br/>
                <div className='form-group'>
                    Last Name:
                    <input
                        type='text'
                        name='lastName'
                        value={lastName}
                        onChange={e => onChange(e)}
                        required />
                </div>
                <br/>
                <div className='form-group'>
                    Email:
                    <input
                        type='text'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required />
                </div>
                <br />
                <div className='form-group'>
                    Username:
                    <input
                        type='text'
                        name='username'
                        value={username}
                        onChange={e => onChange(e)}
                        required />
                </div>
                <br/>
                <div className='form-group'>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}
                        minLength="6" />
                </div>
                <br/>
                <div className='form-group'>
                    Please Confirm Password:
                    <input
                        type= 'password'
                        name='password2'
                        value={password2} 
                        onChange={e => onChange(e)} 
                        minLength="6" />
                </div>
            <br/>
            <input
                type="submit"
                className="btn btn-primary"
                value="Signup" 
                 />
            <br/>
            </form>
            <p>
                Already have an account?
                <Link to= "/login">Log In</Link>
            </p>
            </div>
    </Fragment>
    );
};

Signup.propTypes = {
    setAlert: propTypes.func.isRequired,
    // signup: PropTypes.func.isRequired,
    // isAuthenticated: PropTypes.bool
  };
  

//   const mapStateToProps = state => ({
//     isAuthenticated: state.auth.isAuthenticated
//   });

export default connect(
    null,
    { setAlert }
  )(Signup);
