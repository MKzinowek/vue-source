<script>
export default {
  data() {
    return { showP: false }
  },
  name: 'Listcontrol',
  data() {
    return {
      list: [1, 2, 3, 5, 8, 13],
      inputModel: 6
    }
  },
  methods: {
    rIndex() {
      return Math.floor(Math.random() * this.list.length)
    },
    add() {
      this.list.splice(this.rIndex(), 0, this.inputModel++)
    },
    remove() {
      this.list.splice(this.rIndex(), 1)
    },
    reset() {
      this.list = [1, 2, 3, 5, 8, 13]
      this.inputModel = 6
    }
  }
}



</script>

<template>
  <button @click="showP = !showP">Toggle</button>
  <transition>
    <p v-if="showP">Fade</p>
  </transition>

  <button @click="showP = !showP">Toggle</button>
  <transition>
    <div v-if="showP">
      <img src="../public/PandaImage5.jpg">
    </div>
  </transition>

  <div>
    <button @click="add()">random add</button>
    <button @click="remove()">random remove</button>
    <button @click="reset()">reset</button>
    <transition-group tag="p" name="listing" class="numberlist">
      <span v-for="datas in list" :key="datas">{{ datas }}</span>
    </transition-group>
  </div>
</template>

<style>
#color {
  transition-property: background-color;
  transition-duration: 3s;
}

.v-enter-from {
  opacity: 0
}

.v-enter-to {
  opacity: 1
}

.v-enter-active,
.v-leave-active {
  transition: opacity 2s ease
}

.v-leave-from {
  opacity: 1
}

.v-leave-to {
  opacity: 0
}

p,
button {
  display: grid;
  margin: 20px auto
}

p {
  text-align: center;
  padding: 20px 0;
  background: gainsboro;
  width: 200px
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
}

.slide-enter {
  opacity: 0;
  transform: scale3d(2, 0.5, 1) translate3d(400px, 0, 0);
}

.slide-enter-to {
  transform: scale3d(1, 1, 1);
}

.slide-enter-active,
.slide-leave-active {
  transition: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.slide-leave {
  transform: scale3d(1, 1, 1);
}

.slide-leave-to {
  opacity: 0;
  transform: scale3d(2, 0.5, 1) translate3d(-400px, 0, 0);
}

.rotate-enter {
  transform: perspective(500px) rotate3d(0, 1, 0, 90deg);
}

.rotate-enter-active,
.rotate-leave-active {
  transition: 0.5s;
}

.rotate-leave-to {
  transform: perspective(500px) rotate3d(0, 1, 0, -90deg);
}

.numberlist span {
  display: inline-block;
  margin-right: 10px;
  transition: 0.5s ease-in-out;
}

.listing-leave-active {
  position: absolute;
  /* As the script dealing with leave phase, the position is absolute, it makes smooter transition*/
}

.listing-enter,
.listing-leave-to {
  opacity: 0;
  transform: translateY(30px);
}</style>