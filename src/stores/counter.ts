import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// 导出一个名为 useCounterStore 的常量，该常量是通过 defineStore 函数创建的 store
export const useCounterStore = defineStore('counter', () => {
  // 定义一个名为 count 的响应式引用，初始值为 0
  const count = ref(0)
  // 定义一个名为 doubleCount 的计算属性，其值为 count 的两倍
  const doubleCount = computed(() => count.value * 2)
  // 定义一个名为 increment 的函数，用于增加 count 的值
  function increment() {
    count.value++
  }

  // 返回一个对象，包含 count、doubleCount 和 increment，以便在组件中使用
  return { count, doubleCount, increment }
})
