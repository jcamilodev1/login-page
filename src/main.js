import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import router from './router/router'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import './axios'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import 'sweetalert2/src/sweetalert2.scss'
import './style.css'
// If you don't need the styles, do not connect

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedState)
app.use(router)
app.use(pinia)
app.mount('#app')


