<template>
  <div class="showcase">
    <div class="vid-container">
      <video playsinline autoplay muted loop id="bgvid">
        <source :src="`${imageLink}/videos/intro.mp4`" type="video/mp4" />
      </video>

      <div class="header text-center">
        <h1 class="header-tag"><span class="highlight">Over</span>Clocked</h1>
        <p class="lead">Your Way To Build Your Dream PC</p>
        <router-link
          :to="{ hash: '#start' }"
          class="btn btn-outline-light btn-lg"
        >
          Get Started <i class="fas fa-angle-right"></i
        ></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      imageLink: state => state.imageLink
    })
  }
}
</script>

<style></style>
