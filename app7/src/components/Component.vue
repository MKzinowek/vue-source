<script setup>

import { ref, reactive } from 'vue'


let photo = [
  {
    name: "Tall Brown Trees",
    photographer: "Darwis Alwan",
    photographer_url: "https://www.pexels.com/@darwisalwan/",
    url: "https://www.pexels.com/photo/tall-brown-trees-1995730/",
    img: "/pexels-darwis-alwan-1995730.jpg"
  },
  {
    name: "Photo of Forest During Daytime",
    photographer: "Yaroslav Shuraev",
    photographer_url: "https://www.pexels.com/@yaroslav-shuraev/",
    url: "https://www.pexels.com/photo/photo-of-forest-during-daytime-1834393/",
    img: "/pexels-yaroslav-shuraev-1834393.jpg"
  },
  {
    name: "Green Leafed Plant",
    photographer: "Zetong Li",
    photographer_url: "https://www.pexels.com/@zetong-li-880728/",
    url: "https://www.pexels.com/photo/green-leafed-plant-1784577/",
    img: "/pexels-zetong-li-1784577.jpg"
  },
  {
    name: "Forest Under Brown Sky",
    photographer: "Connor Danylenko",
    photographer_url: "https://www.pexels.com/@connor-danylenko-534256/",
    url: "https://www.pexels.com/photo/forest-under-brown-sky-1414535/",
    img: "/pexels-connor-danylenko-1414535.jpg"
  }
]

let counter = 0;

const photo1 = reactive({
  name: "",
  photographer: "",
  photographer_url: "",
  url: ""
})

function next() {
  if (counter != 3){
  counter++;
  loadImage();
  }
}

function previous(){
  if (counter != 0){
    counter--;
    loadImage();
  }
}



function loadImage(){
  photo.title = photo[index1].name
  photo.photographer = photo[index1].photographer
  photo.photographer_url = photo[index1].photographer_url
  photo.url = photo[index1].sec
}

</script>


<template>
 

  <div id="imgBox">
    <button id="previous" class="btn" @click="previous()" :disabled="index==0?true:false">&lt;--</button>
    <img id="image" :src="photo[counter].img">
    <button id="next" class="btn" @click="next()" :disabled="index==2?true:false">--></button>
    <br>
    <div id="photoInfo">
      <div id="info">
      {{ photo[counter].title }} <br>
      <a id="photographer" :href="photo[counter].photographer_url" target="_blank"> {{ photo[counter].photographer }} </a>
      <br></div>      
      <div id="info2">
      {{ photo[counter].photographer_url }}  
    </div>     
    </div>
  </div>
</template>


<style>
#imgBox {
  height: 100%;
  background-color: rgb(189, 187, 187);
  border: 1px gray solid;
  border-radius: 25px;
  margin: auto;
  width: 50%;
  padding: 10px;
}

#image {
  width: 30%;
  height: 40%;
  display: inline-block;
}

#previous {
  margin-left: 30%;
}


#photoInfo {
  border-top: 1px black solid;
  display: block;
  margin: 0 auto;
  width: 100%;
}

#photographer{
  margin: 0 auto;
  width: 50%;
}

#info{
  display: flex;
  align-content: center;
  justify-content: center;
  margin-left: 20%;
}

#info2{
  display: flex;
  align-content: center;
  justify-content: center;
}

.btn {
  background-color: rgba(51, 51, 51, 0.05);
  border-radius: 8px;
  border-width: 0;
  color: #222222;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  margin: 0;
  padding: 10px 12px;
  text-align: center;
  transition: all 200ms;
  vertical-align: baseline;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  color: white;
}
</style>