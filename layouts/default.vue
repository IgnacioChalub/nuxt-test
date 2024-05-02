<script setup lang="ts">

</script>

<template>
  <header>
    <h1>The Dog Shelter</h1>
    <nav>
      <NuxtLink to="/">HOME</NuxtLink>
      <NuxtLink to="/dogs">DOGS</NuxtLink>
      <NuxtLink to="/about">ABOUT US</NuxtLink>
      <NuxtLink to="/contact">CONTACT US</NuxtLink>
    </nav>
  </header>

  <main>
    <slot/>
  </main>

  <footer>
    Made by me :)
  </footer>
</template>

<style scoped>
header, footer
{
  background-color: orange;
}

footer
{
  flex-shrink: 0;
  text-align: center;
  margin-top: auto;
  border-top: 5px solid brown;
  padding: 10px;

  min-height: 1vh;
}

header
{
  padding: 0 20px 0 20px;
  margin-bottom: 0;
  border-bottom: 5px solid brown;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  display: flex;
  gap: 30px;
}

nav a {
  font-size: 17pt;
  font-weight: bold;
}
</style>