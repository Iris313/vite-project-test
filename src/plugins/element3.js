/*
 * @Descripttion: 
 * @Author: wmq
 * @Date: 2021-07-14 23:54:44
 * @LastEditTime: 2021-07-17 14:29:35
 */

// 全局引入element3
import element3 from 'element3';
import 'element3/lib/theme-chalk/index.css';

// 按需加载
// import { ElButton, ElInput } from 'element3';
// import "element3/lib/theme-chalk/button.css";
// import "element3/lib/theme-chalk/input.css";

export default function (app) {
    // 完整引入
    app.use(element3);

    // 按需引入
    // app.use(ElButton);
    // app.use(ElInput);
}