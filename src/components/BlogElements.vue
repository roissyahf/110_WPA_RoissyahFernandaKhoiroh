<template>
  <!-- Blog preview -->
  <section class="blog">
    <div class="container px-5 my-5">
      <div class="row gx-5 justify-content-center">
        <div class="col-lg-8 col-xl-6">
          <div class="text-center">
            <h2 class="fw-bolder">From our blog</h2>
            <p class="lead fw-normal text-muted mb-5">Membahas artikel seputar Matematika, Statistika, Data Analitik,
              Sains Data dengan penjelasan yang mudah dipahami.</p>
          </div>
        </div>
      </div>
      <div class="row gx-5">
        <div class="col-lg-4 mb-5">
          <div class="card h-100 shadow border-0">
            <img class="card-img-top" src="../assets/images/article/article-1.jpg" alt="..." />
            <div class="card-body p-4">
              <div class="badge bg-primary bg-gradient rounded-pill mb-2">Statistika</div>
              <a class="text-decoration-none link-dark stretched-link" href="#!">
                <h5 class="card-title mb-3">Ayo Gunakan Statistika Secara Bijak</h5>
              </a>
              <p class="card-text mb-0">Panduan singkat tentang cara yang benar untuk mengevaluasi average, chart,
                hingga presentase untuk memberikan pendapat yang akurat berdasarkan data dan fakta.</p>
            </div>
            <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
              <div class="d-flex align-items-end justify-content-between">
                <div class="d-flex align-items-center">
                  <img class="rounded-circle me-3" src="../assets/images/vector/syakiela.jpg" height="40px" width="40px" />
                  <div class="small">
                    <div class="fw-bold">Syakiela Azzahda Soejone</div>
                    <div class="text-muted">4 Agustus 2022 &middot; 4 min read</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-5">
          <div class="card h-100 shadow border-0">
            <img class="card-img-top" src="../assets/images/article/article-2.png" alt="..." />
            <div class="card-body p-4">
              <div class="badge bg-danger bg-gradient rounded-pill mb-2">Sains Data</div>
              <a class="text-decoration-none link-dark stretched-link" href="#!">
                <h5 class="card-title mb-3">Konsep Precision, Recall, Accuracy, dan Specificity</h5>
              </a>
              <p class="card-text mb-0">Mari belajar lebih dalam tentang 4 konsep matriks evaluasi tersebut, cara
                menghitungnya di Python, sekaligus penerapannya di dunia nyata.</p>
            </div>
            <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
              <div class="d-flex align-items-end justify-content-between">
                <div class="d-flex align-items-center">
                  <img class="rounded-circle me-3" src="../assets/images/vector/fernanda.jpg" height="40px" width="40px" />
                  <div class="small">
                    <div class="fw-bold">Fernanda Daisy</div>
                    <div class="text-muted">12 Agustus 2022 &middot; 6 min read</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-5">
          <div class="card h-100 shadow border-0">
            <img class="card-img-top" src="../assets/images/article/article-3.png" alt="..." />
            <div class="card-body p-4">
              <div class="badge bg-info bg-gradient rounded-pill mb-2">Matematika</div>
              <a class="text-decoration-none link-dark stretched-link" href="#!">
                <h5 class="card-title mb-3">Soal dan Pembahasan Pemograman Integer</h5>
              </a>
              <p class="card-text mb-0">2 Soal dan pembahasan berikut akan membahas tentang cara mencari penyelesaian
                integer optimal menggunakan Metode Gomory serta Metode Cabang dan Batas.</p>
            </div>
            <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
              <div class="d-flex align-items-end justify-content-between">
                <div class="d-flex align-items-center">
                  <img class="rounded-circle me-3" src="../assets/images/vector/reiki.jpg" height="40px" width="40px" />
                  <div class="small">
                    <div class="fw-bold">Reiki Savian Altezza</div>
                    <div class="text-muted">24 Agustus 2022 &middot; 10 min read</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "BlogElements",
}
</script>

<style>
</style>