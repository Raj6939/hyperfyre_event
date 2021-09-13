<template>
  <h1>Test GiveAway</h1>
  <h2>Welcome To HyperFyre</h2>
<div id="table">
  <div id="menu">
<blink class="blink">
<div id="row">{{points}}<br>Points</div>
<div id="row">{{entries}}<br>Entries</div>
<div id="row">{{days}}<br>Days Left</div>
</blink>

  </div>
<p>Banner Ad</p>
</div>

 
</template>

<script>
export default {
name:'Header',
data(){
return{
  points:100,
  entries:120,
  days:2
}
}
}

</script>

<style>
.blink {
  animation: blink 1s steps(1, end) infinite;
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.blink {
  animation: blink 1s infinite;
}
#row{
  font-weight: bold;
  display: inline-block;
  padding: 40px;
  /* padding-top: 20px; */
}
#table{
  border: black;
  height: 300px;
  width:500px;
  background: wheat;
}
#table {
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
}

#menu{
  border-radius: 5px;
  background: teal;
  color: white;
} 
</style>