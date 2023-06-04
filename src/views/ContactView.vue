<template>
  <div class="container">
    <div class="row d-flex justify-content-around">
      <div class="col-md-6">
        <div class="contact">
          <div class="head">
            <h1 class="text-white">Get In Touch</h1>
            <h1 class="text-warning">Would you like to, Say Hello!</h1>
            <i class="fa fa-comment fa-lg"></i>
          </div>
          <form>
            <label>Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" />
            <label>Message</label>
            <textarea placeholder="Enter Your Message"></textarea>
            <button type="button">Send Message</button>
          </form>
        </div>
      </div>
      <div class="col-md-4 my-5 py-5" style="margin-left: 50px !important">
        <p class="text-warning h1">Would You Like To</p>
        <p class="text-white h2">Get A Free Consaltancy</p>
        <p class="text-white mt-3">
          I'm excited to discuss your web development needs. So, I offer free
          consultancy to help you navigate through the process. Whether you need
          advice on technology choices, project planning, or overall strategy.
          <br />
          <br />
          Let's collaborate and bring your web ideas to life!
        </p>
        <button class="btn btn-outline-info border rounded-pill">
          Make A Call For Meeting
        </button>
      </div>
    </div>
  </div>
</template>
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
}

.contact .head {
  padding: 30px;
  background-color: #00184f00;
  color: #fefefe;
  overflow: hidden;
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
  width: 620px;
  background-color: transparent;
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
  background: #00184f;
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
</style>
