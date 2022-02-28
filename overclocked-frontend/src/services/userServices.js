import { api, config } from '../utils/apihandler'

const apiClient = api('users')

export default {
  getMe() {
    return apiClient.get('/me')
  },
  updateMe(user) {
    return apiClient.patch(`/updateMe`, config, user)
  },
  deleteMe() {
    return apiClient.delete(`/deleteMe`)
  },
  updatePassword(user) {
    return apiClient.patch('/updatePassword', user)
  },
  getUsers() {
    return apiClient.get('/')
  },
  getUser(id) {
    return apiClient.get(`/${id}`)
  },
  updateUser(id, user) {
    return apiClient.patch(`/${id}`, config, user)
  },
  deleteUser(id) {
    return apiClient.delete(`/${id}`)
  }
}
