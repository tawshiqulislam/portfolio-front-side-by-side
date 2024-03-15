<template>
  <div :class="animationClass" @click="toggleAnimation" class="animate-class">
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
    <div class="container">
      <div class="row d-flex justify-content-around mt-2">
        <div class="col-md-12 text-right text-white">
          <h1 class="text-warning">About</h1>
          <h3 class="text-white">Learn More About Me</h3>
        </div>
      </div>
      <div class="row d-flex justify-content-around pb-2">
        <div
          class="img-box position-relative col-md-4 mt-2 mx-2 d-flex justify-content-center align-items-center"
        >
          <img :src="userData.authorImg" :alt="userData.authorName" />
          <div class="img-box-outline"></div>
        </div>
        <div
          class="about-box col-md-7 mx-2 mt-2 d-flex justify-content-start align-items-center"
        >
          <div class="card-body bg-transparent">
            <span class="h4">Hello! Once Again</span>
            <h2 class="card-title">
              <span class="name">{{ userData.authorName }}</span>
            </h2>
            <div v-for="msg in userData.homeMsg" :key="msg">
              <p class="card-text my-3">
                <small
                  ><b>{{ msg }}</b></small
                >
              </p>
            </div>
            <div class="button d-flex justify-content-start">
              <a href="#" class="btn btn-outline-warning rounded-pill py-2 px-4"
                >Contact Now</a
              >
            </div>
            <div class="footer-button-section my-4">
              <div
                class="col-md-3 badge bg-warning text-black footer-button mx-2 my-1"
              >
                <p class="text-start">
                  <span class="h5">{{ userProfile.exp }}+</span><br />
                  Experience
                </p>
              </div>
              <div
                class="col-md-3 badge bg-light text-black footer-button mx-2 my-1"
              >
                <p class="text-start">
                  <span class="h5">{{ userProfile.project }}+</span><br />
                  Projects
                </p>
              </div>
              <div
                class="col-md-3 badge bg-transparent footer-button fbtn-last mx-2 my-1"
              >
                <p class="text-start">
                  <span class="h5">{{ userProfile.client }}+</span><br />
                  Happy Clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import author from "../assets/image/about_img.png";
export default {
  data() {
    return {
      isAnimating: false,
      userData: {
        authorName: "Md. Tawshiqul Islam Rafi",
        homeMsg: [
          "From an early age, I was drawn to the world of technology and design. This fascination led me to pursue a career in web development. With a strong foundation in front-end development, I possess expertise in HTML, CSS, and JavaScript. On the back end, I'm proficient in languages such as Python and JavaScript, utilizing frameworks like Django and Node.js.",
          "Beyond coding, I am an avid advocate for continuous learning and professional growth. I look forward to the opportunity to work with you on your next web development venture!",
        ],
        authorImg: author,
      },
      userProfile: {
        exp: 10,
        project: 100,
        client: 70,
      },
    };
  },
  computed: {
    animationClass() {
      return {
        "animate-class": this.isAnimating,
      };
    },
  },
  methods: {
    toggleAnimation() {
      this.isAnimating = !this.isAnimating;
    },
    particlesLoaded() {
      // console.log("Particles container loaded", container);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&family=Merriweather&display=swap");

.img-box-outline {
  position: absolute;
  border: 2px solid rgb(250, 255, 0);
  border-radius: 10px;
  height: 310px;
  width: 240px;
  border-radius: 20px;
  transform: translate(-25px, -23px);
  z-index: -1;
  background-color: rgba(172, 172, 174, 0.322);
}
.img-box > img {
  height: 320px;
  width: 250px;
  border-radius: 20px;
}
.about-box {
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  color: aliceblue;
}
.about-box h2 {
  font-size: 40px;
  color: rgb(255, 255, 255);
}
.about-box h2 .name {
  color: rgb(255, 255, 0);
}
.about-box > .card-body > .card-text {
  width: 90%;
  font-size: medium;
  font-family: "Josefin Sans", sans-serif;
  font-family: "Merriweather", serif;
}
.about-box > .card-body > .card-text {
  text-align: justify;
}
.footer-button {
  border-radius: 0px 50px 50px 50px;
  padding: 20px;
}
.fbtn-last {
  border: 1px solid red;
}
.fbtn-last > p {
  color: gold;
}
.router-link-active {
  color: aliceblue !important;
}
.badge {
  height: 90px;
  width: 130px;
}

@media screen and (max-width: 768px) {
  img {
    margin-bottom: 50px;
  }
}
</style>
