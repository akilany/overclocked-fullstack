import services from '@/services/userServices'

export const namespaced = true

export const state = {
  user: {}
}

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  }
}

export const actions = {
  fetch({ commit, dispatch }) {
    return services
      .getMe()
      .then(({ data }) => {
        commit('SET_USER', data.data)
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem fetching your data: ${err.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  },
  update({ dispatch }, user) {
    return services
      .updateUser(user)
      .then(() => {
        const notification = {
          type: 'success',
          message: 'Your account has been updated successfully.'
        }
        dispatch('notification/add', notification, {
          root: true
        })
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem updating your account: ${err.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  },
  delete({ dispatch }) {
    return services
      .deleteMe()
      .then(() => {
        const notification = {
          type: 'success',
          message: 'Account has been deleted successfully.'
        }
        dispatch('notification/add', notification, {
          root: true
        })
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem deleteing your account: ${err.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  }
}

export const getters = {
  loggedIn() {
    const token = localStorage.getItem('token')
    return !!token
  }
}
