<template>
  <section class="banner">
    <div class="container">
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="../img/banner/banner_online_learning.jpg" class="d-block w-100" height="560px" , width="280px">
            <div class="carousel-caption d-none d-md-block">
              <span class="highlight">
                <h5><strong>Kami hadir untuk membantu anda</strong></h5>
                <p>Kesulitan memahami materi? Pusing mengerjakan tugas? Tenang ada kami</p>
              </span>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="../img/banner/banner_math.jpg" class="d-block w-100" height="560px" , width="280px">
            <div class="carousel-caption d-none d-md-block">
              <span class="highlight">
                <h5><strong>Pertimbangan untuk memilih kami</strong></h5>
                <p>Berpengalaman tutornya, asyik cara mengajarnya, memuaskan pula pelayanannya</p>
              </span>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="../img/banner/banner_data.jpg" class="d-block w-100" height="560px" , width="280px">
            <div class="carousel-caption d-none d-md-block">
              <span class="highlight">
                <h5><strong>Tunggu apa lagi?</strong></h5>
                <p>Yuk scroll down, lihat profil kami, dan hubungi kami ya</p>
              </span>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
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
}
</script>

<style>

</style>