<template>
  <v-app>
    <NotificationContainer />
    <v-overlay :value="overlay" z-index="100">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <v-main>
      <router-view :key="$route.fullPath" />
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import NotificationContainer from '@/components/NotificationContainer'
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'OverClocked',
    // all titles will be injected into this template
    titleTemplate: '%s | OverClocked'
  },
  components: {
    NotificationContainer
  },
  watch: {
    overlay(val) {
      if (!val) return
      setTimeout(() => this.$store.commit('END_LOADER'), 500)
    }
  },
  computed: {
    ...mapState({
      overlay: state => state.loader
    })
  }
}
</script>
