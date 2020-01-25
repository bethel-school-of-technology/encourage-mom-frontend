// import axios from 'axios';
// import {setAlert} from './alert';
// import { GET_POSTS, POST_ERROR, UPDATE_LIKES } from "./types";

// export const getPosts = () => async dispatch => {
//     try{
//         const res = await axios.get('/api/posts');

// import { setAlert } from './alert' 
// import {
//     GET_POSTS,
//     GET_POST,
//     CREATE_POST,
//     UPDATE_POST,
//     DELETE_POST,
//     POST_ERROR,

// } from "./types"



// const baseUrl = process.env.REACT_APP_BASE;


// // add like

// export const addLike = id => async dispatch => {
//     try{
//         const res = await axios.put(`/api/posts/like/${postId}`);

//         dispatch({
//             type: UPDATE_LIKES,
//             payload: {id, likes: res.data}
//         });
//     } catch (err) {
//         dispatch ({
//         type: POST_ERROR,
//         payload: {msg: err.response.statusText, status: err.response.status}

//         });
//     }
// };

// // Unlike

// export const removeLike = id => async dispatch => {
//     try{
//         const res = await axios.put(`/api/posts/unlike/${postId}`);

//         dispatch({
//             type: UPDATE_LIKES,
//             payload: {id, likes: res.data}
//         });
//     } catch (err) {
//         dispatch ({
//         type: POST_ERROR,
//         payload: {msg: err.response.statusText, status: err.response.status}
//         });
//     }
// }