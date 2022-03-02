<template>
  <aside class="single_sidebar_widget search_widget">
    <form action="#">
      <div class="form-group">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search Keyword"
            onfocus="this.placeholder = ''"
            onblur="this.placeholder = 'Search Keyword'"
          />
        </div>
      </div>
      <button
        class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
        type="submit"
      >
        Search
      </button>
    </form>
  </aside>
</template>

<script>
export default {}
</script>

<style></style>
