<template>
  <el-header class="app-header">
    <div class="logo-area">
      <div :style="{ display: 'flex', alignItems: 'center' }">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="zhuzhan-icon"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.73252 2.67094C3.33229 2.28484 3.33229 1.64373 3.73252 1.25764C4.11291 0.890684 4.71552 0.890684 5.09591 1.25764L7.21723 3.30403C7.27749 3.36218 7.32869 3.4261 7.37081 3.49407H10.5789C10.6211 3.4261 10.6723 3.36218 10.7325 3.30403L12.8538 1.25764C13.2342 0.890684 13.8368 0.890684 14.2172 1.25764C14.6175 1.64373 14.6175 2.28484 14.2172 2.67094L13.364 3.49407H14C16.2091 3.49407 18 5.28493 18 7.49407V12.9996C18 15.2087 16.2091 16.9996 14 16.9996H4C1.79086 16.9996 0 15.2087 0 12.9996V7.49406C0 5.28492 1.79086 3.49407 4 3.49407H4.58579L3.73252 2.67094ZM4 5.42343C2.89543 5.42343 2 6.31886 2 7.42343V13.0702C2 14.1748 2.89543 15.0702 4 15.0702H14C15.1046 15.0702 16 14.1748 16 13.0702V7.42343C16 6.31886 15.1046 5.42343 14 5.42343H4ZM5 9.31747C5 8.76519 5.44772 8.31747 6 8.31747C6.55228 8.31747 7 8.76519 7 9.31747V10.2115C7 10.7638 6.55228 11.2115 6 11.2115C5.44772 11.2115 5 10.7638 5 10.2115V9.31747ZM12 8.31747C11.4477 8.31747 11 8.76519 11 9.31747V10.2115C11 10.7638 11.4477 11.2115 12 11.2115C12.5523 11.2115 13 10.7638 13 10.2115V9.31747C13 8.76519 12.5523 8.31747 12 8.31747Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <el-button text> 首页 </el-button>
      <el-button text> 番剧 </el-button>
      <el-button text> 直播 </el-button>
      <el-button text> 游戏中心 </el-button>
      <el-button text> 漫画 </el-button>
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

<style scoped lang="scss">
.app-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-image: url('@/assets/topBanner.png');
  // background-size: 100% 240px;
  border-bottom: 1px solid var(--el-border-color-light);
  // padding: 0 20px;
  padding-top: 20px;
  min-height: 240px;
  color: #fff;
  :deep(.el-button) {
    color: #fff;
    transition: transform 0.5s linear; // 设置平滑过渡
  }

  // 同时在 hover 和 focus 状态下也保持不变
  :deep(.el-button:hover),
  :deep(.el-button:focus) {
    transform: translateY(-2px);
    color: #fff;
    background-color: transparent;
  }
  .logo-area {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: bold;

    .logo-img {
      height: 30px;
      margin-right: 10px;
    }
  }

  .search-area {
    display: flex;
    align-items: center;
    width: 40%;

    .el-input {
      margin-right: 10px;
    }
  }

  .actions-area {
    display: flex;
    align-items: center;

    > * {
      margin-left: 15px;
    }
  }

  .user-avatar {
    margin-right: 5px;
  }
}
</style>
