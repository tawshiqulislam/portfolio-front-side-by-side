<template>
  <nav style="position: relative; z-index: 1">
    <div class="navbar container navbar-expand-sm justify-content-center">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand" href="#" @click="toggleBack"
          ><img
            v-if="!toggleNav.includes(1)"
            :src="logoSrc"
            height="40"
            width="40" />
          <i v-else class="bi bi-arrow-left-circle-fill h1 text-warning"></i
        ></router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleMini"
        >
          <span v-if="miniOn" class="bi bi-caret-down text-white"></span>
          <span v-else class="bi bi-x-circle-fill text-white"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse mx-2" id="navbarSupportedContent">
        <ul class="navbar-nav my-nav rounded-pill">
          <li class="nav-item mx-2">
            <router-link
              to="/about"
              class="nav-link d-flex"
              href="#"
              :class="{ viewing: toggleNav[0] === 1 }"
              @click="toggleAbout"
              ><i class="bi bi-person-circle"></i
              ><span ref="btnAbout" class="link-tag mx-1"
                >About</span
              ></router-link
            >
          </li>
          <li class="nav-item mx-2">
            <router-link
              to="/expertise"
              class="nav-link d-flex"
              href="#"
              :class="{ viewing: toggleNav[1] === 1 }"
              @click="toggleExpertise"
              ><i class="bi bi-briefcase-fill"></i
              ><span ref="btnExpertise" class="link-tag mx-1"
                >Expertise</span
              ></router-link
            >
          </li>
          <li class="nav-item mx-2">
            <router-link
              to="/projects"
              class="nav-link d-flex"
              href="#"
              :class="{ viewing: toggleNav[2] === 1 }"
              @click="toggleProject"
              ><i class="bi bi-bar-chart-steps"></i
              ><span ref="btnProject" class="link-tag mx-1"
                >Project</span
              ></router-link
            >
          </li>
          <li class="nav-item mx-2">
            <router-link
              to="/blogs"
              class="nav-link d-flex"
              href="#"
              :class="{ viewing: toggleNav[3] === 1 }"
              @click="toggleBlogs"
              ><i class="bi bi-journal-text"></i
              ><span ref="btnBlogs" class="link-tag mx-1"
                >Blogs</span
              ></router-link
            >
          </li>
          <li class="nav-item mx-2">
            <router-link
              to="/contact"
              class="nav-link d-flex"
              href="#"
              :class="{ viewing: toggleNav[4] === 1 }"
              @click="toggleContact"
              ><i class="bi bi-question-circle-fill"></i
              ><span ref="btnContact" class="link-tag mx-1"
                >Contact</span
              ></router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
import logo from "./assets/image/logo.png";
export default {
  data() {
    return {
      title: "Portfolio",
      logoSrc: logo,
      toggleNav: [0, 0, 0, 0, 0],
      miniOn: true,
    };
  },
  methods: {
    toggleAbout() {
      this.toggleNav = [1, 0, 0, 0, 0];
    },
    toggleExpertise() {
      this.toggleNav = [0, 1, 0, 0, 0];
    },
    toggleProject() {
      this.toggleNav = [0, 0, 1, 0, 0];
    },
    toggleBlogs() {
      this.toggleNav = [0, 0, 0, 1, 0];
    },
    toggleContact() {
      this.toggleNav = [0, 0, 0, 0, 1];
    },
    toggleMini() {
      this.miniOn = !this.miniOn;
    },
    toggleBack() {
      this.toggleNav = [0, 0, 0, 0, 0];
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 575px) {
  .my-nav {
    padding: 2px;
    margin: 0;
    background-color: rgba(73, 73, 73, 0.596);
  }
  .link-tag {
    display: none;
  }
  .viewing .link-tag {
    display: block;
  }
}
a {
  color: rgb(153, 153, 153);
}
.viewing {
  color: rgb(231, 231, 231);
}
.nav-link {
  font-size: 1.2rem;
}
</style>
