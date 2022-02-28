<template>
  <section class="auth">
    <header>
      <router-link :to="{ name: 'Home' }" class="navbar-brand">
        <span class="highlight">Over</span>Clocked
      </router-link>
    </header>

    <div class="page-content">
      <div class="form-content">
        <form class="form-right" @submit.prevent="resetPassword">
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
          <v-card-actions class="p-0 w-100">
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
              Reset Password
            </v-btn>
          </v-card-actions>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        password: '',
        passwordConfirm: ''
      },
      loading: false
    }
  },
  methods: {
    resetPassword() {
      this.loading = true
      this.$store
        .dispatch('auth/resetPassword', {
          token: this.$route.params.token,
          password: this.user
        })
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
