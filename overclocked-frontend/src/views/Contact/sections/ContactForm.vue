<template>
  <form @submit.prevent="sendMessage" class="form">
    <div class="row">
      <div class="form-group col">
        <input
          type="text"
          class="form-control"
          placeholder="Name"
          v-model="message.name"
          required
        />
      </div>
      <div class="form-group col">
        <input
          type="email"
          class="form-control"
          placeholder="name@example.com"
          v-model="message.email"
          required
        />
      </div>
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="Enter Subject"
        v-model="message.subject"
        required
      />
    </div>
    <div class="form-group">
      <textarea
        class="form-control"
        rows="6"
        placeholder="Write Your Message"
        v-model="message.message"
        required
      ></textarea>
    </div>
    <div>
      <v-btn
        type="submit"
        tile
        large
        color="main"
        dark
        elevation="0"
        :loading="loading"
      >
        Send Message
      </v-btn>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      message: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      loading: false
    }
  },
  methods: {
    sendMessage() {
      this.loading = true
      this.$store
        .dispatch('email/send', this.message)
        .then(() => {
          this.message = {
            name: '',
            email: '',
            subject: '',
            message: ''
          }
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
