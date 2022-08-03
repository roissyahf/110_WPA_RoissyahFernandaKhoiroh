<template>
  <!-- Book Now -->
  <section class="book-now">
    <div class="container px-5 my-5">
      <h2 class="fw-bolder mb-0">Book Now</h2>
      <div class="row gx-5">
        <div class="col-xl-8">
          <div class="col-md-12 col-sm-6">
            <label for="exampleFormControlInput1" class="form-label">Nama Lengkap</label>
            <input class="form-control" id="name" type="text" placeholder="Enter your name..."
              data-sb-validations="required" />
            <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
          </div>
          <div class="col-md-12 col-sm-6">
            <label for="exampleFormControlInput1" class="form-label">Alamat Email</label>
            <input class="form-control" id="email" type="email" placeholder="name@example.com"
              data-sb-validations="required,email" />
            <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
          </div>
          <div class="col-md-12 col-sm-6">
            <label for="exampleFormControlInput1" class="form-label">No. Handphone</label>
            <input class="form-control" id="phone" type="tel" placeholder="(+62)..." data-sb-validations="required" />
            <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
          </div>
          <div class="col-md-12 col-sm-6">
            <label for="exampleFormControlInput1" class="form-label">Pilih Paket</label>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
              <label class="form-check-label" for="flexRadioDefault1">
                1400 kandela
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
              <label class="form-check-label" for="flexRadioDefault2">
                2400 kandela
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
              <label class="form-check-label" for="flexRadioDefault2">
                4400 kandela
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
              <label class="form-check-label" for="flexRadioDefault2">
                7400 kandela
              </label>
            </div>
          </div>
          <div class="col-md-12 col-sm-6">
            <label for="exampleFormControlTextarea1" class="form-label">Tambahan</label>
            <textarea class="form-control" id="message" type="text"
              placeholder="Halo Kak, saya bingung memahami materi matkul Pengantar Statistika Matematis, khususnya teknik CDF dan Metode Transformasi. Saya ingin penjelasan detail dari tutor, mulai dari konsep dasar tentunya."
              style="height: 10rem" data-sb-validations="required"></textarea>
            <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
          </div>
          <button type="button" class="btn btn-secondary btn-lg btn-warning">Submit</button>
        </div>
        <div class="col-xl-4 col-sm-6">
          <div class="card border-warning bg-light mt-xl-5">
            <div class="card-body p-4 py-lg-5">
              <div class="d-flex align-items-center justify-content-center">
                <div class="text-center">
                  <div class="h6 fw-bolder">Masih ragu memesan layanan kami?</div>
                  <p class="text-muted mb-4">
                    Hilangkan keraguan anda dengan menghubungi kami secara langsung di
                </p>
                  <div class="col item social">
                    <a href="https://wa.me/message/CXMYUBPJQ4BVJ1" target="_blank"><i
                        class="icon ion-social-whatsapp"><img src="../assets/images/icon/whatsapp_logo.svg" height="40px"
                          width="40px"></i></a>
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
  name: "BookNowElements",
};
</script>

<style>
</style>