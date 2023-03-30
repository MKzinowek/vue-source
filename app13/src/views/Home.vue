<script setup>
import { useuserInfoStore } from '../stores/userInfo'
import navBar from '../components/navBar.vue';
const store = useuserInfoStore()
</script>

<template>
  <main>
    <navBar/>
    <p>User: {{ store.fname }} {{ store.lname }}</p>
    <p>Street: {{ store.stAddr }}</p>
    <p>City: {{ store.city }}</p>
    <p>State: {{ store.state }}</p>
    <p>Zip: {{ store.zipCode }}</p>
  </main>
</template>