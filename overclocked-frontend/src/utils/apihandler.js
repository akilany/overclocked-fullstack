import axios from 'axios'

const token = localStorage.getItem('token')
const auth = token ? `Bearer ${token}` : ''

export const api = table => {
  return axios.create({
    baseURL: `http://localhost:4111/api/v1/${table}`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: auth
    },
    timeout: 10000
  })
}

export const config = {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
}
