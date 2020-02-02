import axios from 'axios';
import { setAlert } from './alert' 
import {
    GET_POST,
    CREATE_POST,
    UPDATE_POST,
    DELETE_POST,
    POST_ERROR,

} from "./types"



const baseUrl = process.env.REACT_APP_BASE_URL;

export const getPost = id => async dispatch => {
    const res = await axios.get(`${baseUrl}/posts/${id}`)
    dispatch({
        type: GET_POST,
        payload: res.data
    });
};

export const createPost = ({username, title, text}) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    console.log("test1")

    const body = ({username, title, text});
    console.log("test2");
    console.log(body)
    try {
        const res = axios.post(`${baseUrl}/posts`, body, config);
    console.log('test3')
        dispatch({
            type: CREATE_POST,
            payload: res.data
        });
    } catch(err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });
    }
};
export const updatePost =  (post, _id) => async dispatch => {
    const res = await axios.put(`${baseUrl}/posts/${_id}`, post);
    dispatch({
        type: UPDATE_POST,
        payload: res.data
    });
};

export const deletePost = id => dispatch => {
    if(alert("Warning! This can not be undone! Are you sure you want to delete this post")) {
        try {
            axios.delete(`${baseUrl}/posts/${id}`)
            .then(res => 
            dispatch({type: DELETE_POST,
            payload: id
        })
      )
        console.log("test1")
      dispatch(setAlert('Post Deleted', 'success'));
        console.log("Test3")
        } catch (err) {
            dispatch({
                type: POST_ERROR,
                payload: err.resposne.data
            })
        }
    }
};