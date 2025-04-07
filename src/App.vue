<template>
  <el-container class="app-container">
    <AppHeader />

    <el-main class="main-content">
      <router-view />
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue' // 引入头部组件
// 如果之前有导入 HelloWorld 或 useCounterStore，请确保删除或注释掉
// import HelloWorld from './components/HelloWorld.vue'
// import { useCounterStore } from './stores/counter'
</script>

<style scoped>
.app-container {
  min-height: 100vh; /* 确保容器至少占满整个视口高度 */
  display: block;
}

/* .main-content 可以根据需要添加内边距等样式 */
.main-content {
  padding: 20px; /* 给主内容区一些内边距 */
  background-color: #f4f4f4; /* 设置一个浅灰色背景，类似B站 */
}

/* 覆盖 Element Plus 可能给 el-header 带来的默认 padding */
.app-container > .el-header {
  /* padding: 0; */
}
</style>
