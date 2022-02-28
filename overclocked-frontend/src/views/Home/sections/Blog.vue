<template>
  <section id="news">
    <div class="container">
      <div class="col-12">
        <h1 class="text-uppercase">Our Latest News</h1>
        <p>
          Life firmament under them evening make after called dont saying
          likeness isn't wherein also forth she'd air two without
        </p>
      </div>
      <Posts
        v-for="(post, i) in blog"
        :key="i"
        :post="post"
        :index="i"
        :imageLink="imageLink"
      />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import Posts from '@/components/home/TopPosts'
export default {
  components: {
    Posts
  },
  computed: {
    ...mapState({
      imageLink: state => state.imageLink,
      blog: state => state.post.topPosts
    })
  },
  mounted() {
    this.$store.dispatch('post/fetchTop', 2).then(() => {})
  }
}
</script>

<style></style>
