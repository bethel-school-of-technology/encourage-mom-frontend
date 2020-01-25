<<<<<<< HEAD
import{REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR} from '../actions/types';

const initialState ={
=======
import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    ACCOUNT_DELETED
} from '../actions/types'

const intitalState = {
>>>>>>> 1892b441979bedab9890a34a886dd94a7aefcbb2
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
<<<<<<< HEAD
};

export default function (state=initialState, action){
    const{type, payload}= action;

    switch (type) {
        case USER_LOADED:
            return{
=======
}

export default function (state = intitalState, action) {
    const { type, payload } = action;

    switch(type) {
        case USER_LOADED:
            return {
>>>>>>> 1892b441979bedab9890a34a886dd94a7aefcbb2
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            };
<<<<<<< HEAD
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return{
=======
        case SIGNUP_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
>>>>>>> 1892b441979bedab9890a34a886dd94a7aefcbb2
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
<<<<<<< HEAD
            };

        case REGISTER_FAIL:
        case AUTH_ERROR:
=======
            }
        case SIGNUP_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
        case ACCOUNT_DELETED:
>>>>>>> 1892b441979bedab9890a34a886dd94a7aefcbb2
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
<<<<<<< HEAD

            };

        default: 
            return state;

    }
=======
            }
        default:
            return state;
        }
>>>>>>> 1892b441979bedab9890a34a886dd94a7aefcbb2
}