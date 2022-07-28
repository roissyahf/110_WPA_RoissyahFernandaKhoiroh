<template>
  <!-- Navigation Bar -->
  <header class="navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container px-5">
        <a class="navbar-brand" href="#">Statmads</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
            class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <router-link class="navlink" to="/home">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="navlink" to="/about">About</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                More
              </a>
              <ul class="dropdown-menu">
                <li><router-link class="navlink" to="/pricing">Pricing</router-link></li>
                <li><router-link class="navlink" to="/booking">Book Now</router-link></li>
                <li><router-link class="navlink" to="/blog">Blog</router-link></li>
                <li><hr class="dropdown-divider"></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
    name: "NavbarComp",
}
</script>

<style>

</style>