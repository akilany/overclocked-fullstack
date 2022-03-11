import Vue from 'vue'
import Vuex from 'vuex'
import * as info from './modules/info'
import * as auth from './modules/auth'
import * as me from './modules/me'
import * as user from './modules/user'
import * as product from './modules/product'
import * as post from './modules/post'
import * as comment from './modules/comment'
import * as team from './modules/team'
import * as sponsor from './modules/sponsor'
import * as email from './modules/email'
import * as notification from './modules/notification'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imageLink: 'https://overclocked.herokuapp.com',
    loader: false
  },
  mutations: {
    START_LOADER(state) {
      state.loader = true
    },
    END_LOADER(state) {
      state.loader = false
    }
  },
  actions: {},
  modules: {
    info,
    auth,
    me,
    user,
    product,
    post,
    comment,
    team,
    sponsor,
    email,
    notification
  }
})
