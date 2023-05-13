import axios from 'axios';

const axiosInstance = axios.create({
    BASE_URL: "http://localhost:3001"
});

axiosInstance.defaults.headers.common["Authorization"] = localStorage.getItem('token');

export default axiosInstance;