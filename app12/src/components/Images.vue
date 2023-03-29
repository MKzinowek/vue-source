<script setup>
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import json from '../assets/data.json'
const route = useRoute()

let label = undefined
let src = undefined 
setLabel()

watch(() => route.path, () => { console.log("path changed") })

watch(() => route.params.id, setLabel)
function setLabel() {
  console.log("params changed")
  console.log(route.params)
  let id = route.params.id
  let AnimalType = id ? `${id.charAt(0).toUpperCase()}${id.slice(1)}` : ''
  label = id ? `${route.name} ${AnimalType}` : route.name
}
json.forEach((Animal) =>{
  console.log(Animal)
  if(Animal.name == label){
    src = Animal.src
    console.log(src)
  }
})
</script>

<template>
    <img :src="src">
</template>
<style> 
</style>