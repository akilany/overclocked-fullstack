import { api, config } from '../utils/apihandler'

const apiClient = api('products')

export default {
  getAll() {
    return apiClient.get('/')
  },
  getOne(id) {
    return apiClient.get(`/${id}`)
  },
  post(product) {
    return apiClient.post('/', product, config)
  },
  update(id, product) {
    return apiClient.patch(`/${id}`, product, config)
  },
  delete(id) {
    return apiClient.delete(`/${id}`)
  }
}
