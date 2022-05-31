import axios, { AxiosRequestConfig } from 'axios'

export const api = axios.create({
  baseURL: 'https://senai-snacker-backend.herokuapp.com/api'
})

api.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localStorage.getItem('accessToken')

  if (token) {
    config.headers!.authorization = `Bearer ${token}`
    config.headers!['Access-Control-Allow-Origin'] = '*'
  }

  return config
})
  
api.interceptors.response.use(response => {
  return response
}, error => {
  if (error.response.status === 401 || error.response.status === 403) {
    window.location.href = '/unauthorized'
    localStorage.removeItem('accessToken')
  }
  return error
})
