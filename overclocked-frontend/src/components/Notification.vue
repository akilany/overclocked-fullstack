<template>
  <v-alert
    dense
    v-if="notification"
    tile
    :type="notification.type"
    class="notification"
    width="100%"
    style="z-index:10000"
    >{{ notification.message }}
    </v-alert
  >
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      alert: true,
      timeout: null
    }
  },
  methods: {
    ...mapActions('notification', ['remove']),
    removeNotification() {
      this.remove(this.notification)
    }
  },
  mounted() {
    this.timeout = setTimeout(() => this.remove(this.notification), 2500)
  },
  beforeDestroy() {
    clearTimeout(this.timeout)
  }
}
</script>

<style lang="scss">
.notification {
  position: fixed !important;
  text-align: center;
  z-index: 1000;
}
</style>