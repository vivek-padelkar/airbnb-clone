import axios from 'axios'
import 
const axiosInstance = axios.create()
axiosInstance.interceptors.request.use(function (config) {
    if (config.data) {

    }
})
