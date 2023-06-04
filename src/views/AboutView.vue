<template>
  <div class="container">
    <div class="row d-flex justify-content-around mt-2">
      <div class="col-md-12 text-right text-white">
        <h1 class="text-warning">About</h1>
        <h1 class="text-white">Learn More About Me</h1>
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
</template>

<script>
import author from "../assets/image/author-image-home.jpg";
export default {
  data() {
    return {
      userData: {
        authorName: "Jhon Smith",
        homeMsg: [
          "Welcome to my personal website! As a civil engineer, I have a passion for designing and building structures that improve people’s lives. On this website, you’ll find information about my experience and skills, as well as examples of my work.",
          "Whether you’re looking to hire a civil engineer for your next project or just want to learn more about the field, I hope you find this website informative and engaging. Thank you for visiting!",
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
