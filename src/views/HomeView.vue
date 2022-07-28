<template>
  <div class="homepage">
    <NavbarComp />
    <BannerInHome />
    <HomeElements />
    <FooterComp />
  </div>
</template>

<script>
import NavbarComp from '@/components/NavbarComp.vue'
import BannerInHome from '@/components/BannerInHome.vue'
import HomeElements from '@/components/HomeElements.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
  name: "HomeView",
  components: {
    NavbarComp,
    BannerInHome,
    HomeElements,
    FooterComp,
  }
}
</script>
