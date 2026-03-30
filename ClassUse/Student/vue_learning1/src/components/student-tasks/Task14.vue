<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>在当前组件中完成“图片展示”。</p>
      <p>要求：页面显示课程封面图片和对应说明文字。</p>
    </div>
    <div class="todo-block image-card">
      <img alt="课程封面" />
      <!-- TODO: 给图片补 :src -->
      <p><!-- TODO: 显示 caption --></p>
      <button>切换图片<!-- TODO: 给按钮补 @click --></button>
    </div>
    <TaskScaffold
      summary="补全 script 和 template。"
      :code-hint="todoText"
    />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[13]!
const todoText = `// TODO: 定义 cover 和 caption
// TODO: 编写 switchCover
// TODO: 给图片补 :src
// TODO: 给按钮补点击事件`

// TODO: 定义 cover
// TODO: 定义 caption
// TODO: 编写 switchCover
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p { margin: 0 0 8px; }
.todo-block { margin-top: 14px; }
.image-card img { width: 100%; max-width: 320px; border-radius: 16px; display: block; }
.image-card p { margin: 12px 0; color: #64748b; }
button { padding: 10px 16px; border: none; border-radius: 12px; background: #1d4ed8; color: #fff; cursor: pointer; }
</style>
