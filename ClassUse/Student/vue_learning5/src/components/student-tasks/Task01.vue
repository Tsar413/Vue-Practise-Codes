<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>这一题只练“组件定义 + 导入使用”，先不要混进通信逻辑。</p>
    </div>
    <div class="banner-demo">
      <h3>Vue 组件专项训练营</h3>
      <p>目标：先把 Banner 组件单独写出来，再在父页面中引入。</p>
    </div>
    <TaskScaffold summary="在 src/components/student-build/BannerBox.vue 新建组件，再到当前题目页中导入后直接使用。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[0]!
const todoText = `已学知识点提示：
1. 在 src/components/student-build/BannerBox.vue 新建组件。
2. 在组件中写一块简单的标题和描述。
3. 当前题目页导入路径：@/components/student-build/BannerBox.vue。
4. 模板里直接写 <BannerBox />。

可先思考：
- 这一题需要通信吗？不需要
- 核心目标是什么？会定义、导入、使用组件`
</script>

<style scoped>
.workspace { margin-bottom: 12px; line-height: 1.9; color: #475569; }
.workspace p { margin: 0; }
.banner-demo { padding: 22px; border-radius: 20px; background: linear-gradient(135deg, #b45309, #1d4ed8); color: #fff; }
.banner-demo h3, .banner-demo p { margin: 0; }
.banner-demo p { margin-top: 10px; opacity: 0.92; }
</style>
