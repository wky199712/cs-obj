<template>
  <el-header class="app-header">
    <div class="logo-area">
      <img src="@/assets/logo.svg" alt="Logo" class="logo-img" v-if="false" /> <span>仿Bili</span>
    </div>

    <div class="search-area">
      <el-input placeholder="搜索视频、番剧、UP主..." />
      <el-button type="primary">搜索</el-button>
    </div>

    <div class="actions-area">
      <el-avatar :size="32" class="user-avatar"> U </el-avatar> <el-button text>登录</el-button>
      <el-button text>动态</el-button>
      <el-button text>收藏</el-button>
      <el-button type="primary">投稿</el-button>
    </div>
  </el-header>
</template>

<script setup lang="ts">
// 目前不需要脚本逻辑
</script>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff; /* 或 B 站的主题色 */
  border-bottom: 1px solid var(--el-border-color-light);
  padding: 0 20px; /* 调整内边距 */
  height: 50px; /* B 站头部高度通常较小 */
}

.logo-area {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
}
.logo-img {
  height: 30px; /* 调整 Logo 大小 */
  margin-right: 10px;
}

.search-area {
  display: flex;
  align-items: center;
  width: 40%; /* 调整搜索框宽度 */
}

.search-area .el-input {
  margin-right: 10px;
}

.actions-area {
  display: flex;
  align-items: center;
}

.actions-area > * {
  margin-left: 15px; /* 调整右侧按钮间距 */
}

.user-avatar {
  margin-left: 15px;
  cursor: pointer;
}

/* 可以添加一些 Element Plus 按钮的样式微调 */
.el-button--text {
  color: var(--el-text-color-regular);
}
.el-button--text:hover {
  color: var(--el-color-primary);
}
</style>
