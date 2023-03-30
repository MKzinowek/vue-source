import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useuserInfoStore = defineStore('counter', () => {
  const fname = ref("Mikayla");
  const lname = ref("Cole");
  const stAddr = ref("26070 constitution highway");
  const city = ref("Rhoadesville");
  const state = ref("Virginia");
  const zipCode = ref("22542");


  return {fname, lname, stAddr, city, state, zipCode}
})

