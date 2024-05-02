
<script setup lang="ts">
// Creating some predefined cards.
import CardComponent from "~/components/CardComponent.vue";

const store = useDogStore()
const dogs = store.dogs
const input = reactive({
  name: '',
  breed: ''
})
const defaultDog = {name:'default name',breed:'default breed'}
</script>

<template>
  <div id="form-container">
    <input v-model="input.name" type = "text" placeholder="Name">
    <input v-model="input.breed" type = "text" placeholder="Breed">
    <button @click="store.addDog(input)">Add Card (Form values)</button>
    <button @click="store.addDog(defaultDog)">Add Card (Default values)</button>
  </div>
  <div id="card-container">
    <CardComponent v-for="dog of dogs"
                   :name="dog.name"
                   :breed="dog.breed"
                   @my-event="console.log"
    ></CardComponent>
  </div>
</template>

<style scoped>



#card-container
{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-content: flex-start;
  gap: 20px;
}

#form-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: flex-start;
  gap: 20px;

  background-color: burlywood;
  padding: 20px;
}

</style>
