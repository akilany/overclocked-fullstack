import { api, config } from '../utils/apihandler'

const apiClient = api('articals')

export default {
  getAll() {
    return apiClient.get('/')
  },
  getOne(id) {
    return apiClient.get(`/${id}`)
  },
  getTop(limit) {
    return apiClient.get(`/top/${limit}`)
  },
  post(artical) {
    return apiClient.post('/', artical, config)
  },
  update(id, artical) {
    return apiClient.patch(`/${id}`, artical, config)
  },
  delete(id) {
    return apiClient.delete(`/${id}`)
  },
  getComments(articalID) {
    return apiClient.get(`/${articalID}/comments`)
  },
  postComment(articalID, comment) {
    return apiClient.post(`/${articalID}/comments`, comment)
  }
}
