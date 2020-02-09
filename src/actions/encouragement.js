import axios from 'axios';
import {
    CREATE_ENCOURAGEMENT,
    ENCOURAGEMENT_ERROR

} from "./types"

const baseUrl = process.env.REACT_APP_BASE_URL;


export const createEncouragement = ({ title, text, reference, date}) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = ({title, text, reference, date});

    try {
        const res = axios.post(`${baseUrl}/encouragements`, body, config);
        
        dispatch({
            type: CREATE_ENCOURAGEMENT,
            payload: res.data
        });
    } catch(err) {
        dispatch({
            type: ENCOURAGEMENT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });
    }
};