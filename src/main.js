/*
 * @Descripttion: 
 * @Author: wmq
 * @Date: 2021-06-21 22:49:33
 * @LastEditTime: 2021-07-15 00:02:57
 */
import { createApp } from 'vue';
import App from './App.vue';

// 路由
import router from './router';

// vuex
import store from './store';

// 全局样式
import 'styles/index.scss'

import element3 from 'plugins/element3';

createApp(App).use(router).use(store).use(element3).mount('#app')
