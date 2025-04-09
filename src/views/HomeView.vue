<template>
  <!-- Content -->
  <vue-particles
    id="tsparticles"
    @particles-loaded="particlesLoaded"
    :options="{
      background: { color: { value: 'transparent' } },
      fullScreen: { enable: true, zIndex: -1 },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: 'push' },
          onHover: {
            enable: true,
            mode: 'grab',
            parallax: { enable: true, force: 60, smooth: 100 },
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
            links: { blink: false, consent: false, opacity: 1 },
          },
          push: { quantity: 4 },
          remove: { quantity: 2 },
          repulse: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: 'ease-out-quad',
          },
        },
      },
      particles: {
        color: { value: '#ffffff' },
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
        number: { density: { enable: true }, value: 220 },
        opacity: { value: 0.5 },
        shape: { type: 'square' },
        size: { value: { min: 1, max: 5 } },
      },
      detectRetina: true,
    }"
  />

  <div
    class="container mt-5 animate-class"
    :class="animationClass"
    @click="toggleAnimation"
  >
    <div class="row d-flex justify-content-between align-items-center pb-2">
      <!-- About Section -->
      <div class="about-box col-md-6 mx-2 mt-3">
        <div class="card-body bg-transparent text-white">
          <h3>Hello! I'm</h3>
          <h2 class="name h1">{{ userData.authorName }}</h2>
          <p>{{ userData.homeMsg }}</p>
          <div class="button d-flex justify-content-start">
            <a
              :href="userData.authorPdf"
              download="Resume.pdf"
              class="btn btn-warning rounded-pill"
              >Get Resume</a
            >
            <a
              href="mailto:tawshiq.rafi02@gmail.com"
              class="btn btn-outline-warning rounded-pill mx-5"
              >Let's Talk</a
            >
          </div>
        </div>
      </div>

      <!-- Author Image Section -->
      <div
        class="img-box col-md-4 mx-2 d-flex justify-content-center align-items-center"
      >
        <img
          :src="userData.authorImg"
          :alt="userData.authorName"
          class="author-img"
        />
      </div>

      <!-- Social Media Links -->
      <div
        class="col-md-1 d-flex flex-column align-items-center follow-me text-center"
      >
        <div class="social-icons mt-5">
          <a
            class="btn btn-floating m-1"
            href="https://www.facebook.com/tawshiqulislam.rafi.3"
            role="button"
          >
            <i class="bi bi-facebook text-warning"></i>
          </a>
          <a
            class="btn btn-floating m-1"
            href="https://github.com/tawshiqulislam"
            role="button"
          >
            <i class="bi bi-github text-warning"></i>
          </a>
          <a
            class="btn btn-floating m-1"
            href="https://www.linkedin.com/in/tawshiqul-islam-rafi-417b501b9/"
            role="button"
          >
            <i class="bi bi-linkedin text-warning"></i>
          </a>
        </div>
        <div class="follow-me-text text-white mt-5">
          <span>Follow Me</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="text-center footer text-white">
    <div class="container p-4">
      <span
        >&copy; Developed By
        <a href="mailto:tawshiq.rafi02@gmail.com" class="text-white"
          >Tawshiqul Islam</a
        ></span
      >
    </div>
  </footer>
</template>

<script>
import author from "../assets/image/author-image-home.png";
import pdf from "../assets/image/Md-Tawshiqul-Islam-Rafi.pdf";

export default {
  data() {
    return {
      userData: {
        authorName: "Md. Tawshiqul Islam Rafi",
        homeMsg:
          "As a passionate full-stack web developer with a keen interest in data science, I have a knack for creating stunning and functional websites. With a strong foundation in both front-end and back-end development, I bring a holistic approach to every project I undertake. I am enthusiastic about exploring various machine learning algorithms and data analysis techniques, leveraging innovative ideas to create impactful solutions.",
        authorImg: author,
        authorPdf: pdf,
      },
      animationClass: "fadeIn", // Example of animation class
    };
  },
  methods: {
    particlesLoaded() {
      console.log("Particles loaded successfully.");
    },
    toggleAnimation() {
      this.animationClass =
        this.animationClass === "fadeIn" ? "fadeOut" : "fadeIn";
    },
  },
};
</script>

<style scoped>
/* General Styles */
body {
  font-family: "Roboto Slab", serif;
  background-color: #1a1a1a;
  color: #fff;
}

/* About Box */
.about-box {
  border-radius: 15px;
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.about-box h2 {
  font-size: 3rem;
  font-weight: bold;
}

.about-box p {
  font-size: 1.2rem;
  line-height: 1.8;
}

.about-box .button a {
  margin: 10px;
}

.about-box .name {
  color: #ffe600;
}

/* Image Box */
.img-box img {
  width: 70%;
  border-radius: 15px;
  transition: transform 0.3s ease-in-out;
}

.img-box:hover img {
  transform: scale(1.05);
}

/* Social Media Buttons */
.social-icons .btn {
  background-color: #91aac359;
  transition: all 0.3s ease;
}

.social-icons .btn:hover {
  background-color: #00a6ff71;
  transform: scale(1.1) !important;
}

.follow-me-text {
  font-weight: bold;
  font-size: 1.2rem;
  color: #fff;
  writing-mode: vertical-rl;
  text-orientation: upright;
  margin-top: 20px;
}

/* Footer */
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #33333370;
  padding: 0px;
  text-align: center;
}

/* Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.fadeIn {
  animation: fadeIn 1s ease-out;
}

.fadeOut {
  animation: fadeOut 1s ease-out;
}

/* Responsive */
@media (max-width: 768px) {
  .about-box {
    text-align: center;
  }

  .img-box img {
    width: 70%;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .follow-me-text {
    writing-mode: horizontal-tb;
  }
}
</style>
