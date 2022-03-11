<template>
  <main class="products-index">
    <Navbar />
    <Banner :link="{ name: 'Products' }">
      <template slot="title">Products</template>
    </Banner>
    <Products />
    <Footer />
  </main>
</template>

<script>
import Products from './components/Products'
export default {
  metaInfo: {
    title: 'Products'
  },
  components: {
    Products
  }
}
</script>

<style></style>
