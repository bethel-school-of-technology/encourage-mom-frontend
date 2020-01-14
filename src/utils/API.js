import axios from 'axios';

export default axios({
    baseURL: "https://localhost:5000/",
    responseType: "json"
});