<template>
  <el-header class="app-header">
    <div class="logo-area">
      <img src="@/assets/logo.svg" alt="Logo" class="logo-img" v-if="false" /> <span>仿Bili</span>
    </div>

    <div class="search-area">
      <el-input placeholder="搜索视频、番剧、UP主..." v-model="searchQuery" />
      <el-button type="primary" @click="search">搜索</el-button>
    </div>

    <div class="actions-area">
      <el-avatar :size="32" class="user-avatar"> U </el-avatar>
      <el-button text @click="login">登录</el-button>
      <el-button text>动态</el-button>
      <el-button text>收藏</el-button>
      <el-button type="primary" @click="upload">投稿</el-button>
    </div>
  </el-header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const searchQuery = ref('')

const search = () => {
  // 实现搜索逻辑
  console.log('Searching for:', searchQuery.value)
}

const login = () => {
  // 实现登录逻辑
  console.log('Logging in...')
}

const upload = () => {
  // 实现投稿逻辑
  console.log('Uploading...')
}
</script>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px solid var(--el-border-color-light);
  padding: 0 20px;
  height: 50px;
}

.logo-area {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
}
.logo-img {
  height: 30px;
  margin-right: 10px;
}

.search-area {
  display: flex;
  align-items: center;
  width: 40%;
}

.search-area .el-input {
  margin-right: 10px;
}

.actions-area {
  display: flex;
  align-items: center;
}

.actions-area > * {
  margin-left: 15px;
}

.user-avatar {
  margin-right: 5px;
}
</style>
