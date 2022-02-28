<template>
  <section id="slider">
    <div class="space">
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <carousel
      :perPage="3"
      :autoplayTimeout="3000"
      autoplay
      :navigationEnabled="false"
      :paginationEnabled="false"
    >
      <slide>
        <div class="item">
          <div class="img-container">
            <img src="../../../assets/images/laptop1.jpg" style="width: 100%" />
          </div>
        </div>
      </slide>
      <slide>
        <div class="item">
          <div class="img-container">
            <img src="../../../assets/images/laptop2.jpg" style="width: 100%" />
          </div>
        </div>
      </slide>
      <slide>
        <div class="item">
          <div class="img-container">
            <img src="../../../assets/images/laptop3.jpg" style="width: 100%" />
          </div>
        </div>
      </slide>
      <slide>
        <div class="item">
          <div class="img-container">
            <img src="../../../assets/images/laptop4.jpg" style="width: 100%" />
          </div>
        </div>
      </slide>
    </carousel>
  </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Carousel,
    Slide
  }
}
</script>

<style></style>
