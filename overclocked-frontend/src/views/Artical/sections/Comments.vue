<template>
  <div class="comments-area">
    <h4>{{ comments.length }} Comments</h4>
    <div class="comment-list" v-for="(comment, i) in comments" :key="i">
      <CommentCard :comment="comment" :imageLink="imageLink" />
    </div>
  </div>
</template>

<script>
import CommentCard from '../../../components/blog/CommentCard.vue'
export default {
  components: {
    CommentCard
  },
  props: {
    imageLink: String,
    comments: Array
  }
}
</script>

<style></style>
