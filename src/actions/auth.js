import {setAlert} from './alert';
import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from './types';

import axios from 'axios'
import setAuthToken from '../utils/setAuthToken';

const baseUrl = process.env.REACT_APP_BASE_URL;

//Load User 
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token)
    } 
    try {
        const res = await axios.get(`${baseUrl}auth`);

        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
}; 
// register user
export const signup = ({firstName, lastName, email, username, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
};
    const body = JSON.stringify({firstName, lastName, email, username, password });

    try{
        const res = await axios.post(`${baseUrl}/users/signup`, body, config);

        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        });
    } catch (err){
        const errors = err.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: SIGNUP_FAIL
        });
    }
};


export const login = (username, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body  = JSON.stringify({username, password});

    try {
        const res = await axios.post(`${baseUrl}/auth`, body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser());
    } catch  (err){
        const errors = err.response.data.errors;
    
            if(errors){
                errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
            }
            dispatch({
                type: LOGIN_FAIL
            });
        }
    };
        

// Logout / Clear Profile

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT});
}

















