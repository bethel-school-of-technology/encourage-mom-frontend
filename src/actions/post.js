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

<<<<<<< HEAD
export const createPost = ({username, title, text}) => dispatch => {
=======
export const createPost = (formData) => async dispatch => {
>>>>>>> 355179fbb5f05cec8e038e880578091b915d9300
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
    const res = axios.post(`${baseUrl}/posts`, formData, config);
        dispatch({
            type: CREATE_POST,
            payload: res.data
        });
        alert("Post Created Successfully! Refer to Posts Page to see posts. ")
        dispatch(setAlert('Posts Created', 'success'));
    } catch(err) {
        dispatch({
            type: POST_ERROR,
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
