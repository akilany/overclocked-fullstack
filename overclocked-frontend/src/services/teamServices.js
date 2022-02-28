import { api, config } from '../utils/apihandler'

const apiClient = api('members')

export default {
  getAll() {
    return apiClient.get('/')
  },
  getOne(id) {
    return apiClient.get(`/${id}`)
  },
  post(member) {
    return apiClient.post('/', member, config)
  },
  update(id, member) {
    return apiClient.patch(`/${id}`, member, config)
  },
  delete(id) {
    return apiClient.delete(`/${id}`)
  }
}
