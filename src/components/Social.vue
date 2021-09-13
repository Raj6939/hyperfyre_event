<template>
<div class="social">
    <h1>Follow us on Social Media</h1>

  <label class="GFG">
      <i class="fa fa-telegram"  @click="tel"></i>
        <input type="checkbox" 
               name="checkbox" 
               value="Geeks"
               class="box">
      Telegram
  </label>
   <label class="GFG">
        <i class="fa fa-facebook-square"></i>
        <input type="checkbox" 
               name="checkbox" 
               value="Geeks"
               class="box">
      Facebook
  </label>
     <label class="GFG">
         <i class="fa fa-twitter"></i>
        <input type="checkbox" 
               name="checkbox" 
               value="Geeks"
               class="box">
      Twitter
  </label>
     <label class="GFG">
          <i class="fab fa-youtube"></i>
        <input type="checkbox" 
               name="checkbox" 
               value="Geeks"
               class="box">
      YouTube
  </label>
   

  </div>

</template>
<script>
export default{
    name:'Social',
    methods:{
        tel(){
           url= "https://www.linkedin.com/in/raj-patil-23954220a/";
        }
    }
}
</script>
<style>
@import url("https://kit.fontawesome.com/your-code-number.js");
        .GFG {
            /* display:inline-table; */
            background-color: teal;
            border-radius: 5px;
            color: white;
            padding: 5px 10px;
            text-align: center;
            display: block;
            font-size: 20px;
            margin: 10px 10px;
            cursor: pointer;
            width: 500px;
            height: 30px;
            margin-left: auto;
            margin-right: auto;
        }
       .GFG input{
            transform: scale(2);
            cursor: pointer;
            /* margin-top: auto; */
            /* margin-bottom: auto; */
        }
        .input{
            flex-direction: column;
        }
        .GFG input{
            float: right;

        }
</style>