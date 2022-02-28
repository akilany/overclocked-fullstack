import services from '@/services/blogServices'

export const namespaced = true

export const state = {
  blog: [],
  topPosts: [],
  post: {},
  comments: []
}

export const mutations = {
  SET_BLOG(state, blog) {
    state.blog = blog
  },
  SET_TOP_POSTS(state, topPosts) {
    state.topPosts = topPosts
  },
  SET_POST(state, post) {
    state.post = post
  },
  SET_BLOG_COMMENTS(state, comments) {
    state.comments = comments
  }
}

export const actions = {
  fetch({ commit, dispatch }, id) {
    return services
      .getOne(id)
      .then(({ data }) => {
        commit('SET_POST', data.data)
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem fetching post: ${err.response.data.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  },
  fetchAll({ commit, dispatch }) {
    return services
      .getAll()
      .then(({ data }) => {
        commit('SET_BLOG', data.data)
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem fetching blog: ${err.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  },
  fetchTop({ commit, dispatch }, limit) {
    return services
      .getTop(limit)
      .then(({ data }) => {
        commit('SET_TOP_POSTS', data.data)
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem fetching top articals: ${err.response.data.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  },
  fetchComments({ commit, dispatch }, id) {
    return services
      .getComments(id)
      .then(({ data }) => {
        commit('SET_BLOG_COMMENTS', data.data)
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem fetching blog comments: ${err.response.data.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  },
  create({ dispatch }, post) {
    return services
      .post(post)
      .then(() => {
        const notification = {
          type: 'success',
          message: 'Post has been created successfully.'
        }
        dispatch('notification/add', notification, {
          root: true
        })
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem creating post: ${err.response.data.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  },
  postComment({ dispatch }, { id, comment }) {
    return services
      .postComment(id, comment)
      .then(() => {})
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem posting your comment: ${err.response.data.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  },
  update({ dispatch }, { id, post }) {
    return services
      .update(id, post)
      .then(() => {
        const notification = {
          type: 'success',
          message: 'Post has been updated successfully.'
        }
        dispatch('notification/add', notification, {
          root: true
        })
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem updating post: ${err.response.data.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  },
  delete({ dispatch }, id) {
    return services
      .delete(id)
      .then(() => {
        const notification = {
          type: 'success',
          message: 'Post has been deleted successfully.'
        }
        dispatch('notification/add', notification, {
          root: true
        })
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem deleting post: ${err.response.data.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  }
}
