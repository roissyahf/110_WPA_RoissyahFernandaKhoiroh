<template>
  <!-- About -->
  <section class="about">
    <div class="container">
      <h2 class="fw-bolder mb-0">About Us</h2>
      <p>
        Statmads menyediakan jasa tutoring yang memiliki spesialisasi di bidang
        Statistika, Matematika, Data Analitik dan Sains Data. Layanan tutoring
        dan pemanduan tugas kami, disusun sedemikian rupa untuk mahasiswa, kami
        juga memiliki tutor yang berpengalaman di bidangnya. Dengan ambisi,
        komitmen, pengalaman, serta usaha keras kami yakin dapat memberikan
        pelayanan terbaik untuk Anda.
      </p>
    </div>
  </section>

  <!-- Service -->
  <a id="service"></a>
  <section class="service">
    <div class="container">
      <h2 class="fw-bolder mb-0">Service</h2>
      <div class="box">
        <a id="service-1"></a>
        <div class="col-2">
          <div class="icon mb-5">
            <img
              src="../assets/images/icon/guidance_icon.svg"
              height="80px"
              ,
              width="80px"
            />
          </div>
          <div class="text_service">
            <h5>Private tutoring online materi tertentu</h5>
            <p>
              Menjelaskan materi yang telah disepakati bersama dengan durasi
              tertentu di zoom. Lebih menekankan pada penjelasan secara detail
              dari tutor mengenai materi tertentu, berdiskusi, dan menanyakan
              topik bahasan yang tidak dipahami oleh mahasiswa. Tidak termasuk
              mengerjakan soal.
            </p>
          </div>
        </div>
        <a id="service-2"></a>
        <div class="col-2">
          <div class="icon mb-5">
            <img
              src="../assets/images/icon/task_icon.svg"
              height="80px"
              ,
              width="80px"
            />
          </div>
          <div class="text_service">
            <h5>Memandu dalam mengerjakan tugas</h5>
            <p>
              Bukan mengerjakan, melainkan memandu mahasiswa dalam mengerjakan
              tugas tertentu. Layanan ini tidak sama dengan layanan private
              tutoring, lebih fokus mencari penyelesaian tugas bersama-sama.
              Jika ada sesi penjelasan dari tutor, hanya sebatas mengungkit
              konsep dasar yang berkaitan dengan soal bukan penjelasan secara
              detail.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Advantages -->
  <section id="advantage" class="py-5">
    <div class="container px-5 my-5">
      <div class="row gx-5">
        <div class="col-lg-4 mb-5 mb-lg-0">
          <h2 class="fw-bolder mb-0">
            A different approach to understand lectures and solve problems
          </h2>
        </div>
        <div class="col-lg-8">
          <div class="row gx-5 row-cols-1 row-cols-md-2">
            <div class="col mb-3 h-100">
              <div
                class="feature bg-primary bg-gradient text-white rounded-3 mb-3"
              >
                <i class="bi bi-collection"></i>
              </div>
              <h2 class="h5">Tutor berkualitas</h2>
              <p class="mb-0">
                Tutor kami berpengalaman di bidangnya, sebagian dari mereka
                adalah fresh graduate yang memiliki prestasi gemilang serta
                memiliki cara mengajar yang unik dan tentunya mudah dipahami.
              </p>
            </div>
            <div class="col mb-3 h-100">
              <div
                class="feature bg-primary bg-gradient text-white rounded-3 mb-3"
              >
                <i class="bi bi-building"></i>
              </div>
              <h2 class="h5">Harga bersahabat</h2>
              <p class="mb-0">
                Terjangkau, tidak menguras dompet. Sejak awal kursus ini
                didirikan kami sengaja untuk tidak mematok harga tinggi, karena
                kami tau bahwa kondisi keuangan mahasiswa terbatas.
              </p>
            </div>
            <div class="col mb-3 h-100">
              <div
                class="feature bg-primary bg-gradient text-white rounded-3 mb-3"
              >
                <i class="bi bi-toggles2"></i>
              </div>
              <h2 class="h5">Bebas request materi</h2>
              <p class="mb-0">
                Materi tentunya masih dalam lingkup Matematika, Statistika, Data
                Analitik, dan Sains Data. Namun, anda dibebaskan untuk memilih
                materi manapun yang ingin dibahas, serta tugas apapun yang ingin
                diselesaikan bersama.
              </p>
            </div>
            <div class="col mb-3 h-100">
              <div
                class="feature bg-primary bg-gradient text-white rounded-3 mb-3"
              >
                <i class="bi bi-toggles2"></i>
              </div>
              <h2 class="h5">Dipandu sampai paham</h2>
              <p class="mb-0">
                Kami ada untuk membantu anda. Bila anda kesulitan memahami
                materi, akan kami jelaskan hingga anda paham. Bila anda tak tau
                lagi kemana harus meminta bantuan untuk mengerjakan tugas, kami
                dengan senang hati akan memandu anda.
              </p>
            </div>
            <div class="col mb-3 h-100">
              <div
                class="feature bg-primary bg-gradient text-white rounded-3 mb-3"
              >
                <i class="bi bi-collection"></i>
              </div>
              <h2 class="h5">Beragam paket tersedia</h2>
              <p class="mb-0">
                Terdapat 4 pilihan paket belajar menarik yang dapat anda pilih,
                bila kurang sesuai anda dapat memilih paket custom sesuai dengan
                kebutuhan anda.
              </p>
            </div>
            <div class="col mb-3 h-100">
              <div
                class="feature bg-primary bg-gradient text-white rounded-3 mb-3"
              >
                <i class="bi bi-toggles2"></i>
              </div>
              <h2 class="h5">Waktu fleksibel</h2>
              <p class="mb-0">
                Jadwal belajar anda pilih sendiri. Seusai kuliah? sepulang
                kerja? akhir pekan? siang hari?, kami siap membantu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeElements",
};
</script>

<style>
/*ADVANTAGES*/
/*Mengatur gaya pada advantages*/
.advantage .col mb-3 h-100 h5 {
  text-align: center;
}

.advantage .col mb-3 h-100 mb-0 {
  text-align: justify;
}

.advantage {
  background-color: #b9bfcd;
}

/*SERVICE*/
/*Mengatur gaya pada service*/
.service {
  background-color: #fcfdff;
}

.box:after {
  content: "";
  display: block;
  clear: both;
}

.box .col-2 {
  width: 50%;
  padding: 20px;
  box-sizing: border-box;
  float: left;
}

.box .col-2 .h5 {
  float: left;
  margin: 10px 0;
  color: #2f3c7e;
  text-align: center;
  margin: 5px;
}

.box .col-2 .p {
  text-align: justify;
}

.box .col-2 .icon {
  border-radius: 50%;
  text-align: center;
  line-height: 70px;
  font-size: 20px;
  margin: 0 auto;
}

/*TESTIMONI*/
/*Mengatur gaya pada testi*/
.testi {
  background-color: #fcfdff;
}

/*Memberi gaya pada testimoni*/
@import url("https://fonts.googleapis.com/css2?family=Arvo&family=Open+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");

.customer-revs {
  margin: 0 auto 0 auto;
}

.rectangle {
  width: 40%;
  height: 100vh;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
}

/* slideshow container */
.slideshow-container {
  position: relative;
  width: 60rem;
  max-width: 80%;
  margin: 0 auto;
}

/* Slides */
.mySlides {
  display: none;
  padding: 2rem 5rem 0 5rem;
  text-align: center;
}

.mySlidesContainer {
  min-height: 5rem;
  padding: 3.5rem 2.5rem 2rem 3.5rem;
  background: #b9bfcd;
}

/* next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 55%;
  width: auto;
  margin-top: -1.875rem;
  padding: 1rem;
  color: #232323;
  font-weight: bold;
  font-size: 3rem;
  border-radius: 3px;
  user-select: none;
  transition: 0.4s;
}

/* position the "next button" to the right */
.next {
  position: absolute;
  right: 0;
  border-radius: 3px;
}

/* on hover, add a black bg color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: #000;
  /* fallback color */
  background-color: rgba(0, 0, 0, 0.8);
  color: #f6eac1;
  text-decoration: none;
}

/* the dot/bullet/indicator container */
.dot-container {
  text-align: center;
  padding: 0 1.25rem;
}

/* the dots/bullets/indicators */
.dot {
  height: 0.9375rem;
  width: 0.9375rem;
  margin: 0 2px;
  background-color: #232323;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.4s ease;
}

/* add bg color to the active dot/circle */
.active {
  background-color: #fa812f;
}
</style>