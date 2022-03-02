import services from '@/services/authServices'

export const namespaced = true

export const state = {}

export const mutations = {}

export const actions = {
  async login({ dispatch }, cred) {
    try {
      const { data } = await services.login(cred)
      if (data) {
        localStorage.setItem('token', data.token)
        // await dispatch('me/fetch', null, { root: true })
        location.reload()
      }
    } catch (err) {
      const notification = {
        type: 'error',
        message: err.response.data.message
      }
      dispatch('notification/add', notification, {
        root: true
      })
      throw err
    }
  },
  async signup({ dispatch }, cred) {
    try {
      const { data } = await services.signup(cred)
      if (data) {
        localStorage.setItem('token', data.token)
        // await dispatch('me/fetch', null, { root: true })
        location.reload()
      }
    } catch (err) {
      const notification = {
        type: 'error',
        message: err.response.data.message
      }
      dispatch('notification/add', notification, {
        root: true
      })
      throw err
    }
  },
  logout({ dispatch }) {
    return services
      .logout()
      .then(() => {
        localStorage.removeItem('token')
        location.reload()
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: err.response.data.message
        }
        dispatch('notification/add', notification, {
          root: true
        })
      })
  },
  forgotPassword({ dispatch }, email) {
    return services
      .forgotPassword(email)
      .then(() => {
        const notification = {
          type: 'success',
          message: 'Verification link has sent to your email.'
        }
        dispatch('notification/add', notification, {
          root: true
        })
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: err.response.data.message
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  },
  resetPassword({ dispatch }, { token, password }) {
    return services
      .resetPassword(token, password)
      .then(() => {
        const notification = {
          type: 'success',
          message: 'Your password has been reset successfully'
        }
        dispatch('notification/add', notification, {
          root: true
        })
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `${err.response.data.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  }
}
