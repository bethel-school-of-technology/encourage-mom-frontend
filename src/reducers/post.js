import {
    GET_POSTS,
    POST_ERROR,
    UPDATE_LIKES,
    DELETE_POST,
    CREATE_POST,
    GET_POST,
    ADD_COMMENT,
    REMOVE_COMMENT
} from '../actions/types'

const initalState = {
    posts: [],
    post: null,
    loading: true,
    error: {}
};

// export default function(state = initalState, action) {
//     const {type, payload} = action;

//     switch 
// }