// 引入createApp用于创建应用
import {createApp} from 'vue'
// 引入App根组件
import App from './App.vue'
// 第一步 引入Pinia
import { createPinia } from 'pinia'

// 创建一个应用
const app = createApp(App)
// 第二步 创建Pinia
const pinia = createPinia()
// 第三步 安装Pinia
app.use(pinia)
// 挂载整个应用到app容器中
app.mount('#app')