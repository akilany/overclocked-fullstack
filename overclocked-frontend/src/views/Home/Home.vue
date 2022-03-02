<template>
  <section id="home">
    <div class="top-showcase">
      <Showcase />
      <Start />
    </div>
    <Gallery />
    <Services />
    <Features />
    <Blog />
    <Components />
    <ImageSection :imageClass="'img-section-1'" />
    <Team />
    <ImageSection :imageClass="'img-section-2'" />
    <Brands />
  </section>
</template>

<script>
import Showcase from './sections/Showcase'
import Start from './sections/Start'
import Gallery from './sections/Gallery'
import Services from './sections/Services'
import Features from './sections/Features'
import Blog from './sections/Blog'
import Components from './sections/Components'
import ImageSection from './sections/ImageSection'
import Team from './sections/Team'
import Brands from './sections/Brands'
export default {
  components: {
    Showcase,
    Start,
    Gallery,
    Services,
    Features,
    Blog,
    Components,
    ImageSection,
    Team,
    Brands
  }
}
</script>

<style></style>
