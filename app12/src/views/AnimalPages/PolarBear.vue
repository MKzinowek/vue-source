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
<img class="imgStyle" src="../../../public/PolarBearImage2.jpg">
<p id="desc">A large white bear</p>
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