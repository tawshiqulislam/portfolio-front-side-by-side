<template>
  <!-- Content -->
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
    class="container mt-5 animate-class"
    :class="animationClass"
    @click="toggleAnimation"
  >
    <div class="row d-flex justify-content-around pb-2">
      <div
        class="about-box col-md-6 mx-2 mt-3 d-flex justify-content-start align-items-center"
      >
        <div class="card-body bg-transparent">
          <span class="h3">Hello! I'm</span>
          <h2 class="card-title">
            <span class="name h1">{{ userData.authorName }}</span>
          </h2>
          <p class="card-text">
            {{ userData.homeMsg }}
          </p>
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
      <div
        class="img-box col-md-4 mx-2 d-flex justify-content-center align-items-center"
        style="margin-right: 35px !important"
      >
        <img :src="userData.authorImg" :alt="userData.authorName" />
      </div>
      <div class="col-md-1 d-flex url-links follow-me text-center">
        <div class="col mt-5" style="margin-top: 160px !important">
          <a
            class="btn btn-floating m-1"
            href="https://www.facebook.com/tawshiqulislam.rafi.3"
            role="button"
            ><i class="bi bi-facebook text-warning"></i
          ></a>

          <!-- Twitter -->
          <a
            class="btn btn-floating m-1"
            href="https://github.com/tawshiqulislam"
            role="button"
            ><i class="bi bi-github text-warning"></i
          ></a>

          <!-- Google -->
          <a
            class="btn btn-floating m-1"
            href="https://www.linkedin.com/in/tawshiqul-islam-rafi-417b501b9/"
            role="button"
            ><i class="bi bi-linkedin text-warning"></i
          ></a>
        </div>
        <div
          class="col follow-me text-white"
          style="
            writing-mode: vertical-rl;
            text-orientation: upright;
            font-weight: 700;
          "
        >
          Follow Me
        </div>
      </div>
    </div>
  </div>

  <footer class="text-center footer text-white">
    <!-- Grid container -->
    <div class="container p-4 pb-0">
      <!-- Section: Social media -->
      <!-- <section class="mb-4">
        <a class="btn btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-facebook"></i
        ></a>
        <a class="btn btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-github"></i
        ></a>
        <a class="btn btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-linkedin"></i
        ></a>
        <a class="btn btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-instagram"></i
        ></a>
        <a class="btn btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-twitter"></i
        ></a>
        <a class="btn btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-behance"></i
        ></a>
      </section> -->

      <div
        class="justify-content-center"
        style="display: flex; flex-direction: column"
      >
        <span
          >&copy; Developed By
          <a href="mailto:tawshiq.rafi02@gmail.com" class="text-white"
            >Tawshiqul Islam</a
          ></span
        >
      </div>

      <!-- Section: Social media -->
    </div>
    <!-- Grid container -->
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
    };
  },
  methods: {
    particlesLoaded() {
      // console.log("Particles container loaded", container);
    },
  },
};
</script>

<style scoped>
.about-box {
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  height: 50vh;
  color: aliceblue;
}
.about-box h2 {
  font-size: 40px;
  color: rgb(255, 255, 255);
}
.about-box h2 .name {
  color: yellow;
}
.about-box > .card-body > .card-text {
  width: 90%;
  font-size: medium;
}
.about-box > .card-body > .card-text {
  text-align: justify;
}
.img-box > img {
  width: 320px;
  --c: #ffe600; /* the border color */
  --b: 10px; /* the border thickness*/
  --g: 5px; /* the gap on hover */

  padding: calc(var(--g) + var(--b));
  --_g: rgba(255, 255, 255, 0) 25%, var(--c) 0;
  background: conic-gradient(
        from 180deg at top var(--b) right var(--b),
        var(--_g)
      )
      var(--_i, 200%) 0 /200% var(--_i, var(--b)) no-repeat,
    conic-gradient(at bottom var(--b) left var(--b), var(--_g)) 0
      var(--_i, 200%) / var(--_i, var(--b)) 200% no-repeat;
  transition: 0.3s, background-position 0.3s 0.3s;
  cursor: pointer;
}
.img-box:hover > img {
  --_i: 100%;
  transition: 0.3s, background-size 0.3s 0.3s;
}
.row {
  margin-top: 10vh;
}
footer > .container > section > a {
  color: rgb(255, 255, 255);
}
footer > .container > section > a:hover {
  color: rgb(255, 238, 0);
}
@media (max-width: 775px) {
  .url-links .follow-me {
    display: none !important; /* Use !important if needed */
  }
}
@media (min-width: 780px) {
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
}
</style>
