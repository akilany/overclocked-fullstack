<template>
  <main class="error-page">
    <v-card class="mx-auto my-5 text-center" flat max-width="500">
      <h1>404</h1>
      <h2>Oops!</h2>
      <h3>The page you're looking for doesn't exist :(</h3>
      <v-btn outlined color="main darken-1" class="mt-4" :to="{ name: 'Home' }"
        >Back to the home page</v-btn
      >
    </v-card>
  </main>
</template>

<script>
export default {
  name: 'NotFound',
  metaInfo: {
    title: 'Not Found'
  }
}
</script>

<style lang="scss">
.error-page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-weight: bolder;
    font-size: 11.5rem;
    opacity: 0.8;
  }

  h2 {
    font-size: 3rem;
  }
}
</style>
