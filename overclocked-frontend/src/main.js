import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import vuetify from './plugins/vuetify'
import VueMeta from 'vue-meta'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap'
import './assets/scss/style.scss'
import axios from 'axios'
import 'nprogress/nprogress.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Banner from '@/components/layout/Banner'
import Date from '@/filters/date'
import numFormatter from '@/filters/numFormatter'

Vue.use(BootstrapVue)
Vue.use(VueMeta)

// Global Components
Vue.component('Navbar', Navbar)
Vue.component('Footer', Footer)
Vue.component('Banner', Banner)

// Global Filters
Vue.filter('date', Date)
Vue.filter('numFormatter', numFormatter)
Vue.filter('shorten', value => {
  if (value.length >= 120) return value.substring(0, 120) + '...'
  else return value
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  created() {
    AOS.init()
    const token = localStorage.getItem('token')
    if (token) this.$store.dispatch('me/fetch')

    axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response.status === 401) this.$store.dispatch('auth/logout')
        return Promise.reject(error)
      }
    )
  },
  render: h => h(App)
}).$mount('#app')
