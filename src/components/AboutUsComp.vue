<template>
  <!-- Section pengenalan singkat -->
  <section class="perkenalan-singkat">
    <div class="container px-5">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-xxl-6">
          <div class="text-center my-5">
            <h2 class="fw-bolder mb-3">Brief Introduction</h2>
            <p class="lead fw-normal text-muted mb-4">
              Statmads menyediakan jasa tutoring yang memiliki spesialisasi di
              bidang Statistika, Matematika, Data Analitik dan Sains Data.
              Layanan tutoring dan pemanduan tugas kami, disusun sedemikian rupa
              untuk mahasiswa, kami juga memiliki tutor yang berpengalaman di
              bidangnya. Dengan ambisi, komitmen, pengalaman, serta usaha keras
              kami yakin dapat memberikan pelayanan terbaik untuk Anda.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Visi Misi-->
  <a id="visi-misi"></a>
  <section class="visi-misi" id="scroll-target">
    <div class="container px-5 my-5">
      <div class="row gx-5 align-items-center">
        <div class="col-lg-6">
          <h2 class="fw-bolder">Our Vision and Mission</h2>
          <ul class="lead fw-normal text-muted mb-0">
            <li>
              Kami hadir untuk meringankan beban mahasiswa yang kesulitan dalam
              memahami Statistika, Matematika, Data Analitik dan Sains Data,
              serta kebingungan dalam mengerjakan tugas.
            </li>
            <li>
              Bukan joki tugas, kami mengajak anda untuk bersama-sama berpikir
              dan berjuang dalam mencari alternatif penyelesaian masalah.
            </li>
            <li>
              Kami berupaya untuk mengedukasi kaum muda untuk tidak bergantung
              pada joki tugas, dengan cara menyediakan tutor berpengalaman yang
              siap mengulurkan tangan. Harapannya melalui tindakan sederhana
              ini, kami turut berkontribusi dalam membentuk generasi muda yang
              tangguh, serta tidak terpaku pada hal instan karena semuanya butuh
              proses, waktu, dan tenaga.
            </li>
          </ul>
        </div>
        <div class="col-lg-6">
          <img
            class="img-fluid rounded mb-5 mb-lg-0"
            src="../assets/images/statmads_logo.png"
            alt="statmads-logo"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- Out Tutor-->
  <a id="tutor-kami"></a>
  <section class="tutor">
    <div class="container px-5 my-5">
      <div class="text-center">
        <h2 class="fw-bolder">Some of Our Tutors</h2>
        <p class="lead fw-normal text-muted mb-5">
          Dedicated to guide you, bringing back light to the confusing ones.
        </p>
      </div>
      <div
        class="
          row
          gx-5
          row-cols-1 row-cols-sm-2 row-cols-xl-4
          justify-content-center
        "
      >
        <div class="col mb-5 mb-5 mb-xl-0">
          <div class="text-center">
            <img
              class="img-fluid rounded-circle mb-4 px-4"
              src="../assets/images/vector/syakiela.jpg"
              height="360px"
              width="360px"
            />
            <h5 class="fw-bolder">Syakiela Azzahda Soejone</h5>
            <div class="fst-italic text-muted">
              Fresh graduate of Statistics. Top finalist of "Financial Data
              Challenge 2021" held by Bank Go. Actively writing articles in her
              medium account, specializing in Python, and SQL.
            </div>
          </div>
        </div>
        <div class="col mb-5 mb-5 mb-xl-0">
          <div class="text-center">
            <img
              class="img-fluid rounded-circle mb-4 px-4"
              src="../assets/images/vector/reiki.jpg"
              height="360px"
              width="360px"
            />
            <h5 class="fw-bolder">Reiki Savian Altezza</h5>
            <div class="fst-italic text-muted">
              Fresh graduate of Mathematic. Experienced in tutoring for more
              than 2 years, best paper of "Be Educative, Intellectual,
              Competitve Generation with Mathematic" held by University XYZ
            </div>
          </div>
        </div>
        <div class="col mb-5 mb-5 mb-sm-0">
          <div class="text-center">
            <img
              class="img-fluid rounded-circle mb-4 px-4"
              src="../assets/images/vector/kaila.png"
              height="360px"
              width="360px"
            />
            <h5 class="fw-bolder">Kaila Sherly Arabelle</h5>
            <div class="fst-italic text-muted">
              Third year student majoring Economic. Content writer at "Talked
              About Econometrics". Excellent in analyzing data using SPSS,
              Eviews, STATA also able to give solid intrepretation and
              explanation about certain topics.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutUsComp",
};
</script>

<style>
/*ABOUT US SECTION IN HOME*/
/*Mengatur gaya pada About*/
.about {
  background-color: #b9bfcd;
}

.about p {
  word-spacing: 2px;
  line-height: 25px;
  text-align: justify;
}
</style>