// import React, { Fragment } from 'react'
// import {Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

// export default function Login(props) {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

//     function validateForm() {
//         return email.length > 0 && password.length > 0;    }
// }

//     function onSumbit(event) {
//         event.preventDefault();
//     }



// // const login = () => {
//     return (
//         <Fragment>
//             <h1>Login</h1>
//             <h4>Login Here</h4>
//             <form class="form">
//                 <div class="form-group">
//                     Username:
//                     <input
//                         type='text'
//                         value='username'
//                         onChange={e => setUsername(e.targert.value)}
//                         required />
//                 </div>
//                 <br/>
//                 <div className="form">
//                     Password:
//                     <input
//                         type="password"
//                         value="password"
//                         onChange={e => setPassword(e.target.value)}
//                         required
//                         />
//                 </div>
//                 <button disabled={!validateForm()} type="submit">Login</button>
//                 </form>
//                 <br/>
//                 <p>
//                 Don't have an account?
//                  <button
//                      className="btn btn-primary"
//                      id="signup-link"
//                      href="/signup">
//                      Signup
//                   </button>
//                 </p>
//         </Fragment>
// );


// export default Login

import React, { Component } from 'react';
import PropTypes from 'prop-types';
