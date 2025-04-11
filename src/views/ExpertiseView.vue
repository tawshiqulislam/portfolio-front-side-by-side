<template>
  <div class="portfolio-container">
    <!-- Particles Background -->
    <vue-particles
      id="tsparticles"
      @particles-loaded="particlesLoaded"
      :options="particlesOptions"
    />

    <!-- Expertise Content -->
    <div class="container portfolio-content mt-2" :class="animationClass">
      <div class="row d-flex justify-content-around">
        <div class="col-md-12 text-right text-white">
          <h1 class="text-warning">
            SKILLS <span class="text-white">&</span> EXPERTISE
          </h1>
          <h3 class="text-white">I ACQUIRE</h3>
        </div>
      </div>

      <!-- Skills Carousel -->
      <Carousel
        v-bind="settings"
        :breakpoints="breakpoints"
        :autoplay="3500"
        :wrap-around="true"
        :transition="500"
      >
        <Slide v-for="skill in skills" :key="skill.id">
          <div class="skill-card">
            <div class="project-info">
              <h5 class="project-category">{{ skill.title }}</h5>
              <div class="progress-group">
                <div
                  v-for="(item, idx) in skill.mySkill"
                  :key="idx"
                  class="progress-wrapper"
                >
                  <div class="progress-header d-flex justify-content-between">
                    <span class="text-white">{{ Object.keys(item)[0] }}</span>
                    <span class="text-warning"
                      >{{ Object.values(item)[0] }}%</span
                    >
                  </div>
                  <div class="progress-bar-container">
                    <div
                      class="progress-bar-fill"
                      :style="{ width: Object.values(item)[0] + '%' }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "ExpertiseView",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      animationClass: "fade-in",
      skills: [
        {
          id: 1,
          title: "Front End Development",
          mySkill: [
            { HTML: 90 },
            { CSS: 90 },
            { "JavaScript & jQuery": 80 },
            { Bootstrap: 100 },
            { VueJS: 70 },
          ],
        },
        {
          id: 2,
          title: "Back End Development",
          mySkill: [
            { PHP: 80 },
            { Laravel: 90 },
            { MySQL: 70 },
            { "REST API": 80 },
            { "Cloud/XAMP/WAMP/cPanel": 90 },
          ],
        },
        {
          id: 3,
          title: "Programming",
          mySkill: [
            { PHP: 80 },
            { "C/C++": 90 },
            { Python: 70 },
            { Java: 60 },
            { JavaScript: 80 },
          ],
        },
        {
          id: 4,
          title: "Others",
          mySkill: [
            { "Linux OS": 70 },
            { "Software Architecture": 80 },
            { "Software QA": 80 },
            { "Team Management": 90 },
            { "Team Leading": 80 },
          ],
        },
      ],
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      breakpoints: {
        400: { itemsToShow: 1.5 },
        700: { itemsToShow: 2.5 },
        1024: { itemsToShow: 3.5 },
      },
      particlesOptions: {
        background: { color: { value: "transparent" } },
        fullScreen: { enable: true, zIndex: -1 },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: {
              enable: true,
              mode: "grab",
              parallax: { enable: true, force: 60, smooth: 100 },
            },
          },
          modes: {
            grab: { distance: 400, links: { opacity: 0.8, color: "#ffffff" } },
            push: { quantity: 4 },
          },
        },
        particles: {
          color: { value: "#64ffda" },
          links: {
            color: "#64ffda",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: "bounce",
            random: false,
            speed: 2,
            straight: false,
          },
          number: { density: { enable: true, area: 800 }, value: 100 },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      },
    };
  },
  methods: {
    particlesLoaded(container) {
      console.log("Particles container loaded", container);
    },
  },
});
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");

.portfolio-container {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.portfolio-content {
  position: relative;
  z-index: 1;
}

.skill-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
}

.skill-card {
  background: rgba(17, 34, 64, 0.7);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  margin: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(100, 255, 218, 0.1);
  backdrop-filter: blur(5px);
}

.skill-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(100, 255, 218, 0.2);
  border-color: rgba(100, 255, 218, 0.3);
}

.project-info {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.project-category {
  font-size: 1.2rem;
  font-weight: 700;
  color: #64ffda;
  margin-bottom: 1rem;
  text-align: center;
}

.progress-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.progress-wrapper {
  display: flex;
  flex-direction: column;
}

.progress-header {
  font-size: 0.9rem;
  margin-bottom: 5px;
}

.progress-bar-container {
  height: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background-color: #64ffda;
  transition: width 0.6s ease;
}

/* Carousel customization */
:deep(.carousel__slide) {
  padding: 5px;
  display: flex;
  align-items: stretch;
}

:deep(.carousel__prev),
:deep(.carousel__next) {
  background-color: rgba(100, 255, 218, 0.2);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: #64ffda;
}

:deep(.carousel__prev:hover),
:deep(.carousel__next:hover) {
  background-color: rgba(100, 255, 218, 0.4);
}

/* Animations */
.fade-in {
  animation: fadeIn 1s ease-in-out;
}

.bounce-in {
  animation: bounceIn 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }

  50% {
    opacity: 1;
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
}

@media (max-width: 768px) {
  .skill-card {
    height: auto;
  }
}
</style>
