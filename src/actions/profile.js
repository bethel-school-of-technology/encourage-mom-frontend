import axios from "axios";
import {setAlert} from '../actions/alert';

import { 
    GET_PROFILES,
    GET_PROFILE,
    UPDATE_PROFILE,
    CREATE_PROFILE,
    CLEAR_CURRENT_PROFILE,
    PROFILE_ERROR,
    SET_CURRENT_USER,
    ACCOUNT_DELETED
} from "./types"



// gets current profile
export const getCurrentProfile = () => async dispatch => {

    try{
        const res = await axios.get(`http://localhost:5000/profile/me`);
        
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
     } catch(err) {
        dispatch({
            type: PROFILE_ERROR,
            payload:{msg: err.response.statusText, status: err.response.status}
      });
    }
}

// //gets all profiles
// export const getProfiles = () => async dispatch => {
//     dispatch({ type: CLEAR_CURRENT_PROFILE})

//     try {
//         const res = await axios.get(`http://localhost:5000/api/profile`);

//         dispatch({
//             type: GET_PROFILES,
//             payload: res.data
//         });
//     } catch (err) {
//         dispatch({
//             type: PROFILE_ERROR,
//             payload: {msg: err.response.statusText, status: err.response.status }
//         });
//     }
// };

// get profile by handle
// export const getProfileByHandle = () => dispatch => {
//     dispatch(setProfileLoading());
//     axios.get(`http://localhost:5000/api/users/me`)
//     .then(res => 
//         dispatch({}))
// }

//gets profile by id
export const getProfileById = userId => async dispatch => {
        try {
            const res = await axios.get(`http://localhost:5000/profile/user/${userId}`);

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

//     // dispatch(setProfileLoading())
//     // axios.get('http://localhost:5000/api/users/me', userData)
//     // .then(res =>
//     //     dispatch({
//     //         type: GET_PROFILE,
//     //         payload: res.data
//     //     })
//     //     )
//     //     .catch(err => 
//     //         dispatch({type:GET_PROFILE,
//     //         payload: {}
//     //     }))


// // create or update profile

// export const createProfile = (formData, history, edit = false) => async dispatch =>  {
//     try {
//         const config = {
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         };

//         const res = await axios.post('http://localhost:5000/api/profile', formData, config);

//         dispatch({
//             type: GET_PROFILE,
//             payload: res.data
//         });

//         dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));

//         if (!edit) {
//             history.push('/profile')
//         }
//     } catch (err) {
//         err.forEach(err => dispatch(setAlert(err.msg, 'danger')))
//     } 
//     // dispatch({
//     //     type: PROFILE_ERROR,
//     //     payload: {msg: err.response.statusText, status: error.response.status}
//     //     })
//     // }


    // delete account/profile
export const deleteAccount = () => async dispatch => {
    if(alert("Warning! This can not be undone! Are you sure you want to delete your account")) {
        try {
            await axios.delete(`http://localhost:5000/api/profile`);

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


//create profile

export const createProfile = (formData) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const res = await axios.post(`http://localhost:5000/profile`, formData, config)

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
    const res = await axios.put(`http://localhost:5000/profile/${id}`, profile);
    dispatch({
        type: UPDATE_PROFILE,
        payload: res.data
})
}

