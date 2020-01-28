import axios from 'axios';

export default axios({
    baseURL: "https://localhost:5000/api",
    responseType: "json"
});