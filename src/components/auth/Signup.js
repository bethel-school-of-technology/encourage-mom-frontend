import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { signup } from '../../actions/auth';
import PropTypes from 'prop-types';



const Signup = ({ setAlert, signup, isAuthenticated, isAdmin}) => {        
    const [ formData, setFormData ] =  useState ({
            firstName:'',
            lastName:'',
            email:'',
            username: '',
            password:'',
            confirmPassword:''
        });
        
    const {firstName, lastName, email, username, password, confirmPassword } = formData;

    const onChange = e => 
        setFormData({...formData, [e.target.name]: e.target.value});

     const onSubmit = async e => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setAlert('Passwords do not match', 'danger')
            console.log('Passwords do not match')
        } else {
            console.log(formData)
            signup({firstName, lastName, email, username, password})
        }
      };
        if (isAuthenticated) {
                console.log("Authenticated")
                return <Redirect to='/profile'/>
    }
    //     if (isAdmin) {
    //     console.log('Admin Access')
    //     return <Redirect to ='/authLanding'/>
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
                        type='email'
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
                        name='confirmPassword'
                        value={confirmPassword} 
                        onChange={e => onChange(e)} 
                        minLength="6" />
                </div>
            <br/>
            <input
                type="submit"
                className="btn btn-primary"
                value='Signup'/>
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
    setAlert: PropTypes.func.isRequired,
    signup: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    isAdmin: PropTypes.bool
  }
  

  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    isAdmin: state.auth.isAdmin
  });

export default connect(
    mapStateToProps,
    { setAlert, signup }
  )(Signup);
