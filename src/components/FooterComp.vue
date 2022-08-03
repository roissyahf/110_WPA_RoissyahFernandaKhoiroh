<template>
  <!-- Footeer -->
  <section class="footer_ bg-dark">
    <footer class="container-fluid">
      <div class="row">
        <div class="col-sm-6 col-md-3 item">
          <h3>Service</h3>
          <ul>
            <li><a href="#service-1">Private Tutoring</a></li>
            <li><a href="#service-2">Memandu Pengerjaan Tugas</a></li>
          </ul>
        </div>
        <div class="col-sm-6 col-md-3 item">
          <h3>About us</h3>
          <ul>
            <li>
              <router-link class="navlink" to="/AboutView"
                >Visi Misi</router-link
              >
            </li>
            <li>
              <router-link class="navlink" to="/AboutView"
                >Tutor Kami</router-link
              >
            </li>
          </ul>
        </div>
        <div class="col-md-6 item text">
          <h3>Statmads</h3>
          <p>Mencerahkan pikiran, mengajari dengan sepenuh hati</p>
        </div>
        <a id="contact-us"></a>
        <div class="col item social">
          <a href="https://wa.me/message/CXMYUBPJQ4BVJ1" target="_blank"
            ><i class="icon ion-social-whatsapp"
              ><img src="../assets/images/icon/whatsapp_logo.svg" alt="" /></i
          ></a>
        </div>
      </div>
      <p class="copyright"><strong>Statmads © 2022</strong></p>
    </footer>
  </section>
</template>

<script>
export default {
  name: "FooterComp",
};
</script>

<style>
/*FOOTER*/
/*Memberi gaya pada footer*/
.footer_ {
  padding-left: 240px;
  padding-right: 180px;
  padding-top: 40px;
  padding-bottom: 40px;
  color: #f0f9ff;
}

.footer_ h3 {
  margin-top: 0;
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 20px;
  font-family: "Ubuntu", sans-serif;
  color: #f0f9ff;
}

.footer_ ul {
  padding: 0;
  list-style: none;
  line-height: 1.6;
  font-size: 16px;
  margin-bottom: 0;
  font-family: "Ubuntu", sans-serif;
  color: #f0f9ff;
}

.footer_ ul a {
  color: inherit;
  text-decoration: none;
  opacity: 0.6;
  font-family: "Ubuntu", sans-serif;
  color: #f0f9ff;
}

.footer_ ul a:hover {
  color: #fa812f;
}

.footer_ .item.text {
  margin-bottom: 80px;
}

.footer_ .item.text p {
  opacity: 0.6;
  margin-bottom: 0;
}

.footer_ .item.social {
  text-align: center;
}

.footer_ .item.social > a {
  width: 50px;
  height: 50px;
  line-height: 36px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(254, 245, 245, 0.4);
  margin: 0 8px;
  opacity: 0.9;
}

.footer_ .item.social > a:hover {
  opacity: 0.9;
}

.footer_ .copyright {
  text-align: center;
  padding-top: 24px;
  opacity: 0.6;
  font-size: 16px;
  margin-bottom: 0;
  color: #f0f9ff;
}
</style>