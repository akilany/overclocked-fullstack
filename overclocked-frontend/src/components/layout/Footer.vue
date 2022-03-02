<template>
  <section id="footer">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <router-link :to="{ name: 'Home' }" class="footer-heading">
            <h1><span class="highlight">Over</span>Clocked</h1>
          </router-link>
          <a href="mailto:ammyass2@gmail.com">
            <i class="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <h3>About Us</h3>
          <p>
            <router-link :to="{ name: 'Home' }">OverClocked</router-link>
            was founded with two simple goals in mind. It is to provide our
            users with both personalized cutting edge technology and an
            extensive range of technological support.
          </p>
        </div>
        <div class="col-md-6">
          <h3>Newsletter</h3>
          <p>Stay updated with our latest News</p>
          <div class="input-group mb-3">
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              name="email"
              aria-describedby="button-addon1"
            />
            <div class="input-group-prepend">
              <button
                class="btn btn-outline-light"
                type="button"
                id="button-addon1"
              >
                <i class="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="row bottom-footer">
        <div class="col-9 text-left">
          <p>
            Copyright &copy; 2019 All rights reserved |
            <a href="https://www.facebook.com/AmmarKilany/" target="_blank"
              >akkilany</a
            >
          </p>
        </div>
        <div class="col-3 text-right">
          <a href="https://www.facebook.com/AmmarKilany" target="_blank"
            ><i class="fab fa-facebook-f"></i
          ></a>
          <a href="https://twitter.com/akkilane" target="_blank"
            ><i class="fab fa-twitter"></i
          ></a>
          <a href="https://www.instagram.com/akkilany/" target="_blank"
            ><i class="fab fa-instagram"></i
          ></a>
          <a
            href="https://www.linkedin.com/in/ammar-yasser-37199718a/"
            target="_blank"
            ><i class="fab fa-linkedin-in"></i
          ></a>
          <a
            href="https://api.whatsapp.com/send?phone=+201147965841"
            target="_blank"
            ><i class="fab fa-whatsapp"></i
          ></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
