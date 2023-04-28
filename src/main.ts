import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import {BootstrapIconsPlugin} from 'bootstrap-icons-vue'

createApp(App).use(BootstrapIconsPlugin).mount('#app')
