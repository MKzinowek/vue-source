<script setup>
import { RouterLink } from 'vue-router'
import NavBarSearch from '../components/NavBar.vue'
</script>
<template>
    <nav>
        <NavBarSearch />
        <br>
    </nav>
    <main>
        <h1>In the zoo!</h1>
        <ul>
            <li>
                <RouterLink to="/projects/app12/src/views/AnimalPages/Panda.vue">Panda</RouterLink>
            </li>
            <li>
                <RouterLink to="/projects/app12/src/views/AnimalPages/PolarBear.vue">Polar Bear</RouterLink>
            </li>
            <li>
                <RouterLink to="/projects/app12/src/views/AnimalPages/Rhino.vue">Rhino</RouterLink>
            </li>
            <li>
                <RouterLink to="/projects/app12/src/views/AnimalPages/Zebra.vue">Zebra</RouterLink>
            </li>
        </ul>
    </main>
</template>
<style></style>