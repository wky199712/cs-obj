<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container">
    <!-- 顶部导航栏 -->
    <header class="bili-header">
      <div class="header-inner">
        <!-- 左侧 Logo 区域 -->
        <div class="left-entry">
          <img alt="bilibili" class="logo" src="@/assets/logo.svg" />
        </div>

        <!-- 中间导航菜单 -->
        <nav class="center-nav">
          <RouterLink to="/" class="nav-item">首页</RouterLink>
          <RouterLink to="/anime" class="nav-item">番剧</RouterLink>
          <RouterLink to="/live" class="nav-item">直播</RouterLink>
          <RouterLink to="/manga" class="nav-item">漫画</RouterLink>
          <RouterLink to="/game" class="nav-item">游戏中心</RouterLink>
        </nav>

        <!-- 右侧搜索和用户区域 -->
        <div class="right-entry">
          <div class="search-bar">
            <input type="text" placeholder="搜索" />
            <button class="search-btn">
              <i class="search-icon">🔍</i>
            </button>
          </div>
          <div class="user-entry">
            <RouterLink to="/login" class="login-btn">登录</RouterLink>
          </div>
        </div>
      </div>
    </header>

    <!-- 主要内容区域 -->
    <main class="main-container">
      <!-- <RouterView /> -->
    </main>
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  background-color: #f1f2f3;
}

.bili-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  z-index: 1000;
}

.header-inner {
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0 24px;
}

.left-entry {
  flex: none;
  margin-right: 30px;
}

.logo {
  width: 60px;
  height: auto;
}

.center-nav {
  display: flex;
  gap: 20px;
}

.nav-item {
  color: #18191c;
  font-size: 14px;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 6px;
}

.nav-item:hover,
.nav-item.router-link-active {
  color: #fb7299;
  background-color: rgba(251, 114, 153, 0.1);
}

.right-entry {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 20px;
}

.search-bar {
  display: flex;
  align-items: center;
  background: #f1f2f3;
  border-radius: 8px;
  padding: 8px 12px;
}

.search-bar input {
  border: none;
  background: transparent;
  outline: none;
  width: 200px;
  font-size: 14px;
}

.search-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 4px;
}

.login-btn {
  display: inline-block;
  padding: 8px 16px;
  color: #fff;
  background-color: #fb7299;
  border-radius: 6px;
  text-decoration: none;
  font-size: 14px;
}

.main-container {
  margin-top: 64px;
  padding: 20px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}
</style>
