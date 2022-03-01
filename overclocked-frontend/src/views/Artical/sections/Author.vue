<template>
  <div class="blog-author">
    <div class="media align-items-center">
      <img
        :src="`${imageLink}/users/${publisher.photo}`"
        :alt="`${publisher.name}`"
      />
      <div class="media-body">
        <h4 class="mb-0">{{ publisher.name }}</h4>
        <p>Author</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true
    },
    imageLink: String
  },
  data() {
    return {
      publisher: ''
    }
  },
  mounted() {
    this.publisher = this.author
  }
}
</script>

<style></style>
