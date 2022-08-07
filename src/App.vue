<template>
  <!-- <div id="app">
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/pricing">Pricing</router-link>
    <router-link to="/booking">Booking</router-link>
    <router-link to="/blog">Blog</router-link>
  </div> -->
  
  <router-view />
</template>

<script>

</script>

<style>
@charset "UTF-8";

/*FONT STYLE*/
/*Asset Regular 400*/
@import url("https://fonts.googleapis.com/css2?family=Asset&display=swap");
/*Ubuntu Regular 400*/
@import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");
/* Poppins Black 900*/
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap");

/*Keseluruhan gaya*/
#app {
  padding: 0;
  margin: 0;
  font-family: "Ubuntu", sans-serif;
  font-size: large;
  text-align: justify;
}

/*CONTAINER*/
/*Mengatur gaya pada container*/
.container {
  width: 80%;
  margin: 0 auto;
}

.container:after {
  content: "";
  display: block;
  clear: both;
}

/*KESELURUHAN SECTION*/
/*Mengatur gaya section secara keseluruhan*/
section {
  padding: 50px;
}

section h2 {
  text-align: center;
  padding: 20px 0;
  color: #ff7b19;
  margin-bottom: 20px;
}
</style>
