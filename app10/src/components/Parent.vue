<script setup>
import { reactive, ref } from 'vue'
import Child from './Child.vue'
import Card from './Card.vue'
const username1 = ref('Username')
const email1 = ref ('Email')
let cards = reactive([])
function updateInfo() {
  cards.push({
    username: username1.value,
    email: email1.value
  })
}
</script>
<template>
<Child 
  v-model:username="username1"
  v-model:email="email1"
  @updateInfo ="updateInfo"
/>

<div class="card" v-for="card in cards">
    <span>{{ card }}</span>
</div>
</template>
<style>
</style>