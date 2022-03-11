<template>
  <nav class="navbar navbar-expand-md navbar-dark">
    <div class="container">
      <router-link :to="{ name: 'Home' }" class="navbar-brand">
        <span class="highlight">Over</span>Clocked
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarResponsive"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a @click="goTo('home')" class="nav-link">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a @click="goTo('features')" class="nav-link">
              Features
            </a>
          </li>
          <li class="nav-item">
            <a @click="goTo('team')" class="nav-link">
              Team
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Pages
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <router-link :to="{ name: 'Products' }" class="dropdown-item">
                Products
              </router-link>
              <router-link :to="{ name: 'Blog' }" class="dropdown-item">
                Blog
              </router-link>
              <router-link :to="{ name: 'Contact' }" class="dropdown-item">
                Contact
              </router-link>
            </div>
          </li>
        </ul>
      </div>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarResponsive"
      >
        <v-btn
          color="main"
          elevation="0"
          dark
          :to="{ name: 'Signup' }"
          v-if="!loggedIn"
        >
          Sign Up
        </v-btn>
        <v-btn color="main" elevation="0" dark @click="logout" v-else>
          Logout
        </v-btn>
        <!-- <v-btn color="main" elevation="0" dark disabled v-else>
          {{ user.name }}
        </v-btn> -->
      </div>
    </div>
  </nav>
</template>

<script>
import $ from 'jquery'
$(window).scroll(function() {
  if ($(this).scrollTop() > 66) {
    $('.navbar').addClass('solid')
  } else {
    $('.navbar').removeClass('solid')
  }
})
import { authComputed } from '@/store/helpers'
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      user: state => state.me.user
    }),
    ...authComputed
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
    },
    goTo(page) {
      if (this.$route.name !== 'Home')
        this.$router.push({ name: 'Home', hash: `#${page}` })
      else
        this.$vuetify.goTo(`#${page}`, {
          duration: 800,
          offset: 50,
          easing: 'easeInOutCubic'
        })
    }
  }
}
</script>

<style></style>
