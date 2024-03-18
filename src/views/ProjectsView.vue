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
    <Carousel v-bind="settings" :breakpoints="breakpoints" infinite>
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
          <div v-show="project.links" class="text-center w-100 bg-banger">
            <a href="" class="btn btn-sm btn-outline-warning text-info mb-2"
              >Project Url</a
            >
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
import fly from "../assets/image/portfolio/erp.jpg";
import others from "../assets/image/portfolio/github.jpg";
import gents from "../assets/image/portfolio/kkml.jpg";
import fresh from "../assets/image/portfolio/pro_man.jpg";
import ainsheba from "../assets/image/portfolio/ainsheba.jpg";
import commerce from "../assets/image/portfolio/e_pushti.jpg";
import pixel from "../assets/image/portfolio/shojon.jpg";
import pixel2 from "../assets/image/portfolio/brur.jpg";
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
        category: "E-commerce Website",
        description:
          "I actively contributed to a Laravel 6 project focused on developing a CMS-driven e-commerce platform. My role involved problem-solving and integrating new features to enhance the site's functionality. Additionally, I played a key part in implementing a RESTful API for seamless communication within the system. This experience highlights my proficiency in Laravel development and API integration within the e-commerce domain.",
        links: "https://shojonsl.com/",
        tags: ["#backend_development", "#problem_solving"],
      },
      {
        id: 2,
        image: pixel2,
        category: "Institutional Website",
        description:
          "I spearheaded both backend and frontend development for a dynamic website, demonstrating expertise in HTML, CSS, and Bootstrap to craft engaging user interfaces. Leveraging my proficiency in REST API and Laravel, I seamlessly integrated backend functionalities, ensuring smooth data flow and efficient operations. With MySQL, I optimized database management for enhanced performance and reliability. My versatile skill set and meticulous approach were instrumental in delivering a polished website that seamlessly blends aesthetics with functionality.",
        tags: ["educational", "web_design", "backend"],
      },
      {
        id: 3,
        image: commerce,
        category: "E-learning Platform",
        description:
          "As the Software Engineer and Team Lead, I oversaw the development of this project from inception to completion. I was involved in both backend and frontend development, designed the system architecture, and conducted project planning. Leveraging HTML, CSS, Bootstrap, Laravel, and MySQL, I ensured seamless integration of technologies to deliver a robust solution.",
        links: "https://e-pushti.net/",
        tags: ["#e-learning", "#educational"],
      },
      {
        id: 4,
        image: fresh,
        category: "Project Management Website",
        description:
          "In this project, I had dual roles as software engineer and team lead for a project management system designed for a bank, which is their internal system, built using Laravel. My responsibilities encompassed system architecture design, meticulous project planning, and backend development. Through my expertise and leadership, I ensured the successful execution of this critical project.",
        tags: ["#erp", "#project_management"],
      },
      {
        id: 5,
        image: ainsheba,
        category: "Ain Sheba",
        description:
          "This was a law project for taking lawyer appointments and law courses. In this project, I had to work on a CodeCanyon project to fulfil the client's needs. Solving programme bugs and adding new features.",
        links: "https://ainsheba.com/",
        tags: ["#erp", "#project_management"],
      },
      {
        id: 6,
        image: gents,
        category: "E-commerce Book Store",
        description:
          "In this project, I served as a Senior Web Developer, contributing to the development of a system built on HTML, CSS, Bootstrap, PHP, Laravel, and MySQL. Additionally, I played a key role in integrating the system with the hPanel cloud system and implementing payment gateways. My responsibilities encompassed both frontend and backend development, highlighting my versatility across various technical domains.",
        links: "https://khoshrozltd.com/",
        tags: ["#ecommerce", "#book_store"],
      },
      {
        id: 7,
        image: fly,
        category: "ERP System (Website)",
        description:
          "This was an already-built ERP system on PHP/CodeIgniter. There were several bugs and calculation issues, as well as programming problems and database issues. So I had to work on it continuously to fix the issues and implement future updates.",
        tags: ["#erp", "#CSS", "#Bootstrap", "#JavaScript"],
      },
      {
        id: 7,
        image: others,
        category: "Other Projects",
        description:
          "There are bunch of other projects like portfolio, problem solving projects, Starup company projects, CodeCanyon projects, and more.",
        links: "https://github.com/tawshiqulislam",
        tags: ["#erp", "#CSS", "#Bootstrap", "#JavaScript"],
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
