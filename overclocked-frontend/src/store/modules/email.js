import emailServices from '@/services/emailServices'

export const namespaced = true

export const state = {
  emails: []
}

export const mutations = {
  SET_EMAILS(state, emails) {
    state.emails = emails
  }
}

export const actions = {
  fetch({ commit, dispatch }) {
    return emailServices
      .getAll()
      .then(({ data }) => {
        commit('SET_EMAILS', data.data)
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem fetching emails: ${err.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
      })
  },
  send({ dispatch }, email) {
    return emailServices
      .post(email)
      .then(() => {
        const notification = {
          type: 'success',
          message: 'Your email has sent successfully.'
        }
        dispatch('notification/add', notification, {
          root: true
        })
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem sending your email: ${err.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  },
  delete({ dispatch }, id) {
    return emailServices
      .delete(id)
      .then(() => {
        const notification = {
          type: 'success',
          message: 'Email has been deleted successfully.'
        }
        dispatch('notification/add', notification, {
          root: true
        })
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem deleting email: ${err.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  }
}
