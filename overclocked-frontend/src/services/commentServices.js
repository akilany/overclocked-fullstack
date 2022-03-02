import { api } from '../utils/apihandler'

const apiClient = api('comments')

export default {
  getAll() {
    return apiClient.get('/')
  },
  getOne(id) {
    return apiClient.get(`/${id}`)
  },
  post(comment) {
    return apiClient.post('/', comment)
  },
  update(id, comment) {
    return apiClient.patch(`/${id}`, comment)
  },
  delete(id) {
    return apiClient.delete(`/${id}`)
  }
}
