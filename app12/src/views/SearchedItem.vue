<script setup>
import NavBarSearch from '../components/NavBarSearch.vue';
import data from '../assets/data.json'


</script>

<template>
  <NavBarSearch/>

  <ul id="list-holder">

  </ul>
  
  <h3>{{data.Name}} </h3>
  <p> {{data.Image}} </p>
  <p>Item description</p>

</template>

<style></style>