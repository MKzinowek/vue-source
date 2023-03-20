<script>
  import Parent from './components/Parent.vue'
  export default{
    components: {
      Parent, 
    }
  }
</script> 

<template>
  <h4>Name Book</h4>
<div id="container">
  <Parent></Parent>
</div>
</template>

<style>
h4{
  color: navy;
  size: 10px;
}

#container{
  width: auto;
  height: auto;
  background-color: lightblue;
}
</style>