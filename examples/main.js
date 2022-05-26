import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import App from './App.vue'
import vueCron from '../packages/index.js'
const app = createApp(App)
app.use(vueCron).use(ArcoVue)
app.mount('#app')