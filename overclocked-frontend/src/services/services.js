import { api } from '../utils/apihandler'

const apiClient = api('')

export default {
  getInfo() {
    return apiClient.get('/info')
  }
}
