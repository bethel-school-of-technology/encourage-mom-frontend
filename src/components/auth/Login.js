import React, {useState, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import propTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData ] = useState({
        username: '',
        password: ''
    });

const { username, password } = formData;

const onChange = e => 
    setFormData({...formData, [e.target.name]: e.target.value});

const onSubmit = async e => {
    e.preventDefault();
    login(username, password);
};

if (isAuthenticated) {
    return <Redirect to='/profile' />
}

return (
    <Fragment>
        <div>
            <h1>Log In!!</h1>
            <p>Login to Your Account Here!!</p>
            <form className="form" 
                onSubmit={e => onSubmit(e)}
                 >
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
            <input
                type="submit"
                className="btn btn-primary"
                onSubmit
                value="Login" />
            <br/>
            </form>
            <p>
                Don't have an account?
                <Link to= "/Signup">Log In</Link>
            </p>
    </div>
    </Fragment>
);
};



export default connect({login})(Login);

















