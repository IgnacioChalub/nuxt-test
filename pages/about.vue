<script setup lang="ts">

</script>

<template>
  <div class = "info-group">
    <img id = "main-img" src = "~/assets/img/home-image.jpg" />
    <p>
      This is a description for the Dog's Shelter. The best place where dogs can rest.
    </p>
  </div>
  <div class = "info-group reverse-flex">
    <img id = "main-img" src = "~/assets/img/home-image.jpg" />
    <p>
      This is the second description for the Dog's Shelter. The best place where dogs can rest.
    </p>
  </div>
</template>

<style scoped>
#main-img {
  width: 30%;
  height: auto;
}

main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.info-group {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 40px;
}

.reverse-flex {
  flex-direction: row-reverse;
}

@media screen and (max-width: 1200px) {
  #main-img {
    width: 50%;
    height: auto;
  }

  .info-group {
    flex-direction: column;
    gap: 10px;
  }
}
</style>