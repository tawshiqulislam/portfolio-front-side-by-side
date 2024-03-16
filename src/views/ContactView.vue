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
            mode: 'repulse',
          },
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
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
          value: 320,
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
    class="container animate-class"
    :class="animationClass"
    @click="toggleAnimation"
  >
    <div
      class="container d-flex justify-content-center align-items-center"
      style="height: 100vh"
    >
      <div class="row d-flex justify-content-around">
        <div class="col-md-6">
          <div class="contact">
            <div class="head">
              <h1 class="text-white">Get In Touch</h1>
              <h1 class="text-warning">Would you like to, Say Hello!</h1>
              <i class="fa fa-comment fa-lg"></i>
            </div>
            <div
              class="body d-flex align-items-center justify-content-center"
              style="height: 100px"
            >
              <a
                href="mailto:tawshiq.rafi02@gmail.com"
                class="text-center text-info my-5"
                ><h1>Send An Email Now..!</h1></a
              >
            </div>

            <!-- <form>
          <label>Name</label>
          <input type="text" />
          <label>Email</label>
          <input type="email" />
          <label>Message</label>
          <textarea placeholder="Enter Your Message"></textarea>
          <button type="button">Send Message</button>
        </form> -->
          </div>
          <div class="text-center">
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

              <div class="justify-content-center" style="bottom: 0">
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
        </div>
        <div class="col-md-4 py-5" style="margin-left: 50px !important">
          <p class="text-warning h1">Would You Like To</p>
          <p class="text-info h2">Get A Free Consaltancy</p>
          <p class="text-white mt-3">
            I'm excited to discuss your web development needs. So, I offer free
            consultancy to help you navigate through the process. Whether you
            need advice on technology choices, project planning, or overall
            strategy.
            <br />
            Also, I like to talk about<br />
          </p>
          <ul class="mt-3 text-warning">
            <li>different ideas,</li>
            <li>future project planning,</li>
            <li>system architecture,</li>
            <li>planning about start-ups,</li>
            <li>discussion about solving problem,</li>
            <li>and new ways to acquire markets.</li>
          </ul>
          <p class="text-white mt-3">
            Let's have a discussion and bring up some new ideas.
            <br />
            Let's collaborate and bring your web ideas to life!
          </p>
          <button
            class="btn btn-outline-info border rounded-pill"
            href="mailto:tawshiq.rafi02@gmail.com"
          >
            Make A Call For Meeting
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    particlesLoaded() {
      // console.log("Particles container loaded", container);
    },
  },
};
</script>
<style scoped>
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  background: #a7cfdf;
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    #a7cfdf00 11%,
    #23538a00 91%
  );
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    #a7cfdf00 11%,
    #23538a00 91%
  );
  background: radial-gradient(ellipse at center, #a7cfdf 11%, #23538a 91%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a7cfdf', endColorstr='#23538a',GradientType=1 );

  font-family: Arial, Tahoma;
}

.contact {
  width: 650px;
  margin: 50px auto;
  box-shadow: 0 0 15px 3px rgba(0, 0, 0, 0.2);
  margin-left: 0;
  background-color: #00882271;
  /* border-radius: 0 0 10px 10px; */
  border-radius: 10px;
}

.contact .head {
  padding: 30px;
  background-color: #007abc71;
  color: #fefefe;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
}

.contact .head h3 {
  margin: 0;
  float: left;
  font-size: 18px;
  letter-spacing: 2px;
}

.contact .head i {
  float: right;
  color: #fefefe;
}

.contact form {
  padding: 30px;
}

.contact form label {
  display: block;
  margin-bottom: 5px;
  letter-spacing: 1px;
  color: orange !important;
}

.contact form > input {
  height: 32px;
  margin-bottom: 20px;
}

.contact form > input,
.contact form > textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #eee;
}

.contact form > textarea {
  height: 90px;
  margin-bottom: 40px;
  resize: none;
}

.contact form button {
  display: block;
  width: 80%;
  margin: auto;
  padding: 18px;
  letter-spacing: 1px;
  background: #ffc107;
  color: #fefefe;
  border: none;
  border-radius: 40px;
  -webkit-box-shadow: 0px 4px 8px rgba(165, 126, 157, 0.62);
  box-shadow: 0px 4px 8px rgba(165, 126, 157, 0.62);
  cursor: pointer;
}

.contact form > input:focus,
.contact form > textarea:focus,
.contact form button:focus {
  outline: 0;
}

.contact .head h3,
.contact form button {
  text-transform: uppercase;
}

::-webkit-input-placeholder {
  color: #d9d5d6;
}

@media (max-width: 1199px) {
  .container {
    padding: 0 10px;
  }
  .col-md-6,
  .col-md-4 {
    width: 100%;
  }
  .my-5 {
    margin-top: 0 !important;
    margin-bottom: 20px !important;
  }
  .py-5 {
    padding-top: 0 !important;
    padding-bottom: 20px !important;
  }
  .contact {
    width: auto;
    margin: 20px auto;
  }
}
</style>
