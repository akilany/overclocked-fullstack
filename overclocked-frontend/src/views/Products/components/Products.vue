<template>
  <section id="price">
    <div class="container">
      <h1 class="text-uppercase">Choose Your Platform</h1>
      <p>
        Life firmament under them evening make after called dont saying<br />
        likeness isn't wherein also forth she'd air two without
      </p>
      <div class="row">
        <div class="col-md-4" v-for="(product, i) in products" :key="i">
          <TopProductCard :product="product" :imageLink="imageLink" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import TopProductCard from './TopProductCard'
export default {
  components: {
    TopProductCard
  },
  computed: {
    ...mapState({
      imageLink: state => state.imageLink,
      products: state => state.product.products
    })
  }
}
</script>

<style></style>
