<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<script setup>

import { ref, reactive, watch } from 'vue'
import { onMounted, onUpdated } from 'vue'


const usernameRef = ref(null)
const emailRef = ref(null)
const phoneNumber = ref(null)

const username = ref('')
const password = ref('')
const password2 = ref('')
const email = ref('')
const number = ref('')
const disabled = ref(true)

const validNum = ref(false)
const validEmail = ref(false)

const validUsername = ref(false)
const validPassword = ref(false)
const passwordsMatch = ref(false)

const usernameErrorRef = ref(null)
const passwordErrorRef = ref(null)
const password2ErrorRef = ref(null)

//const validEmail = ref(false)
const emailErrorRef = ref(null)
const numErrorRef = ref(null)
const value = ref("");

let profPic;

//watch(email, () => {
//  this.email = value;
//  this.validateEmail(value);
//})

function validateEmail() {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    console.log("email valid");
  } else {
    console.log("email invalid");
  }
}


// watch element ref - similar to onMounted - not watching value of input
// for some reason disabled when ref function is installed 
let count = 0
watch(usernameRef, () => {
  console.log("watching usernameRef");
  console.log(usernameRef.value)
  console.log(count++)
  usernameRef.value.value = "rmcgregor"
})

// called when anything in component changes - including onMounted
// if used in input element, must have v-model set
function componentUpdate(elm) {
  console.log("password changed")
  console.log(elm.value)
  console.log(passwordErrorRef.value)
  console.log(emailErrorRef.value)
  console.log(numErrorRef.value)

  if (passwordErrorRef.value != null && elm.value.length > 0) {

    validPassword.value = (elm.value.length >= 8)

    passwordErrorRef.value.innerHTML = (validPassword.value) ?
      "&nbsp;" : "Minimum length: 8 characters"
  }
  if (numErrorRef.value != null && elm.value.length != 10) {

  validNum.value = (elm.value.length = 10)

  numErrorRef.value.innerHTML = (validNum.value) ?
    "&nbsp;" : "Minimum length: 8 characters"

}
}

//watch v-model input.value ref (called when string changes)
watch(username, () => {
  validUsername.value = (username.value.length >= 4)

  usernameErrorRef.value.innerHTML = (validUsername.value) ?
    "&nbsp;" : "Minimum length: 4 characters"

  usernameRef.value.setAttribute("data", "hello")
})

// watch array of refs
watch([password, password2], () => {
  passwordsMatch.value = (password.value === password2.value)

  password2ErrorRef.value.innerHTML = (passwordsMatch.value || password2.value.length == 0) ?
    "&nbsp;" : "Passwords do not match"

})

watch(number, () => {
  validNum.value = (number.value.length == 10)

  numErrorRef.value.innerHTML = (validNum.value)?
       "&nbsp;" : "Must be a valid phone number"
})

function loadPreviewCanvas(evt) {
  profPic = evt.target.files[0]
  var canvas = document.querySelector('#preview-canvas');
  var ctx = canvas.getContext('2d');
  var reader = new FileReader();
  reader.onload = function (event) {
    var img = new Image();
    img.onload = function () {
      canvas.width = 100;
      // set height proportional to canvas width and img dimensions
      canvas.height = canvas.width * (img.height / img.width);
      // draw image to fill canvas
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
    img.src = event.target.result;
  }
  reader.readAsDataURL(profPic);
}

// watch array of refs
watch([validUsername, validPassword, passwordsMatch, validateEmail], async () => {
  disabled.value = !(validUsername.value && validPassword.value && passwordsMatch.value && validateEmail)
  console.log(disabled.value)

  if (!disabled.value) usernameRef.value.value = ''
})


function submit() {
  let mssg = username.value + ", " + password.value + ", " + phoneNumber.value + ", " + email.value
  console.log(mssg)
}

onMounted(() => {
  usernameRef.value.focus();
})

onUpdated(() => {
  //console.log(usernameRef.value.value)
})


</script>


<template>
  <div class="container">
    <form
      class="rounded border border-primary border-2 border-opacity-25 py-3 px-5"
    >
      <fieldset class="d-flex flex-column">
        <legend>Create Account</legend>

        <div class="form-floating mb-2">
          <input
            ref="usernameRef"
            v-model="username"
            id="username"
            type="text"
            class="form-control"
          />
          <label for="username" class="form-label">Username</label>
          <small ref="usernameErrorRef" class="text-danger">&nbsp;</small>
        </div>

        <div class="form-floating mb-2">
          <input
            :ref="componentUpdate"
            v-model="password"
            id="password"
            type="password"
            class="form-control"
          />
          <label for="password" class="form-label">Password</label>
          <small ref="passwordErrorRef" class="text-danger">&nbsp;</small>
        </div>

        <div class="form-floating mb-2">
          <input
            v-model="password2"
            id="password2"
            type="password"
            class="form-control"
          />
          <label for="password2" class="form-label">Reenter password</label>
          <small ref="password2ErrorRef" class="text-danger">&nbsp;</small>
        </div>

        <div class="form-floating mb-2">
          <input
            :ref="componentUpdate"
            v-model="number"
            id="number"
            type="number"
            class="form-control"
          />
          <label for="number" class="form-label">Phone Number </label>
          <small ref="numErrorRef" class="text-danger">&nbsp;</small>
        </div>
        <div class="form-floating mb-2">
          <input v-model="email" id="email" type="text" class="form-control" />
          <label for="email" class="form-label">Email Address</label>
          <small ref="emailErrorRef" class="text-danger">&nbsp;</small>
        </div>

        <div>
          <input
            id="profPic"
            class="form-control"
            type="file"
            name="prof"
            accept="image/png, image/jpeg"
            @change="loadPreviewCanvas($event)"
          />

          <div class="col-auto">
            <figure id="fig2">
              <canvas id="preview-canvas"></canvas>
              <figcaption>{{ profPic }}</figcaption>
            </figure>
          </div>
          <button
            @click="
              validateEmail();
              submit();
            "
            class="btn btn-primary"
            type="button"
            v-bind:disabled="disabled"
          >
            Create
          </button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<style></style>
