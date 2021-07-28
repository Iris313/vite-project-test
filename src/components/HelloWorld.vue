<!--
 * @Descripttion: 
 * @Author: wmq
 * @Date: 2021-06-21 22:49:33
 * @LastEditTime: 2021-07-19 11:12:46
-->
<template>
  <h1>{{ msg }}</h1>
  <p @click="$store.commit('add')">{{$store.state.count}}</p>
  <Comp />
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <el-button type="button" @click="state.count++">count is: {{ state.count }}</el-button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <el-input></el-input>
</template>

<script setup>
import { defineProps, reactive } from 'vue'
import Comp from 'comps/Comp.vue';
import request from 'utils/request';

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
// mock请求测试
fetch('/api/getUsers').then(res=>res.json()).then(data=>{
  console.log('data :>> ', data);
})
// axios 封装请求测试
try {
  const users = await request('/getUsers');
  console.log('users :>> ', users);
} catch (error) {
  console.log('error :>> ', error);
}

</script>

<style scoped>
</style>
