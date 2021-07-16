/*
 * @Descripttion: 
 * @Author: wmq
 * @Date: 2021-07-14 23:09:32
 * @LastEditTime: 2021-07-14 23:14:59
 */
import { createRouter, createWebHashHistory } from 'vue-router';

// 工厂函数创建 router 实例
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: () => import('views/home.vue') }
    ]
});

export default router;