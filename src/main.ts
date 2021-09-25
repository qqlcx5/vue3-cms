import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './assets/css/index.less'
import hyRequest from './service'

// element Plus组件报错
// import registerApp from './global/index'
// registerApp(app)
// 注册全局方法
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(store).use(router).use(ElementPlus).mount('#app')

hyRequest.request({
  url: '/home/multidata',
  method: 'GET',
})
