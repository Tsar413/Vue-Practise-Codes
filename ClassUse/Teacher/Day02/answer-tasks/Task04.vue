<template>
  <TaskPanel v-bind="meta">
    <div class="list">
      <label v-for="item in cartItems" :key="item.name" class="item">
        <span>{{ item.name }} / {{ item.price }} 元</span>
        <input v-model.number="item.count" type="number" min="0" />
      </label>
    </div>
    <p class="summary">总件数：{{ totalCount }}</p>
    <p class="summary">总价：{{ totalPrice }} 元</p>
  </TaskPanel>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
const meta = taskMetaList[3]!
const cartItems = ref([
  { name: 'Vue 实训讲义', price: 35, count: 1 },
  { name: '组件练习册', price: 18, count: 2 },
  { name: '项目模板包', price: 40, count: 1 },
])
const totalCount = computed(() => cartItems.value.reduce((sum, item) => sum + item.count, 0))
const totalPrice = computed(() => cartItems.value.reduce((sum, item) => sum + item.price * item.count, 0))
</script>

<style scoped>
.list { display: grid; gap: 12px; }
.item { display: flex; justify-content: space-between; gap: 12px; align-items: center; }
input { width: 96px; padding: 8px 10px; border: 1px solid #cbd5e1; border-radius: 10px; }
.summary { margin: 12px 0 0; font-weight: 700; }
</style>
