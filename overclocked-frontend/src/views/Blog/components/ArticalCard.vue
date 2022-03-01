<template>
  <article class="blog_item">
    <div class="blog_item_img">
      <img
        class="card-img rounded-0"
        :src="`${imageLink}/blog/${post.image}`"
        style="height: 320px; object-fit: cover;"
      />
      <div class="blog_item_date" style="text-align: center">
        <h3>{{ day }}</h3>
        <p>{{ month }}</p>
      </div>
    </div>
    <div class="blog_details">
      <router-link
        :to="{
          name: 'Artical',
          params: { id: post.id }
        }"
        class="d-inline-block"
      >
        <h2 class="blog-head" style="color: #2d2d2d;">
          {{ post.title }}
        </h2>
      </router-link>
      <p>
        {{ post.description }}
      </p>
      <ul class="blog-info-link">
        <li>
          <router-link :to="{}"
            ><i class="fa fa-user"></i> {{ post.topic }}</router-link
          >
        </li>
        <li>
          <router-link :to="{}"
            ><i class="fa fa-comments"></i>
            {{ comments.length }} Comments</router-link
          >
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    artical: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      post: {},
      day: Number,
      month: String
    }
  },
  computed: {
    ...mapState({
      imageLink: state => state.imageLink,
      comments: state => state.post.comments
    })
  },
  created() {
    this.post = this.artical
    const monthArr = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    const date = new Date(this.post.createdAt)
    this.day = date.getDay()
    this.month = monthArr[date.getMonth()].slice(0, 3)
  },
  mounted() {
    this.$store.dispatch('post/fetchComments', this.post.id)
  }
}
</script>

<style></style>
