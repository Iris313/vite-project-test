<!--
 * @Descripttion: 
 * @Author: wmq
 * @Date: 2021-07-17 16:00:30
 * @LastEditTime: 2021-07-18 18:40:44
-->
<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
        <!-- 1.不希望跳转-加自定义属性；2.最后一个不跳转，只显示 -->
        <span 
            v-if="item.redirect == 'noRedirect' || index == levelList.length - 1"
            class="no-redirect"
        >{{ item.meta.title }}</span>
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, watch } from 'vue';

const levelList = ref(null);
const route = useRoute();
const router = useRouter();

const getBreadcrumb = () => {
    console.log('route.matched :>> ', route.matched);
    // 过滤出有title的route
    let matched = route.matched.filter(item=>(item.meta && item.meta.title && item.meta.breadcrumb !== false));

    // 每页都显示回首页的面包屑
    const first = matched[0];
    if (first.path !== "/") {
        matched = [{ path: "/home", meta: { title: "首页" } }].concat(matched);
    }
    
    levelList.value = matched;
}

const handleLink = (item) => {
  const { redirect, path } = item;
  if (redirect) {
    router.push(redirect);
    return;
  }
  router.push(path);
}

getBreadcrumb();
// 监听
watch(route, getBreadcrumb);

</script>

<style lang="scss" scoped></style>
