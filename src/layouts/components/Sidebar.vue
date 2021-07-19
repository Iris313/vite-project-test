<!--
 * @Descripttion: 
 * @Author: wmq
 * @Date: 2021-07-17 16:01:37
 * @LastEditTime: 2021-07-18 19:34:28
-->
<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      default-active="1"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
      :unique-opened="true"
      router
    >
      <template v-for="(item,index) in routes">
        <el-submenu v-if="!item.hidden" :key="item.id" :index="index">
          <!-- 一级菜单 -->
          <template #title>
            <i :class="item.meta.icon"></i>
            <span>{{ item.meta.title }}</span>
          </template>
          <!-- 子级菜单 -->
          <el-menu-item
            v-for="subItem in item.children"
            :key="subItem.id"
            :index="subItem.path"
            >{{ subItem.meta.title }}</el-menu-item
          >
        </el-submenu>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
import { computed } from "vue";
// 可在页面使用变量
import variables from "styles/variables.module.scss";
import { routes } from "@/router";
import { useRoute } from "vue-router";

// activeMenu匹配path,并展示高亮
const activeMenu = computed(() => {
  const route = useRoute();
  const { meta, path } = route;
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return path;
});
</script>
