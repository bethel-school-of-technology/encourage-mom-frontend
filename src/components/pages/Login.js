import React, { Fragment, useState, Component } from 'react';
// import axios from  'axios';
import { Router} from 'react-router-dom';
// import { login } from '../../actions/auth';

class Login extends Component {

    render() {
    // const [formData, setFormData] = useState({
    //     username: '',
    //     password: '',
    // });

    // const {username, password } = formData;

    // const onChange = e => 
    // setFormData({ ...formData, [e.target.name]: e.target.value});

    // const onSubmit = async e => {
    //     e.preventDefault();
    //     console.log('SUCCESS');
        // }
    return (
        <div>
            <h1>Log In!!</h1>
            <p>Login to Your Account Here!!</p>
            <form className="form" 
                // onSubmit={e => onSubmit(e)}
                 >
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
            <input
                type="submit"
                className="btn btn-primary"
                value="Login" />
            <br/>
            </form>
            {/* <p>
                Don't have an account?
                <Router exact path= "/Sigm">Log In</Router>
            </p> */}
    </div>
) }
}
export default Login;



















