<template>
  <vue-particles
    id="tsparticles"
    @particles-loaded="particlesLoaded"
    :options="{
      background: {
        color: {
          value: 'transparent',
        },
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'grab',
            parallax: {
              enable: true,
              force: 60,
              smooth: 100,
            },
          },
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            mix: false,
            opacity: 0.8,
            size: 40,
          },
          grab: {
            distance: 400,
            links: {
              blink: false,
              consent: false,
              opacity: 1,
            },
          },
          push: {
            quantity: 4,
          },
          remove: {
            quantity: 2,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: ease - out - quad,
          },
        },
      },
      particles: {
        color: {
          value: '#ffffff',
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: 'bounce',
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 220,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'square',
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }"
  />

  <div
    class="container mt-2 text-white animate-class"
    :class="animationClass"
    @click="toggleAnimation"
  >
    <div class="row d-flex justify-content-around">
      <div class="col-md-12 text-right text-white">
        <h1 class="text-warning">Blogs</h1>
        <h1 class="text-white">TECH INSIGHT</h1>
      </div>
    </div>

    <Carousel v-bind="settings" :breakpoints="breakpoints" infinite>
      <Slide v-for="blog in blogs" :key="blog.id">
        <div class="carousel__item d-flex flex-column my-card mt-2">
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
                {{ blog.name }}
              </h6>
            </div>
            <div class="blog-article text-start mx-2" style="overflow: hidden">
              <p class="text-justify" style="font-size: 60%">
                {{ blog.description }}
              </p>
            </div>
            <div class="row tags text-start mx-2 mb-4">
              <div
                class="col badge bg-transparent fs-val text-warning mt-2 me-auto"
              >
                2 May 2023
              </div>
              <!-- individual Modal button-->
              <!-- <div class="col badge fs-val text-info">
                    <BlogModal :blogData="blog" />
                  </div> -->
              <div class="col text-right">
                <button
                  @click="openModal(blog)"
                  class="btn btn-sm btn-outline-warning text-danger text-right"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
    <BlogModal
      :blogData="selectedBlog"
      @close="closeModal"
      v-if="selectedBlog"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import BlogModal from "../components/BlogModal.vue";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "BreakPoints",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    BlogModal,
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
    selectedBlog: null,
    blogs: [
      {
        id: 1,
        image:
          "https://cdn.hashnode.com/res/hashnode/image/unsplash/-JzHSIzNYnU/upload/v1646955186227/y68UwulGf.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
        name: "Debouncing in Javascript.",
        description:
          "While designing web applications, we need to optimize for certain scenarios, where we don't want to...",
        fullDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?",
        tags: ["#js", "#JavaScript"],
      },
      {
        id: 2,
        image:
          "https://cdn.hashnode.com/res/hashnode/image/unsplash/3oyeaivM_fE/upload/v1646922424716/HKxG0vcU9r.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
        name: "How to make your Javascript Functions sleep?",
        description:
          "We may encounter some scenarios where we have to pause the execution of a function for some fixed am...",
        fullDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?",
        tags: ["#Functions", "#Javascript"],
      },
      {
        id: 3,
        image:
          "https://cdn.hashnode.com/res/hashnode/image/unsplash/9AxFJaNySB8/upload/v1646489177564/dK8GXDM3T.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
        name: "Pipe and compose in Javascript",
        description:
          "pipe() and compose() in Javascript Pipe and Compose are Higer Order Functions. These are ways of ch...",
        fullDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?",
        tags: ["#pipe", "#js"],
      },
      {
        id: 4,
        image:
          "https://cdn.hashnode.com/res/hashnode/image/upload/v1633086447615/A4pTrNzPT.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
        name: "Find out how many times a function has been invoked. | Frontend Interview Question",
        description:
          "Question: We've the following function greet, we need to find out how many times this function has b...",
        fullDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?",
        tags: ["quod", "placeat", "mollamus", "com"],
      },
      {
        id: 5,
        image:
          "https://cdn.hashnode.com/res/hashnode/image/unsplash/phIFdC6lA4E/upload/v1646726648188/tf64eqSdC.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
        name: "What are CSS-Variables?",
        description:
          "Overview and History Initially CSS lacked support for native variables, which led developers turn t...",
        fullDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam at asperiores perferendis nesciunt minus iusto eveniet, odit voluptatem, est ipsa esse ullam! Eum voluptatem esse explicabo, asperiores ex aperiam?",
        tags: ["#css", "#variable"],
      },
    ],
  }),
  methods: {
    particlesLoaded() {
      // console.log("Particles container loaded", container);
    },
    openModal(blog) {
      this.selectedBlog = blog;
    },
  },
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


// In progress