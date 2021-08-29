import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import registerApp from './global'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
const app = createApp(App)

// registerApp(app)
app.use(ElementPlus)
app.use(store).use(router).mount('#app')
