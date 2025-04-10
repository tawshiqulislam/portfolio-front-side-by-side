<template>
  <div class="portfolio-container">
    <!-- Particles background -->
    <vue-particles
      id="tsparticles"
      @particles-loaded="particlesLoaded"
      :options="particlesOptions"
    />

    <!-- Portfolio content -->
    <div
      class="container portfolio-content mt-2"
      :class="animationClass"
      @click="toggleAnimation"
    >
      <div class="row d-flex justify-content-around">
        <div class="col-md-12 text-right text-white">
          <h1 class="text-warning">PORTFOLIO</h1>
          <h3 class="text-white">MY RECENT WORKS</h3>
        </div>
      </div>

      <!-- Projects Carousel -->
      <Carousel v-bind="settings" :breakpoints="breakpoints" :transition="500">
        <Slide v-for="project in projects" :key="project.id">
          <div class="project-card">
            <div class="project-image-container">
              <img
                class="project-image"
                :src="project.image"
                :alt="project.category"
              />
              <div class="project-overlay" v-if="project.links">
                <div class="project-actions">
                  <a
                    :href="project.links"
                    target="_blank"
                    class="action-btn view-btn"
                  >
                    <i class="fas fa-external-link-alt"></i> View
                  </a>
                </div>
              </div>
            </div>
            <div class="project-info">
              <h5 class="project-category">{{ project.category }}</h5>
              <p class="project-description">
                {{ truncate(project.description, 120) }}
              </p>

              <!-- Technology section (conditionally rendered) -->
              <div v-if="project.technology" class="project-tech">
                <span class="tech-label">Technologies:</span>
                <span
                  class="tech-item"
                  v-for="(tech, idx) in project.technology"
                  :key="idx"
                >
                  {{ tech }}
                </span>
              </div>

              <div class="project-tags">
                <span
                  class="project-tag"
                  v-for="(tag, index) in project.tags"
                  :key="index"
                  >{{ tag }}</span
                >
              </div>

              <div class="project-actions">
                <button
                  @click.stop="openProjectDetails(project)"
                  class="action-btn details-btn"
                >
                  <i class="fas fa-info-circle"></i> Details
                </button>
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

    <!-- Project Details Modal -->
    <div
      class="modal-overlay"
      v-if="selectedProject"
      @click="closeProjectDetails"
    >
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeProjectDetails">×</button>

        <div class="modal-header">
          <h2>{{ selectedProject.category }}</h2>
        </div>

        <div class="modal-body">
          <img
            class="modal-image"
            :src="selectedProject.image"
            :alt="selectedProject.category"
          />

          <div class="modal-details">
            <h4>Project Overview</h4>
            <p>{{ selectedProject.description }}</p>

            <div v-if="selectedProject.technology" class="modal-tech">
              <h4>Technologies Used</h4>
              <div class="tech-stack">
                <span
                  class="tech-badge"
                  v-for="(tech, idx) in selectedProject.technology"
                  :key="idx"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <div class="modal-tags">
              <span
                class="modal-tag"
                v-for="(tag, idx) in selectedProject.tags"
                :key="idx"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>

        <div class="modal-footer" v-if="selectedProject.links">
          <a :href="selectedProject.links" target="_blank" class="modal-btn">
            Visit Project
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

// Import images
import fly from "../assets/image/portfolio/erp.jpg";
import others from "../assets/image/portfolio/github.jpg";
import gents from "../assets/image/portfolio/kkml.jpg";
import fresh from "../assets/image/portfolio/pro_man.jpg";
import ainsheba from "../assets/image/portfolio/ainsheba.jpg";
import commerce from "../assets/image/portfolio/e_pushti.jpg";
import pixel from "../assets/image/portfolio/shojon.jpg";
import pixel2 from "../assets/image/portfolio/brur.jpg";

export default defineComponent({
  name: "PortfolioSection",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      animationClass: "fade-in",
      selectedProject: null,
      // Carousel settings
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      // Responsive breakpoints
      breakpoints: {
        400: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        700: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        900: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        1200: {
          itemsToShow: 4,
          snapAlign: "start",
        },
      },
      // Particles configuration
      particlesOptions: {
        background: {
          color: {
            value: "transparent",
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab",
              parallax: {
                enable: true,
                force: 60,
                smooth: 100,
              },
            },
          },
          modes: {
            grab: {
              distance: 400,
              links: {
                opacity: 0.8,
                color: "#ffffff",
              },
            },
            push: {
              quantity: 4,
            },
          },
        },
        particles: {
          color: {
            value: "#64ffda",
          },
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
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 0.5,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.1,
            },
          },
        },
        detectRetina: true,
      },
      // Projects data with added technology arrays
      projects: [
        {
          id: 1,
          image: pixel,
          category: "E-commerce Website",
          description:
            "Laravel 6 CMS-driven e-commerce platform with RESTful API integration for seamless system communication. Implemented custom shopping cart functionality, user authentication, and payment gateway integration to create a comprehensive online shopping experience.",
          links: "https://shojonsl.com/",
          tags: ["#backend", "#laravel", "#api"],
          technology: [
            "Laravel 6",
            "MySQL",
            "RESTful API",
            "Bootstrap",
            "jQuery",
            "PHP",
          ],
        },
        {
          id: 2,
          image: pixel2,
          category: "Institutional Website",
          description:
            "Full-stack development with HTML, CSS, Bootstrap frontend and Laravel backend with MySQL database optimization. Created a responsive institutional website with content management system, event calendar, staff directory, and resource library for educational organization.",
          tags: ["#educational", "#fullstack", "#laravel"],
          technology: [
            "Laravel",
            "MySQL",
            "Bootstrap",
            "JavaScript",
            "CSS3",
            "HTML5",
          ],
        },
        {
          id: 3,
          image: commerce,
          category: "E-learning Platform",
          description:
            "Led development from inception to completion, designing system architecture and managing frontend/backend integration. Developed comprehensive e-learning platform with course management, student progress tracking, interactive quizzes, and certification system.",
          links: "https://e-pushti.net/",
          tags: ["#e-learning", "#team_lead", "#laravel"],
          technology: [
            "Laravel",
            "Vue.js",
            "MySQL",
            "Bootstrap",
            "AWS",
            "Redis",
          ],
        },
        {
          id: 4,
          image: fresh,
          category: "Project Management",
          description:
            "Bank internal system for project management built with Laravel, handling system architecture and backend development. Created comprehensive project tracking system with task assignments, deadline management, reporting tools, and team collaboration features.",
          tags: ["#erp", "#project_management", "#laravel"],
          technology: [
            "Laravel",
            "MySQL",
            "jQuery",
            "AJAX",
            "Bootstrap",
            "Chart.js",
          ],
        },
        {
          id: 5,
          image: ainsheba,
          category: "Ain Sheba",
          description:
            "Law platform for attorney appointments and courses. Modified CodeCanyon project, fixing bugs and adding features. Implemented appointment scheduling system, online payment processing, course registration, and client management features for legal professionals.",
          links: "https://ainsheba.com/",
          tags: ["#legal", "#customization", "#php"],
          technology: ["PHP", "MySQL", "jQuery", "Bootstrap", "AJAX"],
        },
        {
          id: 6,
          image: gents,
          category: "E-commerce Book Store",
          description:
            "Senior developer integrating hPanel cloud system and payment gateways using Laravel and MySQL. Built specialized book store with advanced search functionality, recommendation system, category filtering, and secure payment processing for online book sales.",
          links: "https://khoshrozltd.com/",
          tags: ["#ecommerce", "#books", "#laravel"],
          technology: [
            "Laravel",
            "MySQL",
            "Payment Gateways",
            "hPanel Cloud",
            "JavaScript",
          ],
        },
        {
          id: 7,
          image: fly,
          category: "ERP System",
          description:
            "Fixed calculation issues and database problems in an existing CodeIgniter ERP system, implementing updates and fixes. Optimized database queries, resolved transaction processing bugs, and improved reporting accuracy for financial management system.",
          tags: ["#erp", "#codeigniter", "#debugging"],
          technology: [
            "CodeIgniter",
            "MySQL",
            "JavaScript",
            "jQuery",
            "AJAX",
            "PHP",
          ],
        },
        {
          id: 8,
          image: others,
          category: "Other Projects",
          description:
            "Various portfolio, problem-solving, startup, and CodeCanyon projects showcasing diverse skills and experience. Developed custom solutions across multiple domains, programming languages, and frameworks to address specific client requirements.",
          links: "https://github.com/tawshiqulislam",
          tags: ["#github", "#opensource", "#diverse"],
          technology: [
            "Multiple Languages",
            "Various Frameworks",
            "Different Platforms",
          ],
        },
      ],
    };
  },
  methods: {
    particlesLoaded(container) {
      console.log("Particles container loaded", container);
    },
    toggleAnimation() {
      this.animationClass =
        this.animationClass === "fade-in" ? "bounce-in" : "fade-in";
    },
    truncate(text, length) {
      if (text.length <= length) return text;
      return text.substring(0, length) + "...";
    },
    openProjectDetails(project) {
      this.selectedProject = project;
      document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
    },
    closeProjectDetails() {
      this.selectedProject = null;
      document.body.style.overflow = ""; // Restore scrolling
    },
  },
});
</script>

<style scoped>
/* Import Font Awesome for icons */
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

/* Project Card Styling - Made more attractive */
.project-card {
  background: rgba(17, 34, 64, 0.7);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  height: 450px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(100, 255, 218, 0.1);
  backdrop-filter: blur(5px);
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(100, 255, 218, 0.2);
  border-color: rgba(100, 255, 218, 0.3);
}

/* Improved image container */
.project-image-container {
  position: relative;
  overflow: hidden;
  height: 250px; /* Made smaller as requested */
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* Better fit for image */
  transition: transform 0.5s ease;
}

.project-card:hover .project-image {
  transform: scale(1.1);
}

/* Enhanced overlay with multiple buttons */
.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 25, 47, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-actions {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.action-btn {
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  border: none;
}

.details-btn {
  background: #64ffda;
  color: #0a192f;
}

.details-btn:hover {
  background: transparent;
  color: #64ffda;
  box-shadow: inset 0 0 0 2px #64ffda;
}

.view-btn {
  background: transparent;
  color: #64ffda;
  box-shadow: inset 0 0 0 2px #64ffda;
}

.view-btn:hover {
  background: #64ffda;
  color: #0a192f;
}

.project-info {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.project-category {
  font-size: 1.1rem;
  font-weight: 600;
  color: #64ffda;
  margin-bottom: 0.5rem;
}

.project-description {
  font-size: 0.9rem;
  color: #a8b2d1;
  line-height: 1.6;
  flex-grow: 1;
}

/* New technology section */
.project-tech {
  margin-top: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  align-items: center;
}

.tech-label {
  color: #ccd6f6;
  font-size: 0.8rem;
  font-weight: 600;
  margin-right: 5px;
}

.tech-item {
  color: #64ffda;
  font-size: 0.75rem;
  background: rgba(100, 255, 218, 0.05);
  padding: 2px 6px;
  border-radius: 4px;
  border: 1px solid rgba(100, 255, 218, 0.2);
}

.tech-item:not(:last-child):after {
  content: ",";
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.project-tag {
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

/* Modal styling for project details */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 25, 47, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  backdrop-filter: blur(8px);
}

.modal-content {
  background: linear-gradient(135deg, #172a45 0%, #0a192f 100%);
  border-radius: 12px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  position: relative;
  border: 1px solid rgba(100, 255, 218, 0.2);
  animation: modalFadeIn 0.3s ease-out;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-close {
  position: absolute;
  right: 15px;
  top: 15px;
  background: transparent;
  border: none;
  color: #ccd6f6;
  font-size: 24px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.modal-close:hover {
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
}

.modal-header {
  padding: 20px 30px;
  border-bottom: 1px solid rgba(100, 255, 218, 0.1);
}

.modal-header h2 {
  margin: 0;
  color: #64ffda;
  font-size: 1.8rem;
}

.modal-body {
  padding: 30px;
}

.modal-image {
  width: 100%;
  max-height: 300px;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 20px;
  background: rgba(10, 25, 47, 0.5);
  padding: 10px;
}

.modal-details h4 {
  color: #ccd6f6;
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.modal-details p {
  color: #a8b2d1;
  line-height: 1.7;
  margin-bottom: 20px;
}

.modal-tech {
  margin-bottom: 20px;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.tech-badge {
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  border: 1px solid rgba(100, 255, 218, 0.2);
}

.modal-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 15px;
}

.modal-tag {
  color: #a8b2d1;
  font-size: 0.85rem;
}

.modal-footer {
  padding: 20px 30px;
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(100, 255, 218, 0.1);
}

.modal-btn {
  background: #64ffda;
  color: #0a192f;
  font-weight: 600;
  text-decoration: none;
  padding: 10px 25px;
  border-radius: 4px;
  transition: all 0.3s ease;
  display: inline-block;
}

.modal-btn:hover {
  background: transparent;
  color: #64ffda;
  box-shadow: inset 0 0 0 2px #64ffda;
}

/* Carousel customization */
:deep(.carousel__slide) {
  padding: 5px;
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
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
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

/* Responsive adjustments */
@media (max-width: 768px) {
  .project-card {
    height: 420px;
  }

  .modal-content {
    width: 95%;
  }
}

@media (max-width: 576px) {
  .project-card {
    height: 400px;
  }

  .project-description {
    font-size: 0.8rem;
  }

  .modal-header h2 {
    font-size: 1.5rem;
  }

  .project-actions {
    flex-direction: column;
    gap: 8px;
  }
}
</style>
