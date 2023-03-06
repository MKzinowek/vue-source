<script async setup>
import { ref, onMounted, reactive } from 'vue'
import { data } from '../assets/data.js'

const links = reactive({})
links.value = await data.getUrl("./links.json")

const audio = ref(null)

const props = defineProps({
    title: String,
    audioFile: String,
    duration: String
})

function getAudioUrl() {
    // This path must be correct for your file
    return new URL(`../assets/audio/${props.audioFile}`, import.meta.url)
}

onMounted(() => {
    audio.value.src = getAudioUrl()
})

</script>

<template>
        <div id="card">
            <h3>{{ title }}</h3>

            <audio ref="audio" controls></audio>
        </div>
</template>


<style >
audio {
    display: block;
    padding: 0 20px 20px 20px;
}
</style>