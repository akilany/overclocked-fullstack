import commentServices from '@/services/commentServices'

export const namespaced = true

export const state = {
  comments: []
}

export const mutations = {
  SET_COMMENTS(state, comments) {
    state.comments = comments
  }
}

export const actions = {
  fetch({ commit, dispatch }) {
    return commentServices
      .getAll()
      .then(({ data }) => {
        commit('SET_COMMENTS', data.data)
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem fetching comments: ${err.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  },
  add({ dispatch }, comment) {
    return commentServices
      .post(comment)
      .then(() => {
        const notification = {
          type: 'success',
          message: 'Comment has been added successfully.'
        }
        dispatch('notification/add', notification, {
          root: true
        })
        location.reload()
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem adding comment: ${err.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  },
  update({ dispatch }, { id, comment }) {
    return commentServices
      .update(id, comment)
      .then(() => {
        const notification = {
          type: 'success',
          message: 'Comment has been updated successfully.'
        }
        dispatch('notification/add', notification, {
          root: true
        })
        location.reload()
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem updating comment: ${err.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  },
  delete({ dispatch }, id) {
    return commentServices
      .delete(id)
      .then(() => {
        const notification = {
          type: 'success',
          message: 'Comment has been deleted successfully.'
        }
        dispatch('notification/add', notification, {
          root: true
        })
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem deleting comment: ${err.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  }
}
