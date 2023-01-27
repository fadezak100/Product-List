import axios from 'axios'
import config from '../config'

const { apiBaseUrl } = config

const instance = axios.create({ baseURL: apiBaseUrl, withCredentials: true })

instance.interceptors.request.use(
    config => {
      if (!config.headers) {
        throw new Error()
      }
      return Promise.resolve(config)
    },
    error => {
      return Promise.reject(error)
    }
  )
  
export default instance