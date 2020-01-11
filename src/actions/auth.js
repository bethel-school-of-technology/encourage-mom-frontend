import axios from 'axios';
import {setAlert} from './alert';
import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from './types';

//register user

export const signup = ({firstName, lastName, email, username, password}) => async dispatch => {
    const config ={
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({firstName, lastName, email, username, password});

    try{
        const res = await axios.post('/api/users', body, config);

        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        });
    } catch (err){
        const errors = err.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'Wrong!')));
        }


        dispatch({
            type: SIGNUP_FAIL
        });

    }
}

// login user

export const login = ({username, password}) => async dispatch => {
    const
}



















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