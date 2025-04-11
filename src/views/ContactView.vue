<template>
  <vue-particles
    id="tsparticles"
    @particles-loaded="particlesLoaded"
    :options="particlesOptions"
  />
  <div class="container animate-class" :class="animationClass">
    <div class="content-wrapper">
      <!-- Contact Card Section -->
      <div class="contact-section">
        <div class="contact-card">
          <div class="contact-header">
            <h1 class="title">Get In Touch</h1>
            <h2 class="subtitle">Would you like to say Hello?</h2>
            <i class="fa fa-comment fa-2x"></i>
          </div>
          <div class="contact-action">
            <a href="mailto:tawshiq.rafi02@gmail.com" class="btn-contact">
              Send An Email Now!
            </a>
          </div>
          <div class="social-icons">
            <a
              class="social-btn"
              href="https://www.facebook.com/tawshiqulislam.rafi.3"
              target="_blank"
              ><i class="bi bi-facebook"></i
            ></a>
            <a
              class="social-btn"
              href="https://github.com/tawshiqulislam"
              target="_blank"
              ><i class="bi bi-github"></i
            ></a>
            <a
              class="social-btn"
              href="https://www.linkedin.com/in/tawshiqul-islam-rafi-417b501b9/"
              target="_blank"
              ><i class="bi bi-linkedin"></i
            ></a>
          </div>
          <footer class="contact-footer">
            <span
              >&copy; Developed By
              <a href="mailto:tawshiq.rafi02@gmail.com"
                >Tawshiqul Islam</a
              ></span
            >
          </footer>
        </div>
      </div>

      <!-- Free Consultancy Information Section -->
      <div class="info-section">
        <h1 class="info-title text-warning">Would You Like To</h1>
        <h2 class="info-subtitle text-info">Get A Free Consultancy</h2>
        <p class="info-text text-white">
          I'm excited to discuss your web development needs and offer free
          consultancy to help guide you through project planning, technology
          choices, and overall strategy.
          <br />
          Let's talk about new ideas, future project planning, system
          architecture, startup strategies, problem solving, and innovative
          market approaches.
        </p>
        <ul class="info-list text-warning">
          <li>Innovative Ideas</li>
          <li>Project Planning</li>
          <li>System Architecture</li>
          <li>Startup Strategies</li>
          <li>Problem Solving</li>
          <li>Market Expansion</li>
        </ul>
        <p class="info-text text-white">
          Let's collaborate and bring your web ideas to life!
        </p>
        <a
          href="mailto:tawshiq.rafi02@gmail.com"
          class="btn btn-outline-info rounded-pill info-btn"
        >
          Make A Call For Meeting
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      animationClass: "fade-in",
      particlesOptions: {
        background: {
          color: { value: "transparent" },
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
          },
          modes: {
            bubble: { distance: 400, duration: 2, opacity: 0.8, size: 40 },
            push: { quantity: 4 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#ffffff" },
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
            speed: 4,
            straight: false,
          },
          number: {
            density: { enable: false },
            value: 120,
          },
          opacity: { value: 0.5 },
          shape: { type: "square" },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      },
    };
  },
  methods: {
    particlesLoaded() {
      // Callback when particles have loaded (optional)
    },
    toggleAnimation() {
      // Toggle animation class if you want interactive effects on container click
      this.animationClass =
        this.animationClass === "fade-in" ? "bounce-in" : "fade-in";
    },
  },
};
</script>

<style scoped>
/* Global Resets */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Content wrapper for layout */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: auto;
}

/* Content wrapper to center the contact card and info section */
.content-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
}

/* Contact Card Section */
.contact-section {
  flex: 1 1 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.contact-card {
  background: rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  padding: 30px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  text-align: center;
}

.contact-header {
  margin-bottom: 20px;
}

.contact-header .title {
  font-size: 2.5rem;
  color: #ffffff;
}

.contact-header .subtitle {
  font-size: 1.8rem;
  color: #ffc107;
  margin: 10px 0;
}

.contact-header i {
  color: #ffffff;
  margin-top: 10px;
}

.contact-action {
  margin: 20px 0;
}

.btn-contact {
  background: #64ffda;
  color: #0a192f;
  padding: 15px 30px;
  border: none;
  border-radius: 50px;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.3s ease;
}

.btn-contact:hover {
  background: #52d0c4;
}

.social-icons {
  margin: 20px 0;
}

.social-btn {
  font-size: 1.8rem;
  margin: 0 10px;
  color: #ffc107;
  transition: color 0.3s ease;
  text-decoration: none;
}

.social-btn:hover {
  color: #64ffda;
}

.contact-footer {
  margin-top: 20px;
  font-size: 0.9rem;
  color: #ffffff;
}

.contact-footer a {
  color: #64ffda;
  text-decoration: none;
}

/* Info Section (Free Consultancy) */
.info-section {
  flex: 1 1 45%;
  padding: 20px;
  margin: 20px;
  background: rgba(0, 0, 0, 0.65);
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  color: #ffffff;
}

.info-title {
  font-size: 3rem;
  margin-bottom: 10px;
}

.info-subtitle {
  font-size: 2rem;
  margin-bottom: 20px;
}

.info-text {
  font-size: 1.1rem;
  margin-bottom: 15px;
  line-height: 1.6;
}

.info-list {
  list-style: none;
  margin: 15px 0;
  padding-left: 20px;
  font-size: 1.1rem;
}

.info-list li {
  margin-bottom: 8px;
  position: relative;
}

.info-list li::before {
  content: "✔";
  color: #64ffda;
  position: absolute;
  left: -20px;
  top: 0;
}

.info-btn {
  display: inline-block;
  margin-top: 20px;
  padding: 15px 30px;
  font-size: 1.1rem;
  border-radius: 50px;
  text-decoration: none;
  transition: background 0.3s ease;
}

/* Animation classes */
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
    opacity: 1;
    transform: scale(1);
  }
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
  }

  .contact-section,
  .info-section {
    flex: 1 1 100%;
    margin: 10px 0;
  }
}
</style>
