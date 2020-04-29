import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://www.reddit.com',
  timeout: 2000
})

export default axiosInstance
