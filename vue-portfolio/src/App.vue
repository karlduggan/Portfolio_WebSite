<template>
  <div class="background">
      <section class="px-10 min-h-screen">
      <!-- Particle Animation -->
      <vue-particles
        class="absolute h-[100%] w-[97%] "
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
    
  
    <div class="relative">
      <nav class="text-white py-10  flex justify-between mb-20 ">
        <h1 class="text-white text-xl text-center">Placeholder</h1>
        <ui class="flex item-center">
          <li>1</li>
          <li>
            <a href="#" class="bg-gradient-to-r from-cyan-400 to-teal-400 px-4 py-2 rounded-md ml-8 font-bold cursor-pointer z-10">Contact</a>
          </li>
        </ui>
      </nav>
      <div class="text-center ">
        <h1 class="text-white py-2 font-bold text-5xl ">Karl Duggan</h1>
        <h2 class="text-white py-2 text-2xl ">Software Developer</h2>
        <p class="text-white text-md py-5 leading-8">
          Freelance software and web developer, creating software solution for your buisness needs.</p>
      </div>
    </div>
    </section>
    <section class="relative  min-h-screen w-[100%]">
  
    </section>
    <section class="relative  min-h-screen w-[100%]">
  
    </section>
    

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
  background: rgb(9,4,16);
  background: linear-gradient(42deg, rgba(9,4,16,1) 0%, rgba(44,21,69,1) 40%, rgba(174,127,217,1) 100%);
  width: 100%;
  height: 100%;
  position: absolute;
}

  
</style>
