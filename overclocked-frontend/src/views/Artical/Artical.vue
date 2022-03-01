<template>
  <section class="blog_area single-post-area section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 posts-list">
          <Post :post="post" :imageLink="imageLink" />
          <!-- <PostNavigation /> -->
          <Author :imageLink="imageLink" :author="post.publisher" />
          <Comments :imageLink="imageLink" :comments="post.comments" />
          <LeaveComment />
        </div>
        <div class="col-lg-4">
          <div class="blog_right_sidebar">
            <!-- There goes Aside Sections -->
            <Search />
            <!-- <Categories /> -->
            <RecentArtical />
            <!-- <Tags /> -->
            <!-- <InstagramFeed /> -->
            <Newsletter />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

import Post from './sections/Post'
// import PostNavigation from './sections/PostNavigation'
import Author from './sections/Author'
import Comments from './sections/Comments'
import LeaveComment from './sections/LeaveComment'

import Search from '@/components/blog/Search'
// import Categories from '@/components/blog/Categories'
import RecentArtical from '@/components/blog/RecentArtical'
// import Tags from '@/components/blog/Tags'
// import InstagramFeed from '@/components/blog/InstagramFeed'
import Newsletter from '@/components/blog/Newsletter'
export default {
  components: {
    Post,
    // PostNavigation,
    Author,
    Comments,
    LeaveComment,
    Search,
    // Categories,
    RecentArtical,
    // Tags,
    // InstagramFeed,
    Newsletter
  },
  computed: {
    ...mapState({
      imageLink: state => state.imageLink,
      post: state => state.post.post
    })
  }
}
</script>

<style></style>
