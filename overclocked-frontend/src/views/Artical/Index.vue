<template>
  <main class="blog-index">
    <Navbar />
    <Banner :link="{ name: 'Blog' }">
      <template slot="title">Blog</template>
    </Banner>
    <Artical />
    <Footer />
  </main>
</template>

<script>
import Artical from './Artical'
export default {
  components: {
    Artical
  }
}
</script>

<style></style>
