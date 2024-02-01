<template>
  <div class="blog-card">
    <div class="blog-card-img">
      <img :src="blog.img" alt="photo" />
      <div class="blog-card-img-title">{{ blog.titleImg }}</div>
    </div>
    <div class="blog-card-info">
      <h3 class="blog-card-title">{{ blog.title }}</h3>
      <div class="blog-card-DateAndBtn">
        <p class="blog-card__date">{{ blog.data }}</p>
        <Btn />
      </div>
    </div>
  </div>
</template>

<script>
import Btn from "../UI/button/Btn.vue";

export default {
  props: {
    blog: Object,
  },
  components: { Btn },
};
</script>

<style lang="scss" scoped>
@use "./CardProduct.scss" as *;
</style>
