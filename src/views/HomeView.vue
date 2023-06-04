<template>
  <div class="container my-5">
    <div class="row d-flex justify-content-around pb-5">
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
            <a href="#" class="btn btn-warning rounded-pill">Get Resume</a>
            <a href="#" class="btn btn-outline-warning rounded-pill mx-5"
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
      <div class="col-md-1 d-flex links text-center">
        <div class="col mt-5">
          <a class="btn btn-floating m-1" href="#!" role="button"
            ><i class="bi bi-facebook text-warning"></i
          ></a>

          <!-- Twitter -->
          <a class="btn btn-floating m-1" href="#!" role="button"
            ><i class="bi bi-github text-warning"></i
          ></a>

          <!-- Google -->
          <a class="btn btn-floating m-1" href="#!" role="button"
            ><i class="bi bi-linkedin text-warning"></i
          ></a>

          <!-- Instagram -->
          <a class="btn btn-floating m-1" href="#!" role="button"
            ><i class="bi bi-instagram text-warning"></i
          ></a>

          <!-- Linkedin -->
          <a class="btn btn-floating m-1" href="#!" role="button"
            ><i class="bi bi-twitter text-warning"></i
          ></a>

          <!-- Github -->
          <a class="btn btn-floating m-1" href="#!" role="button"
            ><i class="bi bi-behance text-warning"></i
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

  <footer class="text-center text-white">
    <!-- Grid container -->
    <div class="container p-4 pb-0">
      <!-- Section: Social media -->
      <section class="mb-4">
        <!-- Facebook -->
        <a class="btn btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-facebook"></i
        ></a>

        <!-- Twitter -->
        <a class="btn btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-github"></i
        ></a>

        <!-- Google -->
        <a class="btn btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-linkedin"></i
        ></a>

        <!-- Instagram -->
        <a class="btn btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-instagram"></i
        ></a>

        <!-- Linkedin -->
        <a class="btn btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-twitter"></i
        ></a>

        <!-- Github -->
        <a class="btn btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-behance"></i
        ></a>
      </section>

      <div
        class="justify-content-center"
        style="display: flex; flex-direction: column"
      >
        <span
          >&copy; Developed By
          <a href="" class="text-white">Texon Limited</a></span
        >
        <span
          >&copy; Maintained By <a href="" class="text-white">OREZO</a></span
        >
      </div>

      <!-- Section: Social media -->
    </div>
    <!-- Grid container -->
  </footer>
</template>

<script>
import author from "../assets/image/author-image-home.jpg";
export default {
  data() {
    return {
      userData: {
        authorName: "Mr. X",
        homeMsg:
          " As a passionate full-stack web developer with a knack for creating stunning and functional websites. Have a strong foundation in both front-end and back-end development, I bring a holistic approach to every project I undertake.",
        authorImg: author,
      },
    };
  },
};
</script>

<style scoped>
@media (max-width: 768px) {
  .links .follow-me {
    display: none;
  }
}
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
  height: 380px;
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
</style>
