<template>
  <div class="video-list">
    <h1>视频列表</h1>
    <div v-for="video in videos" :key="video.id" class="video-item">
      <img :src="video.thumbnail" alt="Video Thumbnail" />
      <h2>{{ video.title }}</h2>
      <p>{{ video.description }}</p>
      <router-link :to="`/videos/${video.id}`">查看详情</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const videos = ref([
  {
    id: 1,
    title: '视频标题1',
    description: '视频描述1',
    thumbnail: 'https://example.com/thumbnail1.jpg',
  },
  {
    id: 2,
    title: '视频标题2',
    description: '视频描述2',
    thumbnail: 'https://example.com/thumbnail2.jpg',
  },
])

onMounted(() => {
  // 可以在这里从API获取真实的视频数据
})
</script>

<style scoped>
.video-list {
  padding: 20px;
}

.video-item {
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
}

.video-item img {
  width: 100%;
  height: auto;
}
</style>
