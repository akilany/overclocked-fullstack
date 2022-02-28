<template>
  <article class="blog_item">
    <div class="blog_item_img">
      <img
        class="card-img rounded-0"
        src="../../../assets/images/bg1.jpg"
        style="height: 320px; object-fit: cover;"
      />
      <a href="#" class="blog_item_date">
        <h3>15</h3>
        <p>Jan</p>
      </a>
    </div>
    <div class="blog_details">
      <router-link
        :to="{
          name: 'Artical',
          params: { slug: 'google-inks-pact-for-new-35-storey-office' }
        }"
        class="d-inline-block"
      >
        <h2 class="blog-head" style="color: #2d2d2d;">
          Google inks pact for new 35-storey office
        </h2>
      </router-link>
      <p>
        That dominion stars lights dominion divide years for fourth have don't
        stars is that he earth it first without heaven in place seed it second
        morning saying.
      </p>
      <ul class="blog-info-link">
        <li>
          <a href="#"><i class="fa fa-user"></i> Travel, Lifestyle</a>
        </li>
        <li>
          <a href="#"><i class="fa fa-comments"></i> 03 Comments</a>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
export default {}
</script>

<style></style>
