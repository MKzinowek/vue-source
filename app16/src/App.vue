<script>
export default{
  data() {
    return { showP: false }
  },
  name: 'droppedCandy',
  data() {
    return {
      candyOne: 'candyOne',
      candyTwo: 'candyTwo',
      candyThree: 'candyThree',
      candyFour: 'candyFour',
      candyFive: 'candyFive',
      candySix: 'candySix',
      candySeven: 'candySeven',
      candyEight: 'candyEight',

    };
  },
  methods: {
    hideImage: function (id) {
      console.log("inside")
      document.getElementById('id').style.visibility='invisible';
      counter ++;
    }
  },
}
let counter = 0;
</script>

<template>
  <div id="score">{{ counter }}</div>
  <div id="pinHolder">
    <h1 id="title">Every Party Needs A Pinata!</h1>
    <img class="pinata" src="/pinata.png">
    <button @click="showP = !showP" class="button" id="pickupButton">Break the Pinata!</button>
  </div>
<div>
  <transition-group>
    <img v-if="showP" class="candy" id="candy1" v-bind:id="candyOne" src="/candy.png">
  </transition-group>
  <transition>
  <img v-if="showP" class="candy" id="candy2" v-bind:id="candyTwo" src="/candy.png">
</transition>
<transition>
    <img v-if="showP" class="candy" id="candy3" v-bind:id="candyThree" src="/candy.png">
  </transition>
  <transition>
    <img v-if="showP" class="candy" id="candy4" v-bind:id="candyFour" src="/candy.png">
  </transition>
  <transition>
    <img v-if="showP" class="candy" id="candy5" v-bind:id="candyFive" src="/candy.png">
  </transition>
  <transition>
    <img v-if="showP" class="candy" id="candy6" v-bind:id="candySix" src="/candy.png">
  </transition>
  <transition>
    <img v-if="showP" class="candy" id="candy7" v-bind:id="candySeven" src="/candy.png">
  </transition>
  <transition>
    <img v-if="showP" class="candy" id="candy8" v-bind:id="candyEight" src="/candy.png">
  </transition>
  <transition>
    <button v-if="showP" @click="showP = !showP"> Grab them!</button>

  </transition>
</div>

</template>

<style>
.slide-leave {
  transform: scale3d(1, 1, 1);
}

.slide-leave-to {
  opacity: 0;
  transform: scale3d(2, 0.5, 1) translate3d(-400px, 0, 0);
}

.v-leave-active {
  transition: opacity 2s ease
}

.v-leave-from {
  opacity: 1
}

.v-leave-to {
  opacity: 0
}

.candy {
  height: 5%;
  width: 5%;
}

.pinata {
  height: 40%;
  width: 40%;
  display: flex;
  margin-left: 30%;
  justify-content: center;
  align-items: center;
}

#candy1 {
  display: flex;
  margin-left: 66;
  visibility: visible;
}

#candy2 {
  display: flex;
  margin-left: 60%;
  visibility: visible;
}

#candy3 {
  display: flex;
  margin-left: 20%;
}

#candy4 {
  display: flex;
  margin-left: 80%;
}

#candy5 {
  display: flex;
  margin-left: 90%;
}

#candy6 {
  display: flex;
  margin-left: 55%;
}

#candy7 {
  display: flex;
  margin-left: 46%;
}

#candy8 {
  display: flex;
  margin-left: 25%;
}
#pickupButton{
  display: flex;
  margin-left: 45%;
}

#title{
  margin-left: 35%;
}

</style>