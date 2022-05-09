import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './index.css'
import '../node_modules/flickity/dist/flickity.css'
import 'flowbite'

createApp(App).use(router).mount('#app')
