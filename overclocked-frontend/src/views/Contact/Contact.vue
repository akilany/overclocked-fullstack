<template>
  <section id="contact">
    <Map />
    <div class="container">
      <div class="text-left">
        <h1 class="text-uppercase">Get In Touch</h1>
      </div>
      <div class="row">
        <div class="col-md-8">
          <ContactForm />
        </div>

        <div class="col-md-4">
          <ContactInfo />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Map from './sections/Map'
import ContactForm from './sections/ContactForm'
import ContactInfo from './sections/ContactInfo'
export default {
  components: {
    Map,
    ContactForm,
    ContactInfo
  }
}
</script>

<style></style>
