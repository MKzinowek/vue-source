<script>
import Component1 from './components/Component1.vue'
export default {
  components: {
    Component1
  },
  provide: {
    name: 'Mikayla',
    age: '21',
    major: 'CSCI'
  }
}
</script>

<template>
    <div id="container">
  <h1> Upper Level </h1>
  <p> This is the uppermost level of the tree, where the "provide" is first initiated, and the values are set.</p>
  <Component1></Component1>
</div>
</template>

<style>
#container{
    text-align: center;
}
</style>