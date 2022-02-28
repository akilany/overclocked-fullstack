<template>
  <transition-group name="slide">
    <Notification
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </transition-group>
</template>

<script>
import { mapState } from 'vuex'
import Notification from './Notification'
export default {
  components: {
    Notification
  },
  computed: {
    ...mapState({
      notifications: state => state.notification.notifications
    })
  }
}
</script>

<style>
.slide-enter {
  transform: translateY(-24px);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-out;
}

.slide-leave-to {
  transform: translateY(-24px);
}
</style>