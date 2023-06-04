<template>
  <div class="container my-5 text-white">
    <div class="row d-flex justify-content-around">
      <div class="col-md-12 text-right text-white">
        <h1 class="text-warning">Blogs</h1>
        <h1 class="text-white">TECH INSIGHT</h1>
      </div>
    </div>
    <Carousel v-bind="settings" :breakpoints="breakpoints">
      <Slide v-for="blog in blogs" :key="blog">
        <div class="carousel__item d-flex flex-column my-card mt-5">
          <div class="top mb-3">
            <img
              class="blog-article"
              style="overflow: hidden; max-width: 100%; border-radius: 10px"
              :src="blog.image"
              alt="Image"
            />
          </div>
          <div class="bottom">
            <div class="blog-head mx-2 mt-3 text-start">
              <h6 class="text-warning" style="font-size: 65%">
                {{ blog.category }}
              </h6>
            </div>
            <div class="blog-article text-start mx-2" style="overflow: hidden">
              <p class="text-justify" style="font-size: 60%">
                {{ blog.description }}
              </p>
            </div>
            <div class="tags text-start mx-2 mb-4">
              <span class="badge bg-transparent mx-1 fs-val text-warning"
                >2 May 2023</span
              >
            </div>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "BreakPoints",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      400: {
        itemsToShow: 1.5,
        snapAlign: "center",
      },
      700: {
        itemsToShow: 2.5,
        snapAlign: "center",
      },
      800: {
        itemsToShow: 2.5,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 4,
        snapAlign: "start",
      },
    },
    blogs: [
      {
        id: 1,
        image:
          "https://cdn.hashnode.com/res/hashnode/image/unsplash/-JzHSIzNYnU/upload/v1646955186227/y68UwulGf.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
        category: "Debouncing in Javascript.",
        description:
          "While designing web applications, we need to optimize for certain scenarios, where we don't want to...",
        tags: ["#js", "#JavaScript"],
      },
      {
        id: 2,
        image:
          "https://cdn.hashnode.com/res/hashnode/image/unsplash/3oyeaivM_fE/upload/v1646922424716/HKxG0vcU9r.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
        category: "How to make your Javascript Functions sleep?",
        description:
          "We may encounter some scenarios where we have to pause the execution of a function for some fixed am...",
        tags: ["#Functions", "#Javascript"],
      },
      {
        id: 3,
        image:
          "https://cdn.hashnode.com/res/hashnode/image/unsplash/9AxFJaNySB8/upload/v1646489177564/dK8GXDM3T.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
        category: "Pipe and compose in Javascript",
        description:
          "pipe() and compose() in Javascript Pipe and Compose are Higer Order Functions. These are ways of ch...",
        tags: ["#pipe", "#js"],
      },
      {
        id: 4,
        image:
          "https://cdn.hashnode.com/res/hashnode/image/upload/v1633086447615/A4pTrNzPT.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
        category:
          "Find out how many times a function has been invoked. | Frontend Interview Question",
        description:
          "Question: We've the following function greet, we need to find out how many times this function has b...",
        tags: ["quod", "placeat", "mollamus", "com"],
      },
      {
        id: 5,
        image:
          "https://cdn.hashnode.com/res/hashnode/image/unsplash/phIFdC6lA4E/upload/v1646726648188/tf64eqSdC.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
        category: "What are CSS-Variables?",
        description:
          "Overview and History Initially CSS lacked support for native variables, which led developers turn t...",
        tags: ["#css", "#variable"],
      },
    ],
  }),
});
</script>

<style scoped>
.fs-val {
  font-size: 50%;
}
@media screen and (max-width: 700px) {
  .container {
    margin-top: -10px !important;
  }
}
</style>
