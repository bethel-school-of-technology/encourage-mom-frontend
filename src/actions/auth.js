import axios from 'axios';
import {setAlert} from './alert';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';

//register user

export const register = ({name, email, password}) => async dispatch => {
    const config ={
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({name, email, password});

    try{
        const res = await axios.post('/api/users', body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
    } catch (err){
        const errors = err.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'Wrong!')));
        }


        dispatch({
            type: REGISTER_FAIL
        });


    }
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