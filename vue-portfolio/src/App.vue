<template>
 
  <div class="background">
  
    <vue-particles
        color="#fff"
        :particleOpacity="0.7"
        :particlesNumber="200"
        shapeType="circle"
        :particleSize="2"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="false"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed=".30"
        :hoverEffect="false"
        hoverMode="grab"
        :clickEffect="false"
        clickMode="push"
    
      
  ></vue-particles>
      </div>
</template>

<script>




export default {
  name: 'App',
  components: {

   
}
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.background {
  background-color: black;
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
