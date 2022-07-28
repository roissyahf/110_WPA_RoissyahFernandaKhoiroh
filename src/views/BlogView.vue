<template>
   <NavbarComp />
   <BlogElements />
   <FooterComp />
</template>

<script>
import NavbarComp from '@/components/NavbarComp.vue'
import BlogElements from '@/components/BlogElements.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
    name: "BlogView",
    components: {
        NavbarComp,
        BlogElements,
        FooterComp,
    }
}
</script>

<style>

</style>