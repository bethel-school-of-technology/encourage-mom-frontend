import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { signup } from '../../actions/auth';
import PropTypes from 'prop-types';



const Signup = ({ setAlert, signup, isAuthenticated}) => {        
    const [ formData, setFormData ] =  useState ({
            firstName:'',
            lastName:'',
            email:'',
            username: '',
            password:'',
            confirmPassword:'',
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
            signup(firstName, lastName, email, username, password)
        }
      };
            if (isAuthenticated) {
                return <Redirect to='/login'/>
            }
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
    isAuthenticated: PropTypes.bool
  }
  

  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });

export default connect(
    mapStateToProps,
    { setAlert, signup }
  )(Signup);


// import React, { Fragment, Component } from 'react';
// import { Link} from 'react-router-dom'
// // import { render } from '@testing-library/react';


// class Signup extends Component {
//     state = {
//             firstName:'',
//             lastName:'',
//             email:'',
//             username: '',
//             password:'',
//             confirmPassword:'',
//     }
//     componentDidMount() {
//         this.callApi()
//           .then(res => this.setState({ response: res.express }))
//           .catch(err => console.log(err));
//       }
      
//       callApi = async () => {
//         const response = await fetch('http://localhost:5000/api/auth');
//         const body = await response.json();
//         if (response.status !== 200) throw Error(body.message);
        
//         return body;
//       };
      
//       handleSubmit = async e => {
//         e.preventDefault();
//         const response = await fetch('http://localhost:5000/api/users', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ post: this.state.post }),
//         });
//         const body = await response.text();
        
//         this.setState({ responseToPost: body });
//       };

// render() {
// return (
//     <Fragment>
//         <div>
//             <h1>Sign Up!!</h1>
//             <p>Create Your Account Here!!</p>
//             <form className="form"
//                 onSubmit={this.handleSubmit}>
//                 <div className='form-group'>
//                     First Name:
//                     <input
//                         type='text'
//                         name='firstName'
//                         // value={this.state.firstName}
//                         // onChange={e => onChange(e)} 
//                         required />
//                 </div>
//                 <br/>
//                 <div className='form-group'>
//                     Last Name:
//                     <input
//                         type='text'
//                         name='lastName'
//                         // value={this.state.lastName}
//                         // onChange={e => onChange(e)}
//                         required />
//                 </div>
//                 <br/>
//                 <div className='form-group'>
//                     Email:
//                     <input
//                         type='email'
//                         name='email'
//                         // value={this.state.email}
//                         // onChange={e => onChange(e)}
//                         required />
//                 </div>
//                 <br />
//                 <div className='form-group'>
//                     Username:
//                     <input
//                         type='text'
//                         name='username'
//                         // value={this.state.username}
//                         // onChange={e => onChange(e)}
//                         required />
//                 </div>
//                 <br/>
//                 <div className='form-group'>
//                     Password:
//                     <input
//                         type="password"
//                         name="password"
//                         // value={this.state.password}
//                         // onChange={e => onChange(e)}
//                         minLength="6" />
//                 </div>
//                 <br/>
//                 <div className='form-group'>
//                     Please Confirm Password:
//                     <input
//                         type= 'password'
//                         name='confirmPassword'
//                         // value={this.state.confirmPassword} 
//                         // onChange={e => onChange(e)} 
//                         minLength="6" />
//                 </div>
//             <br/>
//             <input
//                 type="submit"
//                 className="btn btn-primary"
//                 // value={this.state.post}
//                 // onChange={e => this.setState({ post: e.target.value })}
//                 />
//             </form>
//             <p>
//                 Already have an account?
//                 <Link to= "/login">Log In</Link>
//             </p>
//             </div>
//     </Fragment>
//     );
// };
// }

// export default Signup