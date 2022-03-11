<template>
  <main class="blog-index">
    <Navbar />
    <Banner :link="{ name: 'Blog' }">
      <template slot="title">Blog</template>
    </Banner>
    <Blog />
    <Footer />
  </main>
</template>

<script>
import Blog from './components/Blog'
export default {
  metaInfo: {
    title: 'Blog'
  },
  components: {
    Blog
  }
}
</script>

<style></style>
