<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>在当前组件中完成“购物车结算”。</p>
      <p>要求：修改商品数量后，总件数和总价自动更新。</p>
    </div>
    <div class="list">
      <!-- TODO: 使用 v-for 渲染商品，并给数量输入框补 v-model.number -->
    </div>
    <p class="summary">总件数：<!-- TODO --></p>
    <p class="summary">总价：<!-- TODO --> 元</p>
    <TaskScaffold summary="补全列表渲染和两个计算属性。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[3]!
const todoText = `// TODO: 定义 cartItems
// TODO: 定义 totalCount
// TODO: 定义 totalPrice
// TODO: 在模板中补 v-for 和 v-model.number`

// TODO: 定义 cartItems
// TODO: 定义 totalCount
// TODO: 定义 totalPrice
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p, .summary { margin: 0 0 10px; }
.list { display: grid; gap: 12px; }
.summary { margin-top: 12px; font-weight: 700; }
</style>
