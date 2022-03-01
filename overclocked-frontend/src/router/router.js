import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/store'
import goTo from 'vuetify/es5/services/goto'
import NProgress from 'nprogress'
import Home from '../views/Home/Index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/views/Products/Index'),
    beforeEnter(routeTo, routeFrom, next) {
      store.dispatch('product/fetchAll').then(() => {
        next()
      })
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('@/views/Blog/Index'),
    beforeEnter(routeTo, routeFrom, next) {
      store.dispatch('post/fetchAll').then(() => {
        next()
      })
    }
  },
  {
    path: '/blog/:id',
    name: 'Artical',
    component: () => import('@/views/Artical/Index'),
    beforeEnter(routeTo, routeFrom, next) {
      store.dispatch('post/fetch', routeTo.params.id).then(() => {
        next()
      })
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact/Index')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Auth/Login'),
    meta: {
      noAuth: true
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('@/views/Auth/Signup'),
    meta: {
      noAuth: true
    }
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('@/views/Auth/ForgotPassword'),
    meta: {
      noAuth: true
    }
  },
  {
    path: '/reset-password/:token',
    name: 'ResetPassword',
    component: () => import('@/views/Auth/ResetPassword'),
    meta: {
      noAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0

    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }

    return goTo(scrollTo)
  },
  routes
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('token')
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next({ name: 'Login' })
    store.dispatch('notification/add', {
      type: 'warning',
      message: 'You need to be logged in to access this page'
    })
  }
  next()
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('token')
  if (to.matched.some(record => record.meta.noAuth) && loggedIn) {
    next('/')
  }
  next()
})

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
