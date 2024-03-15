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
        <h1 class="text-warning">PORTFOLIO</h1>
        <h3 class="text-white">MY RECENT WORK</h3>
      </div>
    </div>
    <Carousel v-bind="settings" :breakpoints="breakpoints">
      <Slide v-for="project in projects" :key="project">
        <div class="carousel__item d-flex flex-column my-card mt-2">
          <div class="top mb-3">
            <img
              class="blog-article img-fluid"
              style="overflow: hidden; max-width: 100%; border-radius: 10px"
              :src="project.image"
              alt="Image"
            />
          </div>
          <div class="bottom">
            <div class="blog-head mx-2 mt-3 text-start">
              <h6 class="text-warning" style="font-size: 65%">
                {{ project.category }}
              </h6>
            </div>
            <div class="blog-article text-start mx-2" style="overflow: hidden">
              <p class="text-justify" style="font-size: 60%">
                {{ project.description }}
              </p>
            </div>
            <div class="tags text-start mx-2 mb-4">
              <span
                class="badge bg-transparent mx-1 fs-val"
                v-for="tag in project.tags"
                :key="tag"
                >{{ tag }}</span
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
import fly from "../assets/image/portfolio/fly1.85d4f0d6.png";
import gents from "../assets/image/portfolio/Gents-Glamor.f6c42b83.png";
import fresh from "../assets/image/portfolio/Refresh-Professional-Painting-Service.ff186da4.png";
import commerce from "../assets/image/portfolio/006.png";
import pixel from "../assets/image/portfolio/pexels-tranmautritam-69432.jpg";
import pixel2 from "../assets/image/portfolio/image26-768x426-1.png";
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "BreakPints",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  methods: {
    particlesLoaded() {
      // console.log("Particles container loaded", container);
    },
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
    projects: [
      {
        id: 1,
        image: pixel,
        category: "Task Management Dashboard",
        description:
          "Developed a task management dashboard for a remote team. Implemented features like task assignment, progress tracking, and team collaboration tools.",
        tags: ["#task", "#management"],
      },
      {
        id: 2,
        image: pixel2,
        category: "Property Rental App",
        description:
          " Created a mobile-responsive property rental application for a real estate agency. Implemented property listing with advanced search filters, integrated online booking and payment systems, and a review system.",
        tags: ["#Property", "#Rental", "#App"],
      },
      {
        id: 3,
        image: commerce,
        category: "E-Commerce Website",
        description:
          " Developed a responsive e-commerce platform for a fashion retail brand. Implemented secure payment gateways, user-friendly product filtering, and inventory management system.",
        tags: ["#e-commerce", "#marketplace"],
      },
      {
        id: 4,
        image: fresh,
        category: "Refresh Painting",
        description:
          " User can take different services as their need, track status of their taken services, see all order history, pay online through credit card. Admin can add new service and delete service that no longer available.",
        tags: ["#react", "#nodeJS", "#expressJS"],
      },
      {
        id: 5,
        image: gents,
        category: "Gents Glamor",
        description:
          " Calling Cabs is a react app where you can find various types of transport system. We provide services of Family tour, Emergency transport, Goods transportation on reasonable price. This app is easy to use.",
        tags: ["#React.js", "#NodeJS", "#ExpressJS"],
      },
      {
        id: 6,
        image: fly,
        category: "Discover Fly",
        description:
          " User can buy his/her flight tickets. Here some input field like Flying From, Flying To, Departure Date, Return Date(optional), Number of First Class & Economy Class Tickets etc. Than calculate price with vat/tax.",
        tags: ["#HTML", "#CSS", "#Bootstrap", "#JavaScript"],
      },
    ],
  }),
});
</script>

<style scoped>
.top img {
  width: 300px !important;
  height: 160px !important;
}
</style>
