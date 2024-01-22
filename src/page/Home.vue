<template>
  <Header />
  <main>
    <section class="baner content">
      <h2 class="baner__h2">Let Your Home<br />Be Unique</h2>
      <p class="baner__p">
        There are many variations of the passages of<br />
        lorem Ipsum fromavailable, majority.
      </p>
      <button class="baner__btn">
        Get Started
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
      </button>
    </section>
    <section class="project content">
      <div class="project-header">
        <h2 class="project-header__h2">Follow Our Projects</h2>
        <p class="project-header__p">
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
      </div>
      <div id="projectMain" class="project-main">
        <div
          v-for="projectCard in projectCards"
          :key="projectCard.id"
          class="project-main-card"
        >
          <div class="project-main-card-img">
            <img :src="projectCard.img" alt="img_1" />
          </div>
          <div class="project-main-card-text">
            <div class="project-main-card-text-info">
              <h2 class="project-main-card-text-info__h2">
                {{ projectCard.title }}
              </h2>
              <p class="project-main-card-text-info__p">
                {{ projectCard.text }}
              </p>
            </div>
            <button class="project-main-card-text__btn">
              <router-link to="/blog_details">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                  fill="none"
                >
                  <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                  <path
                    d="M32 44L40 35L32 26"
                    stroke="#292F36"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </router-link>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="counter">
      <div class="counter-content content">
        <div class="experiance counter-card">
          <p class="experiance__counter counter__num">12</p>
          <p class="experiance__text counter__text">Years Of Experiance</p>
        </div>
        <div class="successProject counter-card">
          <p class="successProject__counter counter__num">85</p>
          <p class="successProject__text counter__text">Success Project</p>
        </div>
        <div class="activeProject counter-card">
          <p class="activeProject__counter counter__num">15</p>
          <p class="activeProject__text counter__text">Active Project</p>
        </div>
        <div class="happyCustomers counter-card">
          <p class="happyCustomers__counter counter__num">95</p>
          <p class="happyCustomers__text counter__text">Happy Customers</p>
        </div>
      </div>
    </section>
    <section class="blog content">
      <div class="blog-header">
        <h2 class="blog-header__title">Articles & News</h2>
        <p class="blog-header__p">
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using.
        </p>
      </div>
      <div id="blogMain" class="blog-main">
        <div class="blog-main-card">
          <div
            v-for="blogCard in blogCards"
            :key="blogCard.id"
            class="blog-card"
          >
            <div class="blog-card-img">
              <img :src="blogCard.img" alt="photo" />
              <div class="blog-card-img-title">{{ blogCard.titleImg }}</div>
            </div>
            <div class="blog-card-info">
              <h3 class="blog-card-title">{{ blogCard.title }}</h3>
              <div class="blog-card-DateAndBtn">
                <p class="blog-card__date">{{ blogCard.data }}</p>
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
      </div>
    </section>
  </main>
  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
  },
  data: () => ({
    projectCards: [
      {
        id: 1,
        img: require("@/assets/img/sectionProject/img_1.png"),
        title: "Modern Kitchan",
        text: "Decor / Artchitecture",
      },
      {
        id: 2,
        img: require("@/assets/img/sectionProject/img_2.png"),
        title: "Modern Kitchan",
        text: "Decor / Artchitecture",
      },
      {
        id: 3,
        img: require("@/assets/img/sectionProject/img_3.png"),
        title: "Modern Kitchan",
        text: "Decor / Artchitecture",
      },
      {
        id: 4,
        img: require("@/assets/img/sectionProject/img_4.png"),
        title: "Modern Kitchan",
        text: "Decor / Artchitecture",
      },
    ],
    blogCards: [
      {
        id: 1,
        img: require("@/assets/img/sectionBlog/img_1.png"),
        titleImg: "Kitchan Design",
        title: "Let’s Get Solution For Building Construction Work",
        data: "26 December,2022",
      },
      {
        id: 2,
        img: require("@/assets/img/sectionBlog/img_2.png"),
        titleImg: "Living Design",
        title: "Low Cost Latest Invented Interior Designing Ideas",
        data: "22 December,20222",
      },
      {
        id: 3,
        img: require("@/assets/img/sectionBlog/img_3.png"),
        titleImg: "Interior Design",
        title: "Best For Any Office & Business Interior Solution",
        data: "25 December,2022",
      },
    ],
  }),
};
</script>
