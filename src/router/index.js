// Router 主配置文件，规范名叫index.js
// 1. 引入 Vue 和 Vue-router 模块
import Vue from 'vue'
import router from 'vue-router'
import Content from '../components/Content'
import Main from '../components/Main'

// 2. 声明 Vue 使用 VueRouter
Vue.use(router)

// 3. 配置 VueRouter 并输出
export default new router({
    routes:[
        {
            path: "/content", // 3.1 配置页面访问的 url
            component: Content, // 3.2 配置对应的组件，需要 import 引入
            name: "content" // 3.3 配置组件名称，不强制
        },
        {
            path: "/main",
            component: Main
        }
    ]
});

