<script setup>
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import Header from '../components/Header.vue'
import json from '../assets/data.json'
console.log(json)
const route = useRoute()
let label = undefined
let description = undefined 
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
    description = Animal.description
  }
})
</script>

<template>
    <div id="view">
  <Header :label="label"/>
  <div>
    <div v-if="label">
      {{ description }}
    </div>
  </div>
  </div>
    
</template>