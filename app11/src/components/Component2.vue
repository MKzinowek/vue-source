<script>
import Component3 from './Component3.vue'
export default {
  components: {
    Component3
  },
}
</script>

<template>
  <div id="container2">
  <h3> Component2 </h3>
  <Component3></Component3>
</div>
</template>

<style>
#container2{
  outline: 1px solid black;
  width: 100%;
  height: fit-content;
  align-items: center;
  text-align: center;
}
</style>