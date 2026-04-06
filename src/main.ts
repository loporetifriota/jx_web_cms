import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './style.css'
import './assets/legacy-css/main.min.css'
import './assets/legacy-css/extracted-styles.css'
import './assets/legacy-css/elementor-frontend.css'
import './assets/legacy-css/megamenu.css'
import './assets/legacy-css/swiper.css'
import './assets/legacy-css/e-swiper.css'
import './assets/legacy-css/widget-image-carousel.css'
import './assets/legacy-css/widget-posts.css'
import './assets/legacy-css/widget-nested-tabs.css'
import './assets/legacy-css/post-3797.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
