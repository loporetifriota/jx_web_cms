import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './style.css'
import './assets/legacy-css/index.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
