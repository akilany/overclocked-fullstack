<template>
  <section class="auth">
    <header>
      <router-link :to="{ name: 'Home' }" class="navbar-brand">
        <span class="highlight">Over</span>Clocked
      </router-link>
    </header>

    <div class="page-content">
      <div class="form-content">
        <form class="form-right" @submit.prevent="sendLink">
          <div class="input-group">
            <input
              type="email"
              v-model="user.email"
              class="form-control"
              required
            />
            <span>Email</span>
          </div>
          <v-card-actions class="p-0 w-100">
            <v-btn
              type="submit"
              tile
              color="main"
              dark
              block
              large
              elevation="0"
              class="px-8"
              :loading="loading"
            >
              Send Link
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
        email: ''
      },
      loading: false
    }
  },
  methods: {
    sendLink() {
      this.loading = true
      this.$store
        .dispatch('auth/forgotPassword', this.user)
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
