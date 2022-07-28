<template>
  <div class="aboutpage">
    <NavbarComp />
    <AboutUsComp />
    <FooterComp />
  </div>
</template>

<script>
import NavbarComp from '@/components/NavbarComp.vue'
import AboutUsComp from '@/components/AboutUsComp.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
  name: 'AboutView',
  components: {
    NavbarComp,
    AboutUsComp,
    FooterComp,
  }
}
</script>

<style>
</style>
