import services from '@/services/services'
import authServices from '@/services/authServices'

export const namespaced = true

export const state = {
  info: {}
}

export const mutations = {
  SET_INFO(state, info) {
    state.info = info[0]
  }
}

export const actions = {
  fetch({ commit }) {
    return services.getInfo().then(response => {
      commit('SET_INFO', response.data)
    })
  },
  update({ dispatch }, info) {
    return authServices
      .updateInfo(info)
      .then(() => {
        const notification = {
          type: 'success',
          message: 'Info has been updated successfully.'
        }
        dispatch('notification/add', notification, {
          root: true
        })
        location.reload()
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem updating info: ${err.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  }
}

export const getters = {
  info(state) {
    return state.info
  }
}
