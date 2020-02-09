import {
    SIGNUP_SUCCESS,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    DELETE_USER,
    GET_ERRORS,
    LOGOUT
} from './types';

import axios from 'axios';
import { setAlert } from './alert';
import setAuthToken from '../utils/setAuthToken';

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
    }
};

//login user
export const login = (username, password, isAdmin) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body  = ({username, password});

    try {
        axios.post(`${baseUrl}/auth`, body, config)
            .then(function(res){
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data.token
                })
                dispatch({
                    type: USER_LOADED,
                    payload: res.data.user
                });
            })
    } catch  (err){
        dispatch(setAlert("Invalid Credentials"));
        dispatch({
            type: LOGIN_FAIL
        })
            alert('Username or Password is wrong')
    }
};

  export const deleteUser = id => dispatch => {
              axios.delete(`${baseUrl}/users/${id}`)
              .then(res => 
                  dispatch({
                      type: DELETE_USER,
                  payload: id
              })
          )
          .catch (err => 
              dispatch({
                  type: GET_ERRORS,
                  payload: err.response.data
              })
          )
      };
  


// Logout / Clear Profile
export const logout = () => dispatch => {
    dispatch({ type: LOGOUT});

}

















