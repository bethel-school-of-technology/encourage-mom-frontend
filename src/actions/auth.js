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
import { Redirect } from 'react-router-dom';

const baseUrl = process.env.REACT_APP_BASE_URL;

//Load User 
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token)
    } 
    try {
        const res = await axios.get(`${baseUrl}/users`);
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
    const body = ({firstName, lastName, email, username, password });

    console.log(body);

    try{
        const res = await axios.post(
            `${baseUrl}/users/signup`
            , body, config);
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());
    } catch (err){
        console.log(err)
    }
};

//login user
export const login = (username, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body  = ({username, password});

    console.log(body)
    try {
        console.log("test_1")
        // erroring out with the post
        
        const res = await axios.post(
            `${baseUrl}/auth`, body, config);
        console.log("test_2")
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser());
    } catch  (err){
        console.log(err)
        console.log("Invalid Credentials");
        alert("Invalid Credentials");
    };
}
// Logout / Clear Profile

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT});

}

















