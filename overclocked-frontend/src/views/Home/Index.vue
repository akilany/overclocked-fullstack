<template>
  <main class="home-index">
    <Navbar />
    <Home />
    <Footer />
  </main>
</template>

<script>
import Home from './Home'
export default {
  metaInfo: {
    title: 'OverClocked - Your Way To Build Your Dream PC',
    // override the parent template and just use the above title only
    titleTemplate: null,
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content: `Whether you love first-person shooters or hunting for treasure in pixelated paradises, there are times when you’ve wanted a little more from your gaming experience. Maybe you want to experience your virtual worlds in higher definition, or you’re curious about exactly what makes your computer run the way it does.`
      },
      {
        name: 'keywords',
        content:
          'pc, personal computer, over clocked, overclocked, over-clocked, games, computer, laptop, workstation'
      }
    ]
  },
  components: {
    Home
  }
}
</script>

<style></style>
