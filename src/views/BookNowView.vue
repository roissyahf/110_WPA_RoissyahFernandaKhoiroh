<template>
  <div class="book-now-page">
    <NavbarComp />
    <BookNowElements />
    <FooterComp />
  </div>
</template>

<script>
import NavbarComp from "@/components/NavbarComp.vue";
import BookNowElements from "@/components/BannerInHome.vue";
import FooterComp from "@/components/FooterComp.vue";

export default {
  name: "BookNowView",
  components: {
    NavbarComp,
    BookNowElements,
    FooterComp,
  },
};
</script>

<style>
/*BOOK NOW PAGE*/
/*Memberi gaya pada book-now*/
.book-now {
  background-color: #b9bfcd;
}
</style>