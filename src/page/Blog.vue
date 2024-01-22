<template>
  <Header />
  <main>
    <!-- BANER -->
    <section class="main-header">
      <img class="main-header__baner" :src="Baner" alt="baner" />
      <div class="main-header-title">
        <h2 class="main-header-title__title">Articles & News</h2>
        <p class="adressPage">Home / Blog</p>
      </div>
    </section>
    <!-- Latest Post -->
    <section class="latestPost">
      <div class="latestPost-content content">
        <h3 class="latestPost__h3">Latest Post</h3>
        <div class="latestPost-block">
          <div class="latestPost-block-img">
            <img :src="LatestPost" alt="Latest Post" />
          </div>
          <div class="latestPost-block-text">
            <h5 class="latestPost-block-text__title">
              Low Cost Latest Invented Interior Designing Ideas
            </h5>
            <p class="latestPost-block-text__p">
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
              dignissim maximus.posuere in.Contrary to popular belief.
              <br />
              <br />
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classica.
            </p>
            <div class="latestPost-block-text-DateAndBtn">
              <p class="latestPost-block-text-DateAndBtn__data">
                26 December, 2022
              </p>
              <button class="blog-card__btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="53"
                  viewBox="0 0 52 53"
                  fill="none"
                >
                  <circle cx="26" cy="26.5" r="26" fill="#F4F0EC" />
                  <path
                    d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141"
                    stroke="#292F36"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Articles & News -->
    <section id="articlesNews" class="articlesNews">
      <div class="articlesNews-content content">
        <h3 class="latestPost__h3">Articles & News</h3>
        <div class="articlesNews-main-card">
          <div
            v-for="blog in articlesNewsBlogs"
            :key="blog.id"
            class="blog-card"
          >
            <div class="blog-card-img">
              <img :src="blog.img" alt="photo" />
              <div class="blog-card-img-title">{{ blog.titleImg }}</div>
            </div>
            <div class="blog-card-info">
              <h3 class="blog-card-title">{{ blog.title }}</h3>
              <div class="blog-card-DateAndBtn">
                <p class="blog-card__date">{{ blog.data }}</p>
                <button class="blog-card__btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="53"
                    viewBox="0 0 52 53"
                    fill="none"
                  >
                    <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                    <path
                      d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813"
                      stroke="#292F36"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="articlesNews-btnPage">
          <button class="btnPage active">01</button>
          <button class="btnPage">02</button>
          <button class="btnPage">03</button>
          <button class="btnPageNext">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="53"
              height="52"
              viewBox="0 0 53 52"
              fill="none"
            >
              <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
              <path
                d="M23.5571 32L29.5 25.3143L23.5571 18.6286"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  </main>
  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Blog",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      Baner: require("@/assets/img/Blog/Baner.png"),
      LatestPost: require("@/assets/img/Blog/LatestPost.png"),
      articlesNewsBlogs: [
        {
          id: 1,
          img: require("@/assets/img/Blog/imgBlog_1.png"),
          titleImg: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction Work",
          data: "26 December,2022",
        },
        {
          id: 2,
          img: require("@/assets/img/Blog/imgBlog_2.png"),
          titleImg: "Living Design",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          data: "22 December,2022",
        },
        {
          id: 3,
          img: require("@/assets/img/Blog/imgBlog_3.png"),
          titleImg: "Interior Design",
          title: "Best For Any Office & Business Interior Solution",
          data: "25 December,2022",
        },
        {
          id: 4,
          img: require("@/assets/img/Blog/imgBlog_4.png"),
          titleImg: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction Work",
          data: "26 December,2022",
        },
        {
          id: 5,
          img: require("@/assets/img/Blog/imgBlog_5.png"),
          titleImg: "Living Design",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          data: "22 December,2022",
        },
        {
          id: 6,
          img: require("@/assets/img/Blog/imgBlog_6.png"),
          titleImg: "Interior Design",
          title: "Best For Any Office & Business Interior Solution",
          data: "25 December,2022",
        },
      ],
    };
  },
};
</script>
