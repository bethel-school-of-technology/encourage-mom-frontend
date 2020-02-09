import React, {useState, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData ] = useState({
        username: '',
        password: '',
        });

const { username, password } = formData;

const onChange = e => 
    setFormData({...formData, [e.target.name]: e.target.value});

const onSubmit = async e => {
    e.preventDefault();
    console.log(formData);

    login(username, password);
};

if (isAuthenticated) {
    console.log(formData)
    console.log("Authenticated")
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
                        />
                </div>
            <br/>
            <input
                type="submit"
                className="btn btn-primary"
                value="Login" />
            <br/>
            </form>
            <p>
                Don't have an account?
                <Link to= "/signup">Sign Up</Link>
            </p>
    </div>
    </Fragment>
);
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool,
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});


export default connect(
mapStateToProps,
        { login}
        )(Login);

















