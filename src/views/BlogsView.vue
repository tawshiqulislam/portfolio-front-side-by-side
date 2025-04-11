<template>
  <div class="blog-container">
    <!-- Particles background -->
    <vue-particles
      id="tsparticles"
      @particles-loaded="particlesLoaded"
      :options="particlesOptions"
    />

    <!-- Blog content -->
    <div class="container blog-content mt-2" :class="animationClass">
      <div class="row d-flex justify-content-around">
        <div class="col-md-12 text-right text-white">
          <h1 class="text-warning">BLOGS</h1>
          <h3 class="text-white">TECH INSIGHTS</h3>
        </div>
      </div>

      <!-- Blog Cards Carousel -->
      <Carousel
        v-bind="settings"
        :breakpoints="breakpoints"
        :autoplay="3500"
        :wrap-around="true"
        :transition="500"
      >
        <Slide v-for="blog in blogs" :key="blog.id">
          <div class="blog-card">
            <div class="blog-image-container">
              <img class="blog-image" :src="blog.image" :alt="blog.name" />
              <div class="blog-overlay">
                <div class="blog-actions">
                  <button
                    @click="openBlogDetails(blog)"
                    class="action-btn read-btn"
                  >
                    <i class="fas fa-book-open"></i> Read More
                  </button>
                </div>
              </div>
            </div>
            <div class="blog-info">
              <div class="blog-meta">
                <span class="blog-date"
                  ><i class="far fa-calendar-alt"></i> 2 May 2023</span
                >
                <span class="blog-category text-warning">{{ blog.name }}</span>
              </div>
              <p class="blog-excerpt">
                {{ truncate(blog.description, 120) }}
              </p>

              <!-- Tags section -->
              <div class="blog-tags">
                <span
                  class="blog-tag"
                  v-for="(tag, idx) in blog.tags"
                  :key="idx"
                >
                  {{ tag }}
                </span>
              </div>

              <div class="blog-actions mt-4 mb-2">
                <button
                  @click.stop="openBlogDetails(blog)"
                  class="action-btn details-btn"
                >
                  <i class="fas fa-info-circle"></i> Read Full Article
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

    <!-- Blog Details Modal -->
    <div class="modal-overlay" v-if="selectedBlog" @click="closeBlogDetails">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeBlogDetails">×</button>

        <div class="modal-header">
          <h2>{{ selectedBlog.name }}</h2>
          <div class="modal-meta">
            <span class="modal-date"
              ><i class="far fa-calendar-alt"></i> 2 May 2023</span
            >
          </div>
        </div>

        <div class="modal-body">
          <img
            class="modal-image"
            :src="selectedBlog.image"
            :alt="selectedBlog.name"
          />

          <div class="modal-details">
            <div class="modal-text">
              <p>{{ selectedBlog.fullDescription }}</p>
            </div>

            <div class="modal-tags">
              <h4>Topics</h4>
              <div class="tags-stack">
                <span
                  class="tag-badge"
                  v-for="(tag, idx) in selectedBlog.tags"
                  :key="idx"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <a href="#" class="modal-btn">
            <i class="fas fa-share-alt"></i> Share Article
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

export default defineComponent({
  name: "BlogSection",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      animationClass: "fade-in",
      selectedBlog: null,
      // Carousel settings
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      // Responsive breakpoints
      breakpoints: {
        400: {
          itemsToShow: 1.5,
          snapAlign: "center",
        },
        700: {
          itemsToShow: 2.5,
          snapAlign: "center",
        },
        1200: {
          itemsToShow: 3.5,
          snapAlign: "center",
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
      // Blog data
      blogs: [
        {
          id: 1,
          image:
            "https://cdn.hashnode.com/res/hashnode/image/unsplash/-JzHSIzNYnU/upload/v1646955186227/y68UwulGf.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
          name: "Debouncing in Javascript",
          description:
            "While designing web applications, we need to optimize for certain scenarios, where we don't want to trigger functions on every user interaction to avoid performance issues...",
          fullDescription:
            "Debouncing is a programming pattern that delays the execution of a function until after a certain amount of time has passed since the last time it was invoked. This is particularly useful when handling events that might fire rapidly, such as scrolling, resizing, or keypress events.\n\nIn JavaScript, debouncing can be implemented using setTimeout() and clearTimeout(). The basic idea is to delay the execution of a function and reset the timer every time the function is called within the specified delay period.\n\nBy applying debouncing to event handlers, you can significantly improve the performance of your web applications, especially in cases where computationally expensive operations are involved.",
          tags: ["#JavaScript", "#Optimization", "#FrontEnd"],
        },
        {
          id: 2,
          image:
            "https://cdn.hashnode.com/res/hashnode/image/unsplash/3oyeaivM_fE/upload/v1646922424716/HKxG0vcU9r.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
          name: "How to make your Javascript Functions sleep?",
          description:
            "We may encounter some scenarios where we have to pause the execution of a function for some fixed amount of time. Let's explore how to implement this behavior...",
          fullDescription:
            "In JavaScript, there are several ways to pause or delay the execution of code. The most common approach is using setTimeout(), which allows you to schedule a function to run after a specified delay. However, this approach is asynchronous and doesn't actually pause the execution flow.\n\nWith the introduction of async/await in modern JavaScript, we can create a sleep() function that actually pauses execution within an async function. This provides a more readable and maintainable way to introduce delays in your code without complex callback structures.\n\nThe sleep function is particularly useful for rate limiting API calls, creating animations with precise timing, or implementing retry mechanisms with exponential backoff strategies.",
          tags: ["#Functions", "#JavaScript", "#AsyncAwait"],
        },
        {
          id: 3,
          image:
            "https://cdn.hashnode.com/res/hashnode/image/unsplash/9AxFJaNySB8/upload/v1646489177564/dK8GXDM3T.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
          name: "Pipe and compose in Javascript",
          description:
            "Pipe and Compose are Higher Order Functions. These are ways of chaining operations together in a more readable and maintainable approach, leveraging functional programming concepts...",
          fullDescription:
            "Pipe and compose are functional programming concepts that allow you to combine multiple functions into a single function. The difference between them is the order in which the functions are executed.\n\nPipe executes functions from left to right (first to last), while compose executes functions from right to left (last to first). Both approaches promote code reusability, improve readability, and help in creating more maintainable code by breaking down complex operations into smaller, focused functions.\n\nThese patterns are extensively used in functional programming libraries like Ramda and Lodash/fp, but you can easily implement them yourself to enhance your JavaScript code quality and expressiveness.",
          tags: ["#FunctionalProgramming", "#JavaScript", "#PipeCompose"],
        },
        {
          id: 4,
          image:
            "https://cdn.hashnode.com/res/hashnode/image/upload/v1633086447615/A4pTrNzPT.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
          name: "Find out how many times a function has been invoked",
          description:
            "Question: We've the following function greet, we need to find out how many times this function has been called. This is a common interview question exploring closure concepts...",
          fullDescription:
            "This is a classic JavaScript interview question that tests your understanding of closures, one of the most powerful features of JavaScript. A closure is formed when a function remembers and accesses variables from its outer scope even after that scope has closed.\n\nTo track how many times a function has been called, we can use a closure to maintain a counter variable. This counter persists between function calls because it's captured in the closure's scope.\n\nThis pattern is useful for various scenarios, including memoization, throttling and debouncing implementations, and creating stateful functions without relying on external variables or global state.",
          tags: ["#InterviewQuestions", "#JavaScript", "#Closure"],
        },
        {
          id: 5,
          image:
            "https://cdn.hashnode.com/res/hashnode/image/unsplash/phIFdC6lA4E/upload/v1646726648188/tf64eqSdC.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
          name: "What are CSS-Variables?",
          description:
            "Overview and History: Initially CSS lacked support for native variables, which led developers to turn to preprocessors. Now CSS has native variable support through custom properties...",
          fullDescription:
            "CSS variables, officially known as CSS custom properties, are entities defined by developers that contain specific values to be reused throughout a document. They are set using custom property notation (e.g., --main-color: blue;) and are accessed using the var() function (e.g., color: var(--main-color);).\n\nBefore CSS variables were widely supported, developers had to rely on preprocessors like Sass or Less to achieve similar functionality. However, CSS variables offer distinct advantages: they're native to the browser, can be updated dynamically with JavaScript, and they cascade, following the same inheritance and specificity rules as other CSS properties.\n\nCSS variables are particularly powerful for theme switching, maintaining consistent design systems, and reducing code duplication across large stylesheets.",
          tags: ["#CSS", "#WebDesign", "#FrontEnd"],
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
    openBlogDetails(blog) {
      this.selectedBlog = blog;
      document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
    },
    closeBlogDetails() {
      this.selectedBlog = null;
      document.body.style.overflow = ""; // Restore scrolling
    },
  },
});
</script>

<style scoped>
/* Import Font Awesome for icons */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");

.blog-container {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.blog-content {
  position: relative;
  z-index: 1;
}

/* Blog Card Styling */
.blog-card {
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

.blog-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(100, 255, 218, 0.2);
  border-color: rgba(100, 255, 218, 0.3);
}

/* Image container */
.blog-image-container {
  position: relative;
  overflow: hidden;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.blog-image {
  max-width: 100%;
  max-height: 100%;
  -o-object-fit: contain;
  object-fit: contain;
  transition: transform 0.5s ease;
}

.blog-card:hover .blog-image {
  transform: scale(1.1);
}

/* Enhanced overlay with button */
.blog-overlay {
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

.blog-card:hover .blog-overlay {
  opacity: 1;
}

.blog-actions {
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

.read-btn {
  background: transparent;
  color: #64ffda;
  box-shadow: inset 0 0 0 2px #64ffda;
}

.read-btn:hover {
  background: #64ffda;
  color: #0a192f;
}

.blog-info {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  font-size: 0.8rem;
}

.blog-date {
  color: #a8b2d1;
  font-style: italic;
}

.blog-category {
  font-size: 1.1rem;
  font-weight: 600;
  color: #64ffda;
}

.blog-excerpt {
  font-size: 0.9rem;
  color: #a8b2d1;
  line-height: 1.6;
  flex-grow: 1;
}

.blog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 1rem;
}

.blog-tag {
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}

/* Modal styling for blog details */
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
  /* animation: modalTranform 0.3s ease-out; */
}

@keyframes modalTranform {
  from {
    opacity: 0;
    transform: translateY(-20px);
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

.modal-meta {
  display: flex;
  align-items: center;
  margin-top: 5px;
}

.modal-date {
  margin-left: 1rem;
  color: #a8b2d1;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 5px;
}

.modal-body {
  padding: 30px;
}

.modal-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
}

.modal-details {
  color: #a8b2d1;
}

.modal-text {
  line-height: 1.7;
  margin-bottom: 20px;
}

.modal-text p {
  margin-bottom: 15px;
}

.modal-tags h4 {
  color: #ccd6f6;
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.tags-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag-badge {
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  border: 1px solid rgba(100, 255, 218, 0.2);
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
  display: inline-flex;
  align-items: center;
  gap: 8px;
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
  .blog-card {
    height: 420px;
  }

  .modal-content {
    width: 95%;
  }

  .modal-header h2 {
    font-size: 1.5rem;
  }
}

@media (max-width: 576px) {
  .blog-card {
    height: 400px;
  }

  .blog-excerpt {
    font-size: 0.8rem;
  }

  .blog-actions {
    flex-direction: column;
    gap: 8px;
  }

  .modal-image {
    height: 200px;
  }
}
</style>
