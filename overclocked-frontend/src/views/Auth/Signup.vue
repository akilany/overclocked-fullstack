<template>
  <section class="auth">
    <header>
      <router-link :to="{ name: 'Home' }" class="navbar-brand">
        <span class="highlight">Over</span>Clocked
      </router-link>
    </header>

    <div class="page-content">
      <div class="form-content">
        <div class="form-left">
          <h1>Sign Up</h1>
          <p>or Sign Up with</p>
          <p>
            <a href=""><i class="fab fa-facebook"></i></a>
            <a href=""><i class="fab fa-google"></i></a>
            <a href=""><i class="fab fa-github"></i></a>
          </p>
        </div>
        <form class="form-right" @submit.prevent="signUp">
          <div class="input-group">
            <input
              type="text"
              v-model="user.name"
              class="form-control"
              required
            />
            <span>Username</span>
          </div>
          <div class="input-group">
            <input
              type="email"
              v-model="user.email"
              class="form-control"
              required
            />
            <span>Email</span>
          </div>
          <div class="input-group">
            <input
              type="password"
              v-model="user.password"
              class="form-control"
              required
            />
            <span>Password</span>
          </div>
          <div class="input-group">
            <input
              type="password"
              v-model="user.passwordConfirm"
              class="form-control"
              required
            />
            <span>Confirm Password</span>
          </div>
          <div class="card-actions">
            <v-btn
              type="submit"
              tile
              color="main"
              dark
              large
              elevation="0"
              class="px-8"
              :loading="loading"
            >
              Sign Up
            </v-btn>
            or <router-link :to="{ name: 'Login' }">Login</router-link>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  metaInfo: {
    title: 'Sign Up'
  },
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
      },
      loading: false
    }
  },
  methods: {
    signUp() {
      this.loading = true
      this.$store
        .dispatch('auth/signup', this.user)
        .then(() => {
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style></style>
