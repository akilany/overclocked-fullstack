import services from '@/services/userServices'

export const namespaced = true

export const state = {
  users: [],
  user: {}
}

export const mutations = {
  SET_USERS(state, users) {
    state.users = users
  },
  SET_USER(state, user) {
    state.user = user
  }
}

export const actions = {
  fetch({ commit, dispatch }, id) {
    return services
      .getUser(id)
      .then(({ data }) => {
        commit('SET_USER', data.data)
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem fetching this user: ${err.response.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  },
  fetchAll({ commit, dispatch }) {
    return services
      .getUsers()
      .then(({ data }) => {
        commit('SET_USERS', data.data)
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem fetching users: ${err.response.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  },
  update({ dispatch }, { id, user }) {
    return services
      .updateUser(id, user)
      .then(() => {
        const notification = {
          type: 'success',
          message: 'User has been updated successfully.'
        }
        dispatch('notification/add', notification, {
          root: true
        })
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem updating this user: ${err.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  },
  delete({ dispatch }, id) {
    return services
      .deleteUser(id)
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
          message: `There was a problem deleteing this account: ${err.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  }
}
