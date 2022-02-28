<template>
  <div class="card">
    <div class="card-img">
      <img
        :src="`${imageLink}/products/${product.imageCover}`"
        :alt="product.name"
      />
    </div>
    <div class="card-body text-center">
      <h3 class="highlight">{{ product.name }}</h3>
      <p class="lead"><span>Starts at</span> ${{ product.price }}</p>
      <ul class="list-items">
        <li class="item">{{ product.specs.cpu }}</li>
        <li class="item">{{ product.specs.gpu }}</li>
        <li class="item">{{ product.specs.ram }}</li>
        <li class="item">{{ product.specs.storage }}</li>
      </ul>
      <v-btn
        tile
        outlined
        large
        color="main"
        dark
        :loading="loading"
        class="mt-2"
      >
        Select
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    },
    imageLink: String
  },
  data() {
    return {
      loading: false
    }
  }
}
</script>

<style></style>
