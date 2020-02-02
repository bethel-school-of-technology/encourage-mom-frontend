import axios from "axios";
import {setAlert} from '../actions/alert';

import { 
    CONTACT_ERROR,
    CONTACT_SUCCESS
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
        // dispatch(setAlert('Profile Created', 'success'));
    } catch (err) {
        dispatch({
            type: CONTACT_ERROR,
        })
            alert("There was a error in sending that message");

    }
}
