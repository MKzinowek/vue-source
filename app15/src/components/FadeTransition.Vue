<template>
  <button @click="showP = !showP">Toggle</button>
  <transition>
    <p v-if="showP">Hello there</p>
  </transition>
</template>

<script>
export default {
  data() {
    return { showP: false }
  }
}
</script>

<style>
.v-enter-from { opacity: 0 }
.v-enter-to   { opacity: 1 }

.v-enter-active,
.v-leave-active {
  transition: opacity 2s ease
}
.v-leave-from { opacity: 1 }
.v-leave-to   { opacity: 0 }

p,button{display:grid;margin:20px auto}
p{text-align:center;padding:20px 0;
  background:gainsboro;width:200px}
</style>