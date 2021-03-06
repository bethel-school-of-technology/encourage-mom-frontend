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

export default function(state = initalState, action) {
    const {type, payload} = action;

    switch(type) {
        case GET_POSTS:
            return{
                ...state,
                posts: payload,
                loading: false
            };
        case GET_POST:
            return{
                ...state,
                posts: payload,
                loading: false
            };
        case CREATE_POST:
            return {
                ...state,
                posts: [payload, ...state.posts],
                loading: false
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== payload),
                loading: false
            };
        case POST_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state;

        
    } 
}