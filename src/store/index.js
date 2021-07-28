/*
 * @Descripttion:
 * @Author: wmq
 * @Date: 2021-07-14 23:24:38
 * @LastEditTime: 2021-07-28 16:02:03
 */
import { createStore } from "vuex";

// 工厂函数创建
export default createStore({
  state: {
    count: 0,
  },
  mutations: {
    add(state) {
      state.count++;
    },
  },
});
