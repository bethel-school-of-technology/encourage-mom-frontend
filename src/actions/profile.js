import axios from 'axios';
import { setAlert } from '../actions/alert';

import {
	GET_PROFILE,
	UPDATE_PROFILE,
	CLEAR_CURRENT_PROFILE,
	PROFILE_ERROR,
	CREATE_PROFILE,
	ACCOUNT_DELETED
	// SET_CURRENT_USER,
} from './types';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const getCurrentProfile = (userData) => (dispatch) => {
	axios
		.get(`${baseUrl}/users/me`, userData)
		.then((res) =>
			dispatch({
				type: GET_PROFILE,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_PROFILE,
				payload: {}
			})
		);
};

//create profile

export const createProfile = (formData) => async (dispatch) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};

		const res = await axios.post(`${baseUrl}/profile`, formData, config);

		dispatch({
			type: CREATE_PROFILE,
			payload: res.data
		});
		alert('Profile Created Successfully! Refer to User Bios to see profile. ');
		dispatch(setAlert('Profile Created', 'success'));
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR
		});
		alert('Profile Already Created. Want to Edit Profle? Go to Edit Profile Link');
	}
};

// edit profile
export const editProfile = (profile, id) => async (dispatch) => {
	const res = await axios.put(`${baseUrl}/profile/${id}`, profile);
	dispatch({
		type: UPDATE_PROFILE,
		payload: res.data
	});
	alert('Profile Updated Successfully!');
};

// delete account/profile
export const deleteProfile = () => async (dispatch) => {
	if (alert('Warning! This can not be undone! Are you sure you want to delete your account')) {
		console.log('test1');
		await axios
			.delete(`${baseUrl}/profile/`)
			.then((res) => dispatch({ type: CLEAR_CURRENT_PROFILE }), dispatch({ dispatch: ACCOUNT_DELETED }))
			// dispatch(setAlert('Your account has been permanantly deleted :('
			.catch((err) =>
				dispatch({
					type: PROFILE_ERROR,
					payload: { msg: err.response.statusText, status: err.response.status }
				})
			);
	}
};
