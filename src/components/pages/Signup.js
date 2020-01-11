import React, { useState, Component } from 'react';
// import axios from  'axios';
import { Router } from 'react-router-dom'

class Signup extends Component {

    render() {
    // const [formData, setFormData] = useState({
    //     name:'',
    //     email:'',
    //     username: '',
    //     password: '',
    //     password2: '',
    // });

    // const { name, email, username, password, password2 } = formData;

    // const onChange = e => 
    // setFormData({ ...formData, [e.target.name]: e.target.value});

    // const onSubmit = async e => {
    //     e.preventDefault();
    //     if(password !== password2){
    //         console.log('Passwords do not match')
    //     } else {
    //         console.log('SUCCESS');
    //     }
        // newUser = {
        //     name,
        //     email,
        //     username,
        //     password
        // }

        // try {
        //     const config = {
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     }
        //     const body = JSON.stringify(newUser);

        //     const res = await axios.post('/routes/api/users', body, config);
        //     console.log(res.data);
        // } catch (err) {
        //     console.error(err.response.data);

        // }
    return (
        <div>
            <h1>Sign Up!!</h1>
            <p>Create Your Account Here!!</p>
            <form className="form" 
                // onSubmit={e => onSubmit(e)} 
                >
                <div className='form-group'>
                    First Name:
                    <input
                        type='text'
                        name='firstName'
                    //    value={firstName}
                    //     onChange={e => onChange(e)} 
                        required />
                </div>
                <br/>
                <div className='form-group'>
                    Last Name:
                    <input
                        type='text'
                        name='lastName'
                        // value={lastName}
                        // onChange={e => onChange(e)}
                        required />
                </div>
                <br/>
                <div className='form-group'>
                    Email:
                    <input
                        type='text'
                        name='email'
                        // value={email}
                        // onChange={e => onChange(2)}
                        required />
                </div>
                <br />
                <div className='form-group'>
                    Username:
                    <input
                        type='text'
                        name='username'
                        // value={username}
                        // onChange={e => onChange(e)}
                        required />
                </div>
                <br/>
                <div className='form-group'>
                    Password:
                    <input
                        type="password"
                        name="password"
                        // value={password}
                        // onChange={e => onChange(e)}
                        minLength="6" />
                </div>
                <br/>
                <div className='form-group'>
                    Please Confirm Password:
                    <input
                        type= 'password'
                        name='password2'
                        // value={password2} 
                        // onChange={e => onChange(e)} 
                        minlength="6" />
                </div>
            <br/>
            <input
                type="submit"
                className="btn btn-primary"
                value="Sign-up" />
            <br/>
            </form>
            {/* <p>
                Already have an account?
                <Router exact path= "/login">Log In</Router>
            </p> */}
            </div>
)}
}

export default Signup