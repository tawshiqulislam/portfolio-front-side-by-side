<template>
  <vue-particles id="tsparticles" @particles-loaded="particlesLoaded" :options="particlesOptions" />
  <div class="container animate-class" :class="animationClass" @click="toggleAnimation">
    <div class="row d-flex justify-content-around mt-2">
      <div class="col-md-12 text-right text-white">
        <h1 class="text-warning">About</h1>
        <h3 class="text-white">Learn More About Me</h3>
      </div>
    </div>
    <div class="row d-flex justify-content-around pb-2">
      <div class="img-box position-relative col-md-4 mt-2 mx-2 d-flex justify-content-center align-items-center">
        <img :src="userData.authorImg" :alt="userData.authorName" />
        <div class="img-box-outline"></div>
      </div>
      <div class="about-box col-md-7 mx-2 mt-2 d-flex justify-content-start align-items-center">
        <div class="card-body bg-transparent">
          <span class="h4">Hello! Once Again</span>
          <h2 class="card-title">
            <span class="name">{{ userData.authorName }}</span>
          </h2>
          <div v-for="msg in userData.homeMsg" :key="msg">
            <p class="card-text my-3">
              {{ msg }}
            </p>
          </div>
          <div class="button d-flex justify-content-start">
            <a href="mailto:tawshiq.rafi02@gmail.com" class="btn btn-outline-warning rounded-pill py-2 px-4">Contact
              Now</a>
          </div>
          <div class="footer-button-section my-4">
            <div class="col-md-3 badge bg-warning text-black footer-button mx-2 my-1">
              <p class="text-start">
                <span class="h5">{{ userProfile.exp }}+</span><br />
                Experience
              </p>
            </div>
            <div class="col-md-3 badge bg-light text-black footer-button mx-2 my-1">
              <p class="text-start">
                <span class="h5">{{ userProfile.project }}+</span><br />
                Projects
              </p>
            </div>
            <div class="col-md-3 badge bg-transparent footer-button fbtn-last mx-2 my-1">
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
          "From an early age, I was drawn to the world of technology and design. This fascination led me to pursue a career in web development and upcoming technology. With a strong foundation in front-end development, I possess expertise in HTML, CSS, and JavaScript. On the back end, I'm proficient in languages and frameworks such as PHP, Laravel, Ruby on Rails basic, Java basic, Python basic, and others. I am passionate about learning and exploring new technologies.",
          "In addition to web development, I have a keen interest in data science and other cutting-edge technologies. While my expertise lies primarily in web development, I am eager to delve into the world of data science and apply my skills to solve complex problems. I am excited about the prospect of working on data-driven projects and contributing to advancements in this field.",
        ],
        authorImg: author,
      },
      userProfile: {
        exp: 3,
        project: 20,
        client: 9,
      },
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
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&family=Merriweather&display=swap");

.img-box-outline {
  position: absolute;
  border: 2.5px solid rgb(250, 255, 0);
  border-radius: 10px;
  height: 310px;
  width: 240px;
  border-radius: 20px;
  transform: translate(0, 14.5px);
  z-index: -1;
  background-color: rgba(172, 172, 174, 0.322);
}

.img-box>img {
  width: 250px;
  border-radius: 20px;
}

.about-box {
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  color: aliceblue;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  background: #00000052;
}

.about-box h2 {
  font-size: 40px;
  color: rgb(255, 255, 255);
}

.about-box h2 .name {
  color: rgb(255, 255, 0);
}

.about-box .card-body {
  font-family: "Josefin Sans", sans-serif;
  color: #fff;
}

.about-box .card-text {
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: justify;
}

.footer-button {
  border-radius: 0px 50px 50px 50px;
  padding: 20px;
}

.fbtn-last {
  border: 1px solid red;
}

.fbtn-last>p {
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

  .img-box-outline {
    transform: translate(0, -10px);
  }
}
</style>
