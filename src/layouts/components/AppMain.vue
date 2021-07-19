<!--
 * @Descripttion: 
 * @Author: wmq
 * @Date: 2021-07-17 14:23:40
 * @LastEditTime: 2021-07-17 15:36:41
-->
<template>
  <section class="app-main">
    <!-- 内部应该显示子路由页面信息 -->
    <!-- v-slot 通过上下文解构出当前的这个组件 -->
    <router-view v-slot="{ Component }">
      <!-- 嵌套有动画的组件 -->
      <transition name="fade-transition" mode="out-in">
        <!-- 动态组件用component标签渲染出来 -->
        <component :is="Component" />
      </transition>
    </router-view>
  </section>
</template>

<script>
export default {
  name: "AppMain",
};
</script>

<style lang="scss" scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
