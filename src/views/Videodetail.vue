<template>
  <div class="video-detail">
    <h1>{{ video.title }}</h1>
    <video width="640" height="360" controls>
      <source :src="video.videoUrl" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <p>{{ video.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const video = ref({
  id: null,
  title: '',
  description: '',
  videoUrl: '',
})

onMounted(() => {
  const videoId = route.params.id
  // 可以在这里从API获取具体视频的详细信息
  // 例如：fetchVideoDetails(videoId)
  video.value = {
    id: videoId,
    title: '视频详情标题',
    description: '视频详情描述',
    videoUrl: 'https://example.com/video.mp4',
  }
})
</script>

<style scoped>
.video-detail {
  padding: 20px;
}

.video-detail video {
  width: 100%;
  height: auto;
}
</style>
