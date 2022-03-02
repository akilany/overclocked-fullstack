import services from '@/services/services'
import authServices from '@/services/authServices'

export const namespaced = true

export const state = {
  partners: []
}

export const mutations = {
  SET_PARTNERS(state, partners) {
    state.partners = partners
  }
}

export const actions = {
  fetch({ commit, dispatch }) {
    return services
      .getPartners()
      .then(response => {
        commit('SET_PARTNERS', response.data)
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem fetching partners: ${err.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  },
  add({ dispatch }, partner) {
    return authServices
      .postPartner(partner)
      .then(() => {
        const notification = {
          type: 'success',
          message: 'Partner has been added successfully.'
        }
        dispatch('notification/add', notification, {
          root: true
        })
        location.reload()
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem adding partner: ${err.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  },
  update({ dispatch }, { id, partner }) {
    return authServices
      .updatePartner(id, partner)
      .then(() => {
        const notification = {
          type: 'success',
          message: 'Partner has been updated successfully.'
        }
        dispatch('notification/add', notification, {
          root: true
        })
        location.reload()
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem updating partner: ${err.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  },
  delete({ dispatch }, id) {
    return authServices
      .deletePartner(id)
      .then(() => {
        const notification = {
          type: 'success',
          message: 'Partner has been deleted successfully.'
        }
        dispatch('notification/add', notification, {
          root: true
        })
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem deleting partner: ${err.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  }
}
