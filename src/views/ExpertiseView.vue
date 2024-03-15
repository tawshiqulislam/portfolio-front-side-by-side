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
        <h1 class="text-warning">
          Skills <span class="text-white">&</span> Expertise
        </h1>
        <h1 class="text-white">I Acquire</h1>
        <p class="text-white">
          Have 5 years of experience in the web and App development industry,
          working on diverse projects across various sectors.
        </p>
      </div>
    </div>
    <Carousel v-bind="settings" :breakpoints="breakpoints">
      <Slide v-for="skill in skills" :key="skill">
        <div class="carousel__item my-card mt-3" style="display: block">
          <div
            class="mt-4 px-4 badge rounded-pill text-warning"
            style="border: 2px solid rgb(255, 217, 0)"
          >
            {{ skill.title }}
          </div>
          <div class="skill-view mt-4 mb-3 d-flex flex-column">
            <div class="p-1 m-2" v-for="x in skill.mySkill" :key="x">
              <div class="progressBar">
                <div
                  class="progress text-black bg-transparent"
                  v-for="(value, key) in x"
                  :key="key"
                >
                  <div class="col text-start text-white">{{ key }}</div>
                  <div class="col text-end text-warning">{{ value }}</div>
                </div>
                <div id="myProgress">
                  <div id="myBar"></div>
                </div>
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
  methods: {
    particlesLoaded() {
      // console.log("Particles container loaded", container);
    },
  },
  // computed: {
  //   move() {
  //     console.log("Move");
  //     var i = 0;
  //     if (i == 0) {
  //       i = 1;
  //       var elem = document.getElementById("myBar");
  //       var width = 1;
  //       var id = setInterval(frame, 10);
  //       function frame() {
  //         if (width >= 50) {
  //           clearInterval(id);
  //           i = 0;
  //         } else {
  //           width++;
  //           return elem.style.width = width + "%";
  //         }
  //       }
  //     }
  //   },
  // },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
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
    skills: [
      {
        id: 1,
        title: "Web",
        mySkill: [
          { html: 10 },
          { CSS: 10 },
          { JavaScript: 10 },
          { html: 10 },
          { php: 10 },
        ],
      },
      {
        id: 2,
        title: "Programming",
        mySkill: [
          { html: 20 },
          { CSS: 20 },
          { JavaScript: 20 },
          { html: 20 },
          { php: 20 },
        ],
      },
      {
        id: 3,
        title: "Android",
        mySkill: [
          { html: 30 },
          { CSS: 30 },
          { JavaScript: 30 },
          { html: 30 },
          { php: 30 },
        ],
      },
      {
        id: 4,
        title: "Others",
        mySkill: [
          { html: 40 },
          { CSS: 40 },
          { JavaScript: 40 },
          { html: 40 },
          { php: 40 },
        ],
      },
      {
        id: 5,
        title: "None",
        mySkill: [
          { html: 50 },
          { CSS: 50 },
          { JavaScript: 50 },
          { html: 30 },
          { php: 50 },
        ],
      },
    ],
  }),
});
</script>

<style scoped>
#myProgress {
  width: 100%;
  background-color: rgb(238, 238, 238);
  border-radius: 50px;
}

#myBar {
  width: 90%;
  height: 5px;
  border-radius: 50px;
  background-color: rgb(255, 217, 0);
}
</style>
