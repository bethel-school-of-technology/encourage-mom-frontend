import axios from 'axios';
import { setAlert } from './alert' 
import {
    GET_POSTS,
    GET_POST,
    CREATE_POST,
    UPDATE_POST,
    DELETE_POST,
    POST_ERROR,

} from "./types"



const baseUrl = process.env.REACT_APP_BASE;

export const getPosts = () => async dispatch => {
    try {
        const res = await axios.get(`${baseUrl}/posts`);
        dispatch({
            type: GET_POSTS,
            payload: res.data
        });
    } catch(err) {
        dispatch({
            type: POST_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status }
        })
    }
}

export const getPost = _id => async dispatch => {
    const res = await axios.get(`${baseUrl}/post/${_id}`)
    dispatch({
        type: GET_POST,
        payload: res.data
    });
};

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
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: POST_ERROR
        });
    }
};
export const updataPost = (post, _id) => async dispatch => {
    const res = await axios.put(`${baseUrl}/post/${_id}`, post);
    dispatch({
        type: UPDATE_POST,
        payload: res.data
    });
};

export const deletePost = id => async dispatch => {
    if(alert("Warning! This can not be undone! Are you sure you want to delete this post")) {
        try {
            const res = await axios.delete(`${baseUrl}/api/profile`);
            dispatch({type: DELETE_POST,
            payload: res.id
            //payload: id
        })
            dispatch(setAlert('Post Deleted', 'success'));
        } catch (err) {
            dispatch({
                type: POST_ERROR,
                payload: {msg: err.response.statusText, status: err.resposne.status}
            })
        }
    }
};