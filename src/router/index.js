/*
 * @Descripttion: 
 * @Author: wmq
 * @Date: 2021-07-14 23:09:32
 * @LastEditTime: 2021-07-19 11:17:03
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '@/layouts/index.vue';

export const routes = [
    {   
        path: '/',
        redirect: "home",
        component: Layout, 
        meta: { title: "控制台", icon:"el-icon-setting" },
        children: [
            { 
                path: '/home', 
                name: "Home",
                component: () => import('views/home.vue') ,
                meta: { title: "首页", icon: "el-icon-s-home" },
            },
        ]
    },
    { 
        path: '/user', 
        name: "User",
        redirect: "/user/list",
        component: Layout, 
        meta: { title: "用户管理", icon: "el-icon-s-home" },
        children: [
            { 
                path: '/list', 
                component: () => import('views/test.vue') ,
                meta: { title: "用户列表", icon: "el-icon-s-home" },
            }
        ]
    },

]

// 工厂函数创建 router 实例
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;