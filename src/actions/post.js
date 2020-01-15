// import axios from 'axios';
// import { setAlert } from './alert' 
import {
    // GET_POST,
    CREATE_POST,
    // UPDATE_POST,
    // DELETE_POST,

} from "./types"

import axios from '../utils/API';



const baseUrl = process.env.REACT_APP_BASE;

export const createPost = ({username, title, PostText}) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({username, title, PostText});

    try {
        const res = axios.post(`${baseUrl}/api/posts`, body, config);
        
        dispatch({
            type: CREATE_POST,
            payload: res.data
        });
    } catch(err) {
        const errors = err.response.data.errors;
    }
}

