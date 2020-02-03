import axios from "axios";
import {setAlert} from '../actions/alert';

import { 
    UPDATE_PROFILE,
    CLEAR_CURRENT_PROFILE,
    PROFILE_ERROR,
    CREATE_PROFILE,
    ACCOUNT_DELETED,
    // SET_CURRENT_USER,
} from "./types"


const baseUrl = process.env.REACT_APP_BASE_URL;

//create profile

export const createProfile = (formData) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const res = await axios.post(`${baseUrl}/profile`, formData, config)

        dispatch({ 
            type:  CREATE_PROFILE,
            payload: res.data
        });
        alert("Profile Created Successfully")
        dispatch(setAlert('Profile Created', 'success'));
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
        })
            alert("User not authorized to create profile");

    }
}



// edit profile
export const editProfile = (profile, username) => async dispatch => {
    const res = await axios.put(`${baseUrl}/profile/${username}`, profile);
    dispatch({
        type: UPDATE_PROFILE,
        payload: res.data
})
alert("Profile Updated Successfully!")

}



// delete account/profile
export const deleteProfile = () => async dispatch => {
    if(alert("Warning! This can not be undone! Are you sure you want to delete your account")) {
        console.log("test1")
            await axios.delete(`${baseUrl}/profile/`)
            .then(res =>
            dispatch({type: CLEAR_CURRENT_PROFILE}),
            dispatch({dispatch: ACCOUNT_DELETED})
            )
            // dispatch(setAlert('Your account has been permanantly deleted :('
            .catch(err => 
            dispatch({
                type: PROFILE_ERROR,
                payload: {msg: err.response.statusText, status: err.response.status}
            })
            )
        }
};

