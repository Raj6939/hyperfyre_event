<template>
<Header/>
  <div id="nav">
  <h1>Login here to get into event</h1>
<button @click="login">Login Using HyperSign</button>
      </div>
  
</template>

<script>
import Header from './Header.vue'
export default {
name:'App',
components:{Header},
methods:{
    login(){
        this.$router.push('/home')
    }
}
}
</script>

<style>

body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#nav button{
  color:white;
  background: teal;
  padding: 10px;
  /* border-radius: 5px; */
  cursor: pointer;
  font-weight: bold;
  
  
}
#nav button:hover{
  background:darkolivegreen;

} 
</style>