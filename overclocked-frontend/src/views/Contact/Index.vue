<template>
  <main class="contact-index">
    <Navbar />
    <Banner :link="{ name: 'Contact' }">
      <template slot="title">Contact</template>
    </Banner>
    <Contact />
    <Footer />
  </main>
</template>

<script>
import Contact from './Contact'
export default {
  components: {
    Contact
  }
}
</script>

<style></style>
