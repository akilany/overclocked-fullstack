<template>
  <div class="row" :dir="(index + 1) % 2 === 0 ? 'rtl' : ''">
    <div
      class="col-md-8"
      :style="
        `background: url(${imageLink}/blog/${post.image}) center center/cover`
      "
    >
      <div class="bg"></div>
      <div class="news1">
        <p>
          <span class="highlight">{{ post.topic }}</span> |
          {{ post.createdAt | date }}
        </p>
        <router-link :to="{ name: '' }">
          <h3>{{ post.title }}</h3>
        </router-link>
        <router-link :to="{}" class="btn btn-outline-light">
          Read More
        </router-link>
      </div>
    </div>
    <div class="col-md-4 py-0">
      <div class="card">
        <div class="card-img">
          <img :src="`${imageLink}/blog/${post.image}`" alt="" />
        </div>
        <div class="card-body">
          <p>
            <span class="highlight">{{ post.topic }}</span> |
            {{ post.createdAt | date }}
          </p>
          <router-link :to="{ name: '' }">
            <h3>{{ post.title }}</h3>
          </router-link>
          <router-link :to="{}" class="btn btn-outline-dark">
            Read More
          </router-link>
        </div>
      </div>
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
    index: Number,
    imageLink: String
  }
}
</script>

<style></style>
