<script setup>
import Images from '../../components/Images.vue';
import NavBarSearch from '../../components/NavBarSearch.vue';
import Descriptions from '../../components/Descriptions.vue';
</script>

<template>
    <nav>
        <NavBarSearch/>
    </nav>
    <br>
<Images/>    
<Descriptions/>
<img class="imgStyle" src="../../../public/RhinoImage6.jpg">
<p id="desc"> A large, grey animal with a horn </p>
</template>
<style>
.imgStyle{
    width: 50%;
    height: 50%;
    margin-left: 350px;
}

#desc{
    margin-left: 575px;
}

</style>