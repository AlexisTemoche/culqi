import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from "@tanstack/vue-query";
import App from '@/App.vue'
import router from '@/router'
import './style.css'

const pinia = createPinia()
const app = createApp(App)

app.use(VueQueryPlugin)
app.use(pinia)
app.use(router)
app.mount('#app')
