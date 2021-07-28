/*
 * @Descripttion:
 * @Author: wmq
 * @Date: 2021-06-21 22:49:33
 * @LastEditTime: 2021-07-28 16:45:03
 */
import { defineConfig } from "vite"; // 可以获得代码提示
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { viteMockServe } from "vite-plugin-mock";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  css: {},
  esbuild: {},
  alias: {
    "@": path.resolve(__dirname, "src"),
    comps: path.resolve(__dirname, "src/components"),
    views: path.resolve(__dirname, "src/views"),
    styles: path.resolve(__dirname, "src/styles"),
    plugins: path.resolve(__dirname, "src/plugins"),
    utils: path.resolve(__dirname, "src/utils"),
  },
  plugins: [vue(), vueJsx(), viteMockServe({ supportTs: false })],
  server: {
    host: "0.0.0.0",
  },
});


// vue中 vue.congif.js 中写入这个  保存自动编译
// module.exports = {
//   chainWebpack: config => {
//     config.module
//       .rule('eslint')
//       .use('eslint-loader')
//       .loader('eslint-loader')
//       .tap(options => {
//         options.fix = true
//         return options
//       })
//   }
// }