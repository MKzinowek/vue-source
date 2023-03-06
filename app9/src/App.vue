<script>
import { ref } from 'vue'
import Audios from './assets/data.json'
import Component1 from './components/Component1.vue'


export default {
  data() {
    return {
      songList: Audios
    };
  },
}



</script>

<template>
  <main>
    <section>

      <Component1 />

    </section>
    <h3> Sounds of the Forest </h3>
    <p> This is a collection of sounds from the forest, as well as the things that inhabit it. </p>
    <div id="audioHolder">
      <div id="individualSong">

        
        <h3>Cicadas (59s) </h3>
        <p>www.freesoundslibrary.com/cicadas-noise/</p>
        <audio controls>
          <source src="./assets/audio/Cicadas-noise.mp3" type="audio/mpeg">
        </audio>
      

        <h3>Crickets (1m 32s)</h3>
        <p>www.freesoundslibrary.com/crickets-chirping-crickets-sound/</p>
        <audio controls>
          <source src="./assets/audio/crickets-chirping-crickets-sound.mp3" type="audio/mpeg">
        </audio>

        <h3>Fire (32s)</h3>
        <p>www.freesoundslibrary.com/fire-flame-sound/</p>
        <audio controls>
          <source src="./assets/audio/fire-flame-sound.mp3" type="audio/mpeg">
        </audio>

        <h3>Light Rain (30s)</h3>
        <p>www.freesoundslibrary.com/light-rain-sound-effect-audio-loop/</p>

        <audio controls>
          <source src="./assets/audio/light-rain-sound-effect-audio-loop.mp3" type="audio/mpeg">
        </audio>

        <h3>Birds (2m 28s)</h3>
        <p>www.freesoundslibrary.com/morning-birds-in-park-sound-effect/</p>
        <audio controls>
          <source src="./assets/audio/morning-birds-in-park-sound-effect.mp3" type="audio/mpeg">
        </audio>

        <h3>Mourning Dove (34s)</h3>
        <p>www.freesoundslibrary.com/mourning-dove-sound-effect/</p>
        <audio controls>
          <source src="./assets/audio/mourning-dove-sound-effect.mp3" type="audio/mpeg">
        </audio>

        <h3>Squirrel (35s)</h3>
        <p>www.freesoundslibrary.com/squirrel-calls/</p>
        <audio controls>
          <source src="./assets/audio/squirrel-calls.mp3" type="audio/mpeg">
        </audio>

        <h3>Insects (1m 19s)</h3>
        <p>www.freesoundslibrary.com/summer-insect-and-birds-noises-sound-effect/</p>
        <audio controls>
          <source src="./assets/audio/summer-insect-and-birds-noises-sound-effect.mp3" type="audio/mpeg">
        </audio>

        <h3>Stream (1m 39s)</h3>
        <p>www.freesoundslibrary.com/water-stream-sound-effect/#google_vignette</p>
        <audio controls>
          <source src="./assets/audio/water-stream-sound-effect.mp3" type="audio/mpeg">
        </audio>

        <h3>Wind (1m 7s)</h3>
        <p>www.freesoundslibrary.com/windy-spring-forest-noises/</p>
        <audio class="audio_boxes" controls>
          <source src="./assets/audio/windy-spring-forest-noises.mp3" type="audio/mpeg">
        </audio>



        <Component1 v-bind="audio"> </Component1>


      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  margin: 50px 100px;
}

section {
  display: flex;
  justify-content: center;
}

button {
  margin-top: 30px;
  font-size: medium;
  width: 200px;
}

</style>