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
import { mapState } from 'vuex'
export default {
  components: {
    Artical
  },
  computed: {
    ...mapState({
      post: state => state.post.post
    })
  }
}
</script>

<style></style>
