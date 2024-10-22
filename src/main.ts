import './assets/index.css'

import { createApp } from 'vue'
import App from './App.vue'

import WebApp from '@twa-dev/sdk'

WebApp.ready()

createApp(App).mount('#app')
