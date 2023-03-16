import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueParticles from 'vue-particles'


createApp(App)
.use(VueParticles)
.mount('#app')
