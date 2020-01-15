import axios from "axios";

import { 
    GET_PROFILES,
    GET_PROFILE,
    UPDATE_PROFILE,
    CLEAR_CURRENT_PROFILE,
    PROFILE_ERROR,
    SET_CURRENT_USER,
    ACCOUNT_DELETED
} from "./types"

const baseUrl = process.env.REACT_APP_BASE_URL;

// gets current profile
export const getCurrentProfile = ({name, username, location, bio}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({name, username, location, bio });

    try{
        const res = await axios.get(`${baseUrl}/profile/me`, body, config);
        
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
     } catch(err) {
        dispatch({
            type: PROFILE_ERROR,
            payload:{}
      });
    }
}

//gets all profiles
export const getProfiles = () => dispatch => {
    dispatch({ type: CLEAR_CURRENT_PROFILE})

    try {
        const res = await axios.get(`${baseUrl}/api/profile`);

        dispatch({
            type: GET_PROFILES,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status }
        });
    }
};

//gets profile by id

export const getProfileById = () => dispatch => {
    try {
        const res = await axios.get(`${baseUrl}/profile/user/${userId}`);

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    }   catch(err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status } 
        });
    }
};

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
            type: CREATE_PROFILE,
            payload: res.data
        });

        dispatch(setAlert('Profile Create', 'success'));
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status
            }
        })
    }
}


// edit profile
export const editProfile = (profile, id) => async dispatch => {
    const res = await axios.put(`${baseUrl}/profile/${id}`, profile);
    dispatch({
        type: UPDATE_PROFILE,
        payload: res.data
})
}

//delete account/profile
export const deleteAccount = () => async dispatch => {
    if(alert("Warning! This can not be undone! Are you sure you want to delete your account")) {
        try {
            await axios.delete(`${baseUrl}/api/profile`);

            dispatch({type: CLEAR_CURRENT_PROFILE})
            dispatch({dispatch: ACCOUNT_DELETED})
            
            dispatch(setAlert('Your account has been permanantly deleted :('));
        } catch (err) {
            dispatch({
                type: PROFILE_ERROR,
                payload: {msg: err.response.statusText, status: err.resposne.status}
            })
        }
    }
};