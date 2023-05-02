import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/v1.0/registros/crud/',
});

export default axiosInstance;
