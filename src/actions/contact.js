import axios from "axios";

import { 
    CONTACT_ERROR,
    CONTACT_SUCCESS,
    DELETE_MESSAGE,
    GET_ERRORS
} from "./types"


const baseUrl = process.env.REACT_APP_BASE_URL;

export const createMessage = (formData) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const res = await axios.post(`${baseUrl}/contact`, formData, config)

        dispatch({ 
            type: CONTACT_SUCCESS,
            payload: res.data
        });
        alert("Message Sent Successfully")

    } catch (err) {
        dispatch({
            type: CONTACT_ERROR,
        })
            alert("There was a error in sending that message");

    }
}

export const deleteMessage = id => dispatch => {

            axios.delete(`${baseUrl}/contact/${id}`)
            .then(res => 
                dispatch({
                type: DELETE_MESSAGE,
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
