<template>
  <div class="banner-area">
    <div class="container">
      <div class="banner">
        <h1 class="text-uppercase"><slot name="title"></slot></h1>
        <p>
          <router-link :to="{ name: 'Home' }">Home</router-link>
          <i class="fas fa-arrow-right"></i>
          <router-link :to="link"><slot name="title"></slot></router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: [String, Object]
  }
}
</script>

<style></style>
