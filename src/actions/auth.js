import {
    SIGNUP_SUCCESS,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGOUT
} from './types';

import axios from 'axios'
import setAuthToken from '../utils/setAuthToken';
import { bindActionCreators } from 'redux';

const baseUrl = process.env.REACT_APP_BASE_URL;

//Load User 
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token)
    } 
    try {
        console.log("Testing More!")
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
        console.log("test_1");
        
        axios.post(`${baseUrl}/auth`, body, config)
            .then(function(res){
                console.log(res.data.user)
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data.token
                })
                dispatch({
                    type: USER_LOADED,
                    payload: res.data.user
                });
            });

        // const res = await axios.post(`${baseUrl}/auth`, body, config);
        // console.log(res);
        // console.log("test_2");

        // if (res.isAdmin === "true") {
        //     console.log("You are an admin!")
        //       // return res.status(200).json()
        //   } else {
        //     console.log("You are not an admin")
        //   }
        // dispatch({
        //     type: LOGIN_SUCCESS,
        //     payload: res.data
        // });

    
        // dispatch(loadUser());
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

















