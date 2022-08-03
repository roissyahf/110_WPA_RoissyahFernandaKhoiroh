<template>
  <!-- Carousel Banner -->
  <section class="banner">
    <div class="container">
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img
              src="../assets/images/banner/banner_online_learning.jpg"
              class="d-block w-100"
              height="560px"
              ,
              width="280px"
            />
            <div class="carousel-caption d-none d-md-block">
              <span class="highlight">
                <h5><strong>Kami hadir untuk membantu anda</strong></h5>
                <p>
                  Kesulitan memahami materi? Pusing mengerjakan tugas? Tenang
                  ada kami
                </p>
              </span>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src="../assets/images/banner/banner_math.jpg"
              class="d-block w-100"
              height="560px"
              ,
              width="280px"
            />
            <div class="carousel-caption d-none d-md-block">
              <span class="highlight">
                <h5><strong>Pertimbangan untuk memilih kami</strong></h5>
                <p>
                  Berpengalaman tutornya, asyik cara mengajarnya, memuaskan pula
                  pelayanannya
                </p>
              </span>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src="../assets/images/banner/banner_data.jpg"
              class="d-block w-100"
              height="560px"
              ,
              width="280px"
            />
            <div class="carousel-caption d-none d-md-block">
              <span class="highlight">
                <h5><strong>Tunggu apa lagi?</strong></h5>
                <p>Yuk scroll down, lihat profil kami, dan hubungi kami ya</p>
              </span>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BannerInHome",
};
</script>

<style>
/*BANNER DI HOME*/
/*Mengatur gaya pada header*/
.banner {
  background-color: #fcfdff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cg fill='%23232323' fill-opacity='0.44'%3E%3Cpath fill-rule='evenodd' d='M5 3.59L1.46.05.05 1.46 3.59 5 .05 8.54l1.41 1.41L5 6.41l3.54 3.54 1.41-1.41L6.41 5l3.54-3.54L8.54.05 5 3.59zM17 2h24v2H17V2zm0 4h24v2H17V6zM2 17h2v24H2V17zm4 0h2v24H6V17z'/%3E%3C/g%3E%3C/svg%3E");
}

.banner .carousel-inner {
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
}

.banner:after {
  content: "";
}

.highlight {
  display: inline-block;
  padding: 0.3em 0.3em;
  background: #fa812f;
  color: #ffffff;
  word-spacing: 2px;
  position: relative;
}

.highlight h5 {
  text-align: center;
}
</style>