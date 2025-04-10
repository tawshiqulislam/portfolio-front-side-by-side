<template>
  <vue-particles
    id="tsparticles"
    @particles-loaded="particlesLoaded"
    :options="particlesOptions"
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

    <Carousel
      v-bind="carouselSettings"
      :breakpoints="carouselBreakpoints"
      :autoplay="true"
      :infinite="true"
    >
      <Slide v-for="project in projects" :key="project.id">
        <div class="carousel__item d-flex flex-column my-card mt-2">
          <div class="top mb-3">
            <img
              class="blog-article img-fluid"
              :style="imageStyle"
              :src="project.image"
              alt="Project Image"
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
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <div v-if="project.links" class="text-center w-100 bg-banger">
            <a
              :href="project.links"
              class="btn btn-sm btn-outline-warning text-info mb-2"
            >
              Project Url
            </a>
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
  name: "PortfolioPage",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  methods: {
    particlesLoaded() {
      console.log("Particles container loaded");
    },
    toggleAnimation() {
      this.animationClass =
        this.animationClass === "animate-class"
          ? "animate-class-active"
          : "animate-class";
    },
  },
  data() {
    return {
      animationClass: "animate-class",
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
        fpsLimit: 120,
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
              easing: "ease-out-quad",
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: "bounce",
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
            type: "square",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      },
      carouselSettings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      carouselBreakpoints: {
        400: {
          itemsToShow: 1.5,
          snapAlign: "center",
        },
        700: {
          itemsToShow: 2.5,
          snapAlign: "center",
        },
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
            "I contributed to a Laravel 6 project focused on developing a CMS-driven e-commerce platform. I worked on integrating new features, solving problems, and implementing a RESTful API.",
          links: "https://shojonsl.com/",
          tags: ["#backend_development", "#problem_solving"],
        },
        {
          id: 2,
          image: pixel2,
          category: "Institutional Website",
          description:
            "I led both backend and frontend development for a dynamic website, utilizing HTML, CSS, Bootstrap, Laravel, and MySQL to ensure smooth integration.",
          tags: ["#web_design", "#backend"],
        },
        {
          id: 3,
          image: commerce,
          category: "E-learning Platform",
          description:
            "As Software Engineer and Team Lead, I oversaw the development of an e-learning platform, involving system architecture, backend, and frontend integration.",
          links: "https://e-pushti.net/",
          tags: ["#e-learning", "#educational"],
        },
        {
          id: 4,
          image: fresh,
          category: "Project Management Website",
          description:
            "I designed and developed a project management system for a bank using Laravel, focusing on system architecture and backend development.",
          tags: ["#erp", "#project_management"],
        },
        {
          id: 5,
          image: ainsheba,
          category: "Ain Sheba",
          description:
            "Worked on a law project to take lawyer appointments and law courses, including bug fixes and adding new features to an existing CodeCanyon project.",
          links: "https://ainsheba.com/",
          tags: ["#erp", "#project_management"],
        },
        {
          id: 6,
          image: gents,
          category: "E-commerce Book Store",
          description:
            "As Senior Web Developer, I contributed to an e-commerce book store using HTML, CSS, Bootstrap, PHP, Laravel, and MySQL. I also integrated payment gateways.",
          links: "https://khoshrozltd.com/",
          tags: ["#ecommerce", "#book_store"],
        },
        {
          id: 7,
          image: fly,
          category: "ERP System (Website)",
          description:
            "Worked on an ERP system with CodeIgniter, resolving bugs and issues, and continuously improving features and updates.",
          tags: ["#erp", "#PHP", "#CodeIgniter"],
        },
        {
          id: 8,
          image: others,
          category: "Other Projects",
          description:
            "Various other projects, including portfolios, problem-solving projects, and CodeCanyon contributions.",
          links: "https://github.com/tawshiqulislam",
          tags: ["#portfolio", "#opensource"],
        },
      ],
      imageStyle: {
        width: "300px",
        height: "160px",
        objectFit: "cover",
        borderRadius: "10px",
      },
    };
  },
});
</script>

<style scoped>
.top img {
  width: 100% !important;
  height: auto !important;
}

.carousel__item {
  transition: transform 0.3s ease-in-out;
}

.my-card {
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.carousel__item:hover {
  transform: scale(1.05);
}

.bg-banger {
  background-color: #111;
}

.text-warning {
  color: #f39c12;
}

.fs-val {
  font-size: 70%;
}

.blog-article {
  font-size: 16px;
  color: #dcdcdc;
}

.tags .badge {
  font-size: 12px;
  color: #fff;
  background-color: #555;
  border-radius: 10px;
}

h3,
h1 {
  font-weight: bold;
}
</style>
