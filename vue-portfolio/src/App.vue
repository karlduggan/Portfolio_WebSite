<template>
  <div class="background snap-y snap-mandatory overflow-x-hidden">
      <section class="snap-start px-10 min-h-screen">
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
      <nav class="text-white py-10  flex justify-between mb-14 ">
        <h1 class="text-white text-xl text-center">Karl Duggan</h1>
        <ui class="flex item-center list-none">
          <li>
            <a href="#" class="bg-gradient-to-r from-cyan-400 to-teal-400 px-4 py-2 rounded-md ml-8 font-bold cursor-pointer z-10">Contact</a>
          </li>
        </ui>
      </nav>
      <div class="text-center pt-20">
        <h1 class="text-cyan-400 py-2 font-bold text-5xl ">Karl Duggan</h1>
        <h2 class="text-white py-2 text-2xl ">Software Developer</h2>
        <p class="text-white text-md py-5 leading-8">
          Freelance software and web developer, creating software solution for your buisness needs.
        </p>
        <ui class="flex justify-center list-none py-2 gap-6">
          <li>
            <a href="https://www.github.com/karlduggan">
              <svg xmlns="http://www.w3.org/2000/svg" class="fill-cyan-400" width="40" height="40" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/karl-duggan-3666261ba/">
              <svg xmlns="http://www.w3.org/2000/svg" class="fill-cyan-400" width="40" height="40" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-cyan-400" width="60" height="45" viewBox="2 3 20 20"  fill="none" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </li>
        </ui>
      </div>
    </div>
    </section>

    <section class="snap-start px-10 min-h-screen w-[100%] bg-[rgba(44,21,69,1)]  text-white py-10">
      <div class="max-w-4xl mx-auto">
    <h1 class="text-cyan-400 py-4 font-bold text-4xl underline underline-offset-8 text-left mb-8">About Me</h1>
    <div class="flex flex-col md:flex-row justify-between">
      <div class="md:w-1/2 mb-8 md:mb-0">
        <p class="text-left leading-8">
          I am a software developer based in Brighton, UK. I am passionate about exploring creative ideas and transforming them into reality with the help of technologies such as Python, SQL, JavaScript, HTML, and CSS.
        </p>
      </div>
      <div class="md:w-1/2">
        <p class="text-left leading-8">
          I have experience in designing and developing desktop applications that can help boost productivity and improve daily business operations. Additionally, I have expertise in writing Python scripts and SQL queries for manipulating and extracting large datasets, as well as presenting and analyzing data visually.
        </p>
      </div>
    </div>
  </div>
    </section>

    <section class="snap-start px-10 relative min-h-screen w-[100%] bg-gradient-to-b from-[rgba(44,21,69,1)] to-[rgba(174,127,217,1)] text-slate py-10">
      
      <h1 class="text-cyan-400 py-4 font-bold text-4xl ">Apps</h1>
      <ProjectSection></ProjectSection>
      
    </section>
    <section class="snap-start px-10 relative min-h-screen w-[100%] bg-gradient-to-b from-[rgba(174,127,217,1)] to-gray-50 text-slate py-10">
      
      <h1 class="text-cyan-400 py-4 font-bold text-4xl ">Websites</h1>
      
    </section>
    
    <section class="snap-start relative min-h-screen w-[100%] bg-gray-50 text-slate py-10">
      <div class="px-10 ">
        <h1 class="text-cyan-400 py-4 font-bold text-5xl ">Send me a message!</h1>
        <h2 class="text-slate pb-6 text-xl ">Got a question or proposal, or just want <br> to say hello? Go ahead.</h2>
        <ContactSection></ContactSection>
      </div>

      <footer class="bg-[rgba(174,127,217,1)] bottom-0 absolute w-[100%] text-white h-8 flex items-center justify-center">
        <p class="text-xs">Karl Duggan 2023</p>
      </footer>
  </section>

  </div>
</template>

<script>

import ContactSection from './components/ContactSection.vue';
import ProjectSection from './components/ProjectSection.vue';

export default {
  name: 'App',
  components: {
    ContactSection,
    ProjectSection
   
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
