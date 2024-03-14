import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/main.css";
import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles";

// createApp(App).use(router).mount("#app");

// Create the Vue.js app instance
const app = createApp(App);

// Use the router
app.use(router);

// Mount the app to the DOM element with the id 'app'
app.mount("#app");

// Initialize Particles plugin
app.use(Particles, {
  init: async (engine) => {
    await loadFull(engine);
  },
});

import "bootstrap/dist/js/bootstrap.js";
