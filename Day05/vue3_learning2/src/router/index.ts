// 创建一个路由器，并暴露出去

// 1. 第一步：引入createRouter
import {createRouter, createWebHistory} from 'vue-router'
// 引入一个个可能要呈现组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'

// 2. 第二步：创建路由器
const router = createRouter({
    history: createWebHistory(), // 路由器的工作模式
    routes: [ // 一个一个的路由规则
        {
            name: 'home',
            path:'/',
            component:Home
        },
        {
            name: 'home-page',
            path:'/home',
            component:Home
        },
        {
            name: 'news-page',
            path:'/news',
            component:News,
            children:[
                {
                    name: 'detail-page',
                    path: 'detail/:id/:title/:content',
                    component:Detail,
                    props: true
                }
            ]
        },
        {
            name: 'about-page',
            path:'/about',
            component:About
        },
        {
            path:'/',
            redirect:'/about'
        }
    ]
})

// 暴露出去router
export default router
