<script setup>
import { computed } from 'vue'
const props = defineProps(['username', 'email'])
const emit = defineEmits(['update:username', 'update:email'])
const userValue = computed({
  get() {return props.username},
  set(arg){emit('update:username', arg)}
})
const emailValue = computed({
  get() {return props.email},
  set(arg){emit('update:email', arg)}
})
</script>
<template>
  <form>
    <fieldset class="childcard">
        <div>
            <label for="username" class="form-label" > Username</label>
            <input id="username" v-model="userValue" type="text"/>
        </div>

        <div>
            <label for="email" class="form-label">Email</label>
            <input v-model="emailValue" id="email" type="text"/>
        </div>
        <div>
            <button @click="$emit('updateInfo')" type="button">Submit</button>
        </div>
    </fieldset>
  </form>
</template>

    <style>
    
  </style>