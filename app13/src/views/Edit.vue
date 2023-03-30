<script setup>
import navBar from '../components/navBar.vue';
import { useuserInfoStore } from '../stores/userInfo';

const store = useuserInfoStore()


function submit() {
    console.log(store)
    let fname = store.fname
    let lname = store.lname
    let stAddr = store.stAddr
    let city = store.city
    let state = store.state
    let zipCode = store.zipCode
    console.log(fname, lname, stAddr, city, state, zipCode)
    return {fname, lname, stAddr, city, state, zipCode }
}

</script>

<template>
  <navBar/>
<form id="edit">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" placeholder="First Name" v-model="store.fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" placeholder="Last Name" v-model="store.lname"><br><br>
  <label for="fname">Street Address:</label><br>
  <input type="text" id="stAddr" placeholder="Street" v-model="store.stAddr"><br>
  <label for="fname">City:</label><br>
  <input type="text" id="city" placeholder="City" v-model="store.city"><br>
  <label for="fname">State:</label><br>
  <input type="text" id="state" placeholder="State" v-model="store.state"><br>
  <label for="fname">Zipcode:</label><br>
  <input type="text" id="zipCode" placeholder="ZipCode" v-model="store.zipCode"><br>
  <input type="submit" value="Submit" @click="submit">

</form> 

</template>