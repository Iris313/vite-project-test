/*
 * @Descripttion: 
 * @Author: wmq
 * @Date: 2021-06-21 22:49:33
 * @LastEditTime: 2021-07-15 00:01:43
 */
import { defineConfig } from 'vite'   // 可以获得代码提示
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
import { viteMockServe } from 'vite-plugin-mock';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  css: {},
  esbuild: {},
  alias: {
    "@": path.resolve(__dirname, "src"),
    "comps": path.resolve(__dirname, "src/components"),
    "views": path.resolve(__dirname, "src/views"),
    "styles": path.resolve(__dirname, "src/styles"),
    "plugins": path.resolve(__dirname, "src/plugins"),
  },
  plugins: [vue(),vueJsx(),viteMockServe({supportTs: false})],
  server: {
    host: '0.0.0.0'
  }
})
