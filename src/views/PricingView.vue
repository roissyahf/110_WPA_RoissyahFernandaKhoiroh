<template>
  <div class="book-now-page">
    <NavbarComp />
    <PricingComp />
    <FooterComp />
  </div>
</template>

<script>
import NavbarComp from '@/components/NavbarComp.vue'
import PricingComp from '@/components/PricingComp.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
    name: "PricingView",
    components: {
        NavbarComp,
        PricingComp,
        FooterComp,
    }
}
</script>

<style>
</style>