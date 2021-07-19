/*
 * @Descripttion: 
 * @Author: wmq
 * @Date: 2021-06-21 22:49:33
 * @LastEditTime: 2021-07-17 15:43:46
 */
import { createApp } from 'vue';
import App from './App.vue';

// 路由
import router from './router';

// vuex
import store from './store';

// 全局样式
import 'styles/index.scss'

// element3
import element3 from 'plugins/element3';

const app = createApp(App);
element3(app);

app.use(router).use(store).mount('#app')
