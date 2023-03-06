<script setup>
import { ref, reactive } from 'vue'
const user = reactive({
    name: {
        first: "",
        last: ""
    },
    email: "",
    happy: true,
    sendSpam: "no",
    colors: [],
    favs: [],
    avatarImageFile: {},
    petImageFile: {}
})
function loadPreviewImg(evt) {
    user.avatarImageFile = evt.target.files[0]
    let reader = new FileReader()
    reader.onloadend = function () {
        let img = document.querySelector("#preview-img")
        img.src = reader.result;
    }
    reader.readAsDataURL(user.avatarImageFile)
}
function loadPreviewCanvas(evt) {
    user.petImageFile = evt.target.files[0]
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
    reader.readAsDataURL(user.petImageFile);
}
function submit() {
    console.log("User data:")
    let userObj = { ...user }
    console.log(userObj)
    let jsonString = JSON.stringify(user);
    console.log(jsonString)
    let jsonObject = JSON.parse(jsonString)
    console.log(jsonObject)
}
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <form id="form">
                    <h3>Create Account Page</h3>
                    <fieldset>
                        <label for="first" class="form-label">First name</label>
                        <input id="first" type="text" class="form-control" v-model="user.name.first">

                        <label for="last" class="form-label">Last name</label>
                        <input id="last" type="text" class="form-control" v-model="user.name.last">

                        <label for="email" class="form-label">Email</label>
                        <input id="email" type="email" class="form-control" v-model="user.email">

                        <div>
                            <lable class="form-label">Are you happy?</lable>
                            
                            <input id="happy" class="form-check-input" type="checkbox" name="happy"
                                v-model="user.happy">
                            <label for="happy" class="form-check-label"> {{ user.happy }} </label>
                        </div>

                        <div>
                            <label class="form-label">Want spam?</label>

                            <input id="yes-spam" class="form-check-input" type="radio" name="spam" value="yes"
                                v-model="user.sendSpam">
                            <label for="yes-spam" class="form-check-label">Yes</label>

                            <input id="no-spam" class="form-check-input" type="radio" name="spam" value="no" checked
                                v-model="user.sendSpam">
                            <label for="no-spam" class="form-check-label">No</label>
                        </div>

                        <div>
                            <label class="form-label">Pick your favorite colors</label>
                        
                            <input id="box1" class="form-check-input" type="checkbox" name="color" value="azure" v-model="user.colors">
                            <label for="box1" class="form-check-label">Azure</label>
                        
                            <input id="box2" class="form-check-input" type="checkbox" name="color" value="oak" v-model="user.colors">
                            <label for="box2" class="form-check-label">Oak</label>

                            <input id="box3" class="form-check-input" type="checkbox" name="color" value="violet" v-model="user.colors">
                            <label for="box3" class="form-check-label">Violet</label>

                            <input id="box4" class="form-check-input" type="checkbox" name="color" value="peach" v-model="user.colors">
                            <label for="box4" class="form-check-label">Peach</label>
                        </div>

                        <div>
                            <label class="form-label" for="favorites">What is your favorite genre?</label>

                            <select id="favorites" class="form-control" name="favorites" multiple v-model="user.favs">
                                <option value="phonk">Phonk</option>
                                <option value="jazz">Jazz</option>
                                <option value="metal">Metal</option>
                                <option value="country">Country</option>
                                <option value="blues">Blues</option>
                                <option value="rap">Rap</option>
                            </select>
                        </div>

                        <div>
                            <label for="avatar" class="form-label">Choose a profile picture:</label>

                            <input id="avatar" class="form-control" type="file" name="avatar"
                                accept="image/png, image/jpeg" @change="loadPreviewImg">
                        </div>

                        <div>
                            <label for="pet" class="form-label">Choose a pet picture:</label>

                            <input id="pet" class="form-control" type="file" name="pet" accept="image/png, image/jpeg"
                                @change="loadPreviewCanvas($event)">
                        </div>
                    </fieldset>
                    <button id="submitButton" class="btn" type="button" @click="submit">Submit</button>
                </form>
            </div>
            <div class="col-6">
                <div id="info">
                    <h3>Information</h3>

                    <span>Name: {{ user.name.first }} {{ user.name.last }} </span> <br>
                    <span>Email: {{ user.email }} </span> <br>
                    <span>Happy? {{ user.happy }} </span> <br>
                    <span>Spam? {{ user.sendSpam }} </span> <br>
                    <span>Colors</span>
                    <li class="fav" v-for="item in user.colors">{{ item }} </li>
                    <span>Favorties </span>
                    <li class="fav" v-for="item in user.favs">{{ item }} </li>

                    <hr>

                    <div id="images" class="row">
                        <div class="col-auto">
                            <figure id="fig1">
                                <img id="preview-img">
                                <figcaption>{{ user.avatarImageFile.name }}</figcaption>
                            </figure>
                        </div>
                        <div class="col-auto">
                            <figure id="fig2">
                                <canvas id="preview-canvas"></canvas>
                                <figcaption>{{ user.petImageFile.name }}</figcaption>
                            </figure>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </template>

    <style>
  </style>