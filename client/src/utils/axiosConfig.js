import axios from 'axios'
import { encrypt, decrypt } from '../utils/utils.js'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5002/airbnb/api/v1',
  // withCredentials: true,
})

axiosInstance.interceptors.request.use(
  function (config) {
    if (config.data) {
      config.data = { data: encrypt(JSON.stringify(config.data)) }
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// Response interceptor for decrypting incoming data
axiosInstance.interceptors.response.use(
  function (response) {
    // Decrypt response data
    if (response.data) {
      response.data = JSON.parse(decrypt(response.data.data))
    }

    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

// axiosInstance.interceptors.response.use(undefined, function (error) {
//   // Handle error responses here
//   return Promise.reject(error.response)
// })
export default axiosInstance
