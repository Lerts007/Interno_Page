<template>
  <Header />
  <div class="errorPage content">
    <div class="errorPage-info">
      <h1>404</h1>
      <p>We are sorry, but the page you requested was not found</p>
      <button class="errorPage-info__btn">
        <router-link to="/">
          Bar To Home
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
          >
            <path
              d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
              stroke="#CDA274"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </router-link>
      </button>
    </div>
    <div class="errorPage-img">
      <img :src="imgError" alt="Изображение" />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "404",
  components: {
    Header,
  },
  data() {
    return {
      imgError: require("@/assets/img/errorPage/img_1.jpg"),
    };
  },
};
</script>

<style lang="scss"></style>
