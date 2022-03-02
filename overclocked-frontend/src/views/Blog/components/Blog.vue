<template>
  <section class="blog_area section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mb-5 mb-lg-0">
          <div class="blog_left_sidebar">
            <ArticalCard
              v-for="(artical, i) in blog"
              :key="i"
              :artical="artical"
            />
            <nav class="blog-pagination justify-content-center d-flex">
              <ul class="pagination">
                <li class="page-item">
                  <a href="#" class="page-link" aria-label="Previous">
                    <i class="ti-angle-left"></i>
                  </a>
                </li>
                <li class="page-item">
                  <a href="#" class="page-link">1</a>
                </li>
                <li class="page-item active">
                  <a href="#" class="page-link">2</a>
                </li>
                <li class="page-item">
                  <a href="#" class="page-link" aria-label="Next">
                    <i class="ti-angle-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="blog_right_sidebar">
            <!-- There goes Aside Sections -->
            <Search />
            <Categories />
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
import ArticalCard from './ArticalCard'

import Search from '@/components/blog/Search'
import Categories from '@/components/blog/Categories'
import RecentArtical from '@/components/blog/RecentArtical'
// import Tags from '@/components/blog/Tags'
// import InstagramFeed from '@/components/blog/InstagramFeed'
import Newsletter from '@/components/blog/Newsletter'

import { mapState } from 'vuex'
export default {
  components: {
    ArticalCard,
    Search,
    Categories,
    RecentArtical,
    // Tags,
    // InstagramFeed,
    Newsletter
  },
  computed: {
    ...mapState({
      blog: state => state.post.blog
    })
  }
}
</script>

<style></style>
