<template>
  <div class="card">
    <a :href="member.social" target="_blank">
      <div
        class="card-img"
        :style="
          `background: url(${imageLink}/team/${member.image}) center center/cover`
        "
      >
        <div class="bg"></div>
        <i class="fab fa-instagram"></i>
      </div>
    </a>
    <div class="card-body">
      <h2>{{ member.name }}</h2>
      <p>{{ member.title }}, OverClocked</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    member: {
      type: Object,
      required: true
    },
    imageLink: String
  }
}
</script>

<style></style>
