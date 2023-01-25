import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import Typewriter from 'typewriter-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
createApp(App).use(store).use(router).use(MotionPlugin).mount('#app')
