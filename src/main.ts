import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './modules/ModRouter'

const app = createApp(App)

app.use(router)

app.mount('#app')
