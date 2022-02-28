import { api } from '../utils/apihandler'

const apiClient = api('messages')

export default {
  getAll() {
    return apiClient.get('/')
  },
  getOne(id) {
    return apiClient.get(`/${id}`)
  },
  post(message) {
    return apiClient.post('/', message)
  },
  update(id, message) {
    return apiClient.patch(`/${id}`, message)
  },
  delete(id) {
    return apiClient.delete(`/${id}`)
  }
}
