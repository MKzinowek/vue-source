<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div id="linkHolder">
        <RouterLink to="/" id="linkToHome">Home </RouterLink>
        <RouterLink to="/Edit" id="linkToEdit">Edit</RouterLink>
    </div>
</template>

<style>
#linkToEdit {
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10%;
}

#linkHolder{
    width: 100%;
    height: 25px;
    background-color: lightslategray;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>