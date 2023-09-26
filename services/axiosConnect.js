import axios from "axios";

const axiosConnect = axios.create({
    baseURL: 'https://dummyjson.com',
})

export default axiosConnect