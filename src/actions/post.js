import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_POST,
    CREATE_POST,
    UPDATE_POST,
    DELETE_POST,
    POST_ERROR,
    GET_ERRORS

} from "./types"

const baseUrl = process.env.REACT_APP_BASE_URL;

export const getPost = id => async dispatch => {
    const res = await axios.get(`${baseUrl}/posts/${id}`)
    dispatch({
        type: GET_POST,
        payload: res.data
    });
}

export const createPost = (formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
    const res = axios.post(`${baseUrl}/posts`, formData, config);
    console.log('test3')
        dispatch({
            type: CREATE_POST,
            payload: res.data
        });
        console.log("Post submit authorized")
        alert("Post Created Successfully! Refer to Posts Page to see posts. ")
        dispatch(setAlert('Posts Created', 'success'));
        // alert("Post Created Successfully! Refer to Posts to see all posts. ")
        // dispatch(setAlert('Post Created', 'success'));
    } catch(err) {
        dispatch({
            type: POST_ERROR,
            // payload: { msg: err.response.statusText, status: err.response.status}
        });

    }
};


export const updatePost = (post, _id) => async dispatch => {
  const res = await axios.put(`${baseUrl}/post/${_id}`, post);
  dispatch({
    type: UPDATE_POST,
    payload: res.data
  });
};

export const deletePost = id => dispatch => {
            axios.delete(`${baseUrl}/posts/${id}`)
            .then(res => 
                dispatch({
                    type: DELETE_POST,
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
