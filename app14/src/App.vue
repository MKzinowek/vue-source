<script setup>
import One from './components/ComponentOne.vue'
import Two from './components/Component2.vue'
import Three from './components/Component3.vue'
import Four from './components/Component4.vue'
import Five from './components/Component5.vue'
import Six from './components/Component6.vue'
</script>

<template>
  <h3>Grid Practice</h3>
<main class="grid-container">
  <One class="one"></One>
  <Two class="two"></Two>
  <Three class="three"></Three>
  <Four class="four"></Four>
  <Five class="five"></Five>
  <Six class="six"></Six>
</main>
</template>

<style>
main {
  width: 100vw;
  height: 100vh;
  padding: 20px;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
h1 {
  align-content: center;
  text-align: center;
  padding: 5%;
}

h3{
  align-content: center;
  text-align: center;
  
}
</style>