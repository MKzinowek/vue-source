<script>
export default {
  inject: ['name', 'age', 'major']
}
</script>

<template>
    <div id="container4">
  <h6> Last Component </h6>
  <p> Hi, I'm {{ name }}! I'm {{ age }}, and I am a {{ major }} major!</p>
  <p>
    Provide and Inject allows the different variables, in this case "name", "age", and "major", to be passed through the different components before it.
    The original variables are found in "App.vue", but through inject, they are able to be accessed in a totally different component.  
    Looking at the previous components, the variables are passed through them, but they are never used or displayed until the very last component;  they are exported but not actually used.
    Once the "inject" happens in the last component, the variable's values are displayed.  
  </p>
</div>
</template>

<style>
#container4{
  outline: 1px solid black;
  width: 100%;
  height: fit-content;
  align-items: center;
  text-align: center;
}
</style>