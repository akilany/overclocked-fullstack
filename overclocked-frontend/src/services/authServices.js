import { api } from '../utils/apihandler'

const apiClient = api('users')

export default {
  login(cred) {
    return apiClient.post('/login', cred)
  },
  signup(cred) {
    return apiClient.post('/signup', cred)
  },
  logout() {
    return apiClient.get('/logout')
  },
  forgotPassword(email) {
    return apiClient.post('/forgotPassword', email)
  },
  resetPassword(token, password) {
    return apiClient.patch(`/resetPassword/${token}`, password)
  }
}
