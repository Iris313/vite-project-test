<!--
 * @Descripttion: 
 * @Author: wmq
 * @Date: 2021-07-17 14:15:15
 * @LastEditTime: 2021-07-18 18:02:48
-->
<template>
    <div class="app-wrapper">
        <!-- 左侧边栏 -->
        <sidebar class="sidebar-container"></sidebar>
        <!-- 右侧内容容器 -->
        <div class="main-container">
            <!-- 顶部导航栏 -->
            <navbar />
            <!-- 内容区 -->
            <app-main />
        </div>
    </div>
</template>

<script setup>
import AppMain from './components/AppMain.vue';
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
</script>

<style lang="scss" scoped>
.app-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
} 
</style>