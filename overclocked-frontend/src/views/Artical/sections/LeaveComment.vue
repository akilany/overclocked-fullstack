<template>
  <div class="comment-form">
    <h4>Leave a Comment</h4>
    <form
      class="form-contact comment_form"
      @submit.prevent="addComment"
      id="commentForm"
    >
      <div class="row">
        <div class="col-12">
          <div class="form-group">
            <textarea
              class="form-control w-100"
              name="comment"
              id="comment"
              cols="30"
              rows="9"
              placeholder="Write Comment"
              v-model="comment.comment"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="form-group">
        <button type="submit" class="button button-contactForm btn_1 boxed-btn">
          Post Comment
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comment: {
        comment: ''
      }
    }
  },
  methods: {
    addComment() {
      this.$store.dispatch('post/postComment', {
        id: this.$route.params.id,
        comment: this.comment
      })
      this.comment.comment = ''
    }
  }
}
</script>

<style></style>
