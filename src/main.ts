import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// element Plus组件报错
// import registerApp from './global/index'
// 注册全局方法
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// registerApp(app)
const app = createApp(App)

app.use(store).use(router).use(ElementPlus).mount('#app')
