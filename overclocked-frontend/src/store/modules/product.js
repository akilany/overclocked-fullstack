import productServices from '@/services/productServices'

export const namespaced = true

export const state = {
  products: [],
  product: {}
}

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },
  SET_PRODUCT(state, product) {
    state.product = product
  }
}

export const actions = {
  fetch({ commit, dispatch }, id) {
    return productServices
      .getOne(id)
      .then(({ data }) => {
        commit('SET_PRODUCT', data.data)
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem fetching product: ${err.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  },
  fetchAll({ commit, dispatch }) {
    return productServices
      .getAll()
      .then(({ data }) => {
        commit('SET_PRODUCTS', data.data)
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem fetching products: ${err.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  },
  create({ dispatch }, product) {
    return productServices
      .post(product)
      .then(() => {
        const notification = {
          type: 'success',
          message: 'Product has been created successfully.'
        }
        dispatch('notification/add', notification, {
          root: true
        })
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem creating product: ${err.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  },
  update({ dispatch }, { id, product }) {
    return productServices
      .update(id, product)
      .then(() => {
        const notification = {
          type: 'success',
          message: 'Product has been updated successfully.'
        }
        dispatch('notification/add', notification, {
          root: true
        })
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem updating product: ${err.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  },
  delete({ dispatch }, id) {
    return productServices
      .delete(id)
      .then(() => {
        const notification = {
          type: 'success',
          message: 'Product has been deleted successfully.'
        }
        dispatch('notification/add', notification, {
          root: true
        })
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: `There was a problem deleting product: ${err.message}`
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw err
      })
  }
}
