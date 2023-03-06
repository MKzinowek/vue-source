<script setup>
import { ref, reactive } from 'vue'
const user = reactive({
  name: {
    first: "",
    last: ""
  },
  email: "",
  quantity: "",
  size: "",
  date: "",
  shirt:{},
  address: {
    staddress: "",
    staddress2: "",
    city: "",
    zipcode: ""
  }
})
</script>
<template>
  <div id="wholeBox">
          <form id="form">
            <div id="OrderBox">
              <h3 class="text">Order Form</h3>
            
              <h5 id="textUpTop" class="text"> Please fill in your information and we'll be sending your order in no time</h5>
              
            </div>
            
            <fieldset>
              <div id="nameField">

                <label for="first" class="form-label">Name </label>
                <input id="first" type="text" class="form-control" v-model="user.name.first" required>

                <label for="last" class="form-label"></label>
                <input id="last" type="text" class="form-control" v-model="user.name.last" required>
              </div>
              <br>
              <div id="emailBox">

                <label for="email" class="form-label">Email </label>
                <input id="email" type="text" class="form-control" v-model="user.email" required>
              </div>
              <div>
                <label for="shirt" class="form-label" > T-Shirt Model </label>
                <table id="shirtBox">
                  <tr>
                    <td>
                      <img class="images"
                        src="data:image/png;base64,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" />
                    </td>
                    <td>
                      <img class="images"
                        src="data:image/png;base64,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" />
                    </td>
                    <td>
                      <img class="images" 
                        src="data:image/png;base64,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" />
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align:center">
                      <input type="radio" name="shirts" value="shirtOne">
                    </td>
                    <td style="text-align:center">
                      <input type="radio" name="shirts" value="shirtTwo">
                    </td>
                    <td style="text-align:center">
                      <input type="radio" name="shirts" value="shirtThree" default>
                    </td>
                  </tr>
                </table>
                <div id="sizeBox">
                  <label for="size" class="form-label"> Size </label>
                  <select name="size" id="size">
                    <option value="small">S</option>
                    <option value="medium">M</option>
                    <option value="large">L</option>
                    <option value="extraLarge">XL</option>
                  </select>
                </div>
              </div>
              <div id="quantityBox">
                <label for="quantity" class="form-label">Quantity </label>
                <input id="quantity" type="text" class="form-control" v-model="user.quantity" required>
              </div>

              <div id="deliveryDate">
                <label for="date">Start date</label>
                <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31"
                  required>

              </div>

              <div id="address">
                <label for="address">Delivery Address </label>
                <br>
                <input type="text" id="addressFirstLine" name="address" v-model="user.address.staddress" required>
                <br>
                <input type="text" id="addressSecondLine" name="address" v-model="user.address.staddress">
                <br>
                <input type="text" id="city" name="address" v-model="user.address.city" required>
                <br>
                <input type="text" id="zipCode" name="address" v-model="user.address.zipcode" required>

              </div>
        </fieldset>
            <button id="submitButton" class="btn" role="button" type="button" @click="submit">Purchase</button>
          </form>
        </div>
        <div class="col-6">
          <div id="info">
            <hr>


          </div>
        </div>


</template>

<style>
#nameField {
  display: flex;
  width: auto;
  gap: 30px;
}

#first {
  display: flex;
  width: 30%;
  margin-left: 10%;
}

#last {
  display: flex;
  width: 30%;
}

#emailBox {
  display: flex;
  width: auto;
  gap: 30px;
}

#email {
  display: flex;
  width: 30%;
  gap: 30px;
  margin-left: 10%;
}

#sizeBox {
  display: flex;
  width: auto;
  gap: 30px;
}

#size {
  display: flex;
  width: 31.5%;
  gap: 30px;
  margin-left: 12%;
}

#quantityBox {
  display: flex;
  width: auto;
  gap: 30px;
}

#quantity {
  display: flex;
  width: 30%;
  gap: 15px;
  margin-left: 8%;
}

#deliveryDate {
  display: flex;
  width: auto;
  gap: 30px;
}

#start {
  display: flex;
  width: 30%;
  gap: 15px;
  margin-left: 7.5%;
}

#addressFirstLine {
  display: flex;
  width: 70%;
  gap: 15px;
  margin-left: 22%;
}

#addressSecondLine {
  display: flex;
  width: 70%;
  gap: 15px;
  margin-left: 22%;
}

#city {
  display: flex;
  width: 30%;
  gap: 15px;
  margin-left: 22%;
}

#zipCode {
  display: flex;
  width: 30%;
  gap: 15px;
  margin-left: 22%;
}

#address {
  background-color: rgb(194, 191, 191);
  width: 100%;
  height: 60%;
}

#wholeBox{
  width: 50%;
  border-radius: 10%;
  display: flex;
}
#OrderBox {
  color: white;
  font-family: monospace;
  background-color: rgb(1, 150, 1);
  width: auto;
  border-top: 10px;
  display: block;
  justify-content: center;
  align-items: center;
  border-top: 25px;
}

.text{
  margin-left: 10px;

}

.images{
  width: 30%;
  display: block;
  margin-left: 45%;
}

.btn {
  background-color: rgb(1, 150, 1);
  border: 1px solid transparent;
  border-radius: 3px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI","Liberation Sans",sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.15385;
  margin: 0;
  outline: none;
  padding: 8px .8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
  margin-left: 80%;
}


</style>