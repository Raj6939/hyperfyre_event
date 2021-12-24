<template>
<div class="container">
  <!-- <section> -->

      <details class="detail" >
          <summary id="pr" @click="detail"><i class="fas fa-user-circle"></i>Profile</summary>
          <p>Your DID: {{det.did}}</p>
          <p>Name: {{det.name}}</p>
          <p>Email: {{det.email}}</p>
      </details>

  <!-- </section> -->
</div>
</template>
<script>
import axios from 'axios'
export default {
    name:'Profile',
    data(){
return{
    det:{
   did:'',
   name:'',
   email:''
    }
}
},
methods:{
   async detail(){
        let result = await axios.get("http://localhost:3000/users/1",{
         
        });
        this.det=result.data;
        // console.log(result.data);
    }

}
}
</script>
<style>
.fas{
    float: left;
}
.container{
    margin-left: auto;
    margin-right: auto;
    /* background: teal; */
    padding-bottom: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 500px
}
.container details{
    width: 700px;
    margin: 50px;
    box-shadow: 0 5px 10px #3334;
}
.container details summary {
    padding: 15px;
    border: 1px solid;
    position: relative;
    list-style: none;
    /* background: blue; */
}
.container summary{
    width: 670px;
    cursor: pointer;
    color: white;
    background: teal;
    outline: none;
    font-size: 20px;

}
.container summary p{
    font-size: 25px;
    padding: 10px;
    color: #444;
     
}
.container details summary::after{
    content:'+';
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 30px ;
    color: #fff;
    transition: .2s linear;
}
.container details[open] summary::after{
    transform: rotate(180deg);
}
</style>