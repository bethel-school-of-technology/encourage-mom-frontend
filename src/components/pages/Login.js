import React, { Component } from 'react';

// import { Router} from 'react-router-dom';

class Login extends Component {

    render() {

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



















