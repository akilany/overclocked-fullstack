<template>
  <div class="single-comment justify-content-between d-flex">
    <div class="user justify-content-between d-flex">
      <div class="thumb">
        <img
          :src="`${imageLink}/users/${userImage}`"
          :alt="comment.user.name"
        />
      </div>
      <div class="desc">
        <p class="comment">
          {{ comment.comment }}
        </p>
        <div class="d-flex justify-content-between">
          <div class="d-flex align-items-center">
            <h5>
              {{ comment.user.name }}
            </h5>
            <p class="date">{{ dateFormatter(comment.createdAt) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dateFormatter from '@/filters/date.js'
export default {
  props: {
    comment: {
      type: Object,
      required: true
    },
    imageLink: String
  },
  data() {
    return {
      userImage: '',
      dateFormatter
    }
  },
  created() {
    this.userImage = this.comment.user.photo
  }
}
</script>

<style></style>
