// import axios from 'axios';
// import {setAlert} from './alert';

// import {
//     SIGNUP_SUCCESS,
//     SIGNUP_FAIL,
//     USER_LOADED,
//     AUTH_ERROR,
//     LOGIN_SUCCESS,
//     LOGIN_FAIL
// } from './types'

// import setAuthToken from '../utils/setAuthToken'

// //Load User

// export const loadUser = () => async dispatch => {
//     if (localStorage.token) {
//         setAuthToken(localStorage.token);
//     }

//     try {
//         const res = await.axios.get('/api/auth');
//     }
// }






















// import axios from 'axios';
// import { setAlert }

// // const baseUrl = process.env.REACT_APP_BASE_URL;

// import { useState, useEffect } from 'react';

// export const useAuth = auth => {
//   const [authenticated, setAuthenticated] = useState(null);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     auth.isAuthenticated().then(isAuthenticated => {
//       if (isAuthenticated !== authenticated) {
//         setAuthenticated(isAuthenticated);
//       }
//     });
//   });

//   useEffect(() => {
//     if (authenticated) {
//       auth.getUser().then(setUser);
//     } else {
//       setUser(null);
//     }
//   }, [authenticated]);

//   return [authenticated, user];
// };