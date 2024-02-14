import axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8800',
  });

export default axiosInstance;