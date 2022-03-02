<template>
  <div class="single-post">
    <div class="feature-img">
      <img
        :src="`${imageLink}/blog/${post.image}`"
        style="height: 320px; object-fit: cover; width: 100%"
      />
    </div>
    <div class="blog_details">
      <h2 style="color: #2d2d2d;">
        {{ post.title }}
      </h2>
      <ul class="blog-info-link mt-3 mb-4 pl-0">
        <li>
          <a><i class="fa fa-user"></i> {{ post.topic }}</a>
        </li>
        <li>
          <a
            ><i class="fa fa-comments"></i> {{ post.comments.length }} Comments
          </a>
        </li>
      </ul>
      <p class="excert">
        {{ post.description }}
      </p>
      <p>
        MCSE boot camps have its supporters and its detractors. Some people do
        not understand why you should have to spend money on boot camp when you
        can get the MCSE study materials yourself at a fraction of the camp
        price. However, who has the willpower to actually sit through a
        self-imposed MCSE training. who has the willpower to actually
      </p>
      <div class="quote-wrapper">
        <div class="quotes">
          MCSE boot camps have its supporters and its detractors. Some people do
          not understand why you should have to spend money on boot camp when
          you can get the MCSE study materials yourself at a fraction of the
          camp price. However, who has the willpower to actually sit through a
          self-imposed MCSE training.
        </div>
      </div>
      <p>
        MCSE boot camps have its supporters and its detractors. Some people do
        not understand why you should have to spend money on boot camp when you
        can get the MCSE study materials yourself at a fraction of the camp
        price. However, who has the willpower
      </p>
      <p>
        MCSE boot camps have its supporters and its detractors. Some people do
        not understand why you should have to spend money on boot camp when you
        can get the MCSE study materials yourself at a fraction of the camp
        price. However, who has the willpower to actually sit through a
        self-imposed MCSE training. who has the willpower to actually
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    },
    imageLink: String
  }
}
</script>

<style></style>
