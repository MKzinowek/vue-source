<script>
import Component2 from './Component2.vue'
export default {
  components: {
    Component2
  },
}
</script>

<template>
  <div id="container1">
  <h2> Component1 </h2>
  <Component2></Component2>
</div>
</template>

<style>
#container1{
  outline: 1px solid black;
  width: 100%;
  height: fit-content;
  align-items: center;
  text-align: center;
}
</style>