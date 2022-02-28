import teamServices from '@/services/teamServices'

export const namespaced = true

export const state = {
  team: []
}

export const mutations = {
  SET_TEAM(state, team) {
    state.team = team
  }
}

export const actions = {
  fetch({ commit, dispatch }) {
    return teamServices
      .getAll()
      .then(({ data }) => {
        commit('SET_TEAM', data.data)
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem fetching team: ${err.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  },
  add({ dispatch }, member) {
    return teamServices
      .post(member)
      .then(() => {
        const notification = {
          type: 'success',
          message: 'Member has been added successfully.'
        }
        dispatch('notification/add', notification, {
          root: true
        })
        location.reload()
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem adding member: ${err.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  },
  update({ dispatch }, { id, member }) {
    return teamServices
      .update(id, member)
      .then(() => {
        const notification = {
          type: 'success',
          message: 'Member has been updated successfully.'
        }
        dispatch('notification/add', notification, {
          root: true
        })
        location.reload()
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem updating member: ${err.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  },
  delete({ dispatch }, id) {
    return teamServices
      .delete(id)
      .then(() => {
        const notification = {
          type: 'success',
          message: 'Member has been deleted successfully.'
        }
        dispatch('notification/add', notification, {
          root: true
        })
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem deleting member: ${err.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  }
}
