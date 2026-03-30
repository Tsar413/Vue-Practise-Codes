<template>
  <TaskPanel v-bind="meta">
    <div class="workspace"><p>这一题重点理解参数对象，而不是必须接入真实路由库。</p></div>
    <div class="params-shell"><button class="course-link">课程 101 · Vue 组件开发</button><button class="course-link">课程 205 · Emit 事件练习</button><div class="params-card"><p>点击课程后，应带走：</p><pre><code>{ id: '101', title: 'Vue 组件开发' }</code></pre></div></div>
    <TaskScaffold summary="点击课程项时，整理出 id 和 title 组成的参数对象，交给详情页或详情区域使用。" :code-hint="todoText" />
  </TaskPanel>
</template>
<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'
const meta = taskMetaList[8]!
const todoText = `已学知识点提示：
1. 准备课程列表数据 courseSource。
2. 点击某一项时拿到当前课程对象。
3. 从当前对象中提取 id 和 title。
4. 组成 params 对象，传给详情页使用。

可先思考：
- params 里放什么？详情页必须知道的关键信息
- 最常见字段有哪些？id、title`
</script>
<style scoped>
.workspace{margin-bottom:12px;line-height:1.9;color:#475569}.workspace p{margin:0}.params-shell{display:grid;gap:12px}.course-link{padding:14px 16px;border:1px solid #fdba74;border-radius:16px;background:#fff;color:#9a3412;text-align:left}.params-card{padding:16px;border-radius:16px;background:#f8fafc}.params-card p,.params-card pre{margin:0}.params-card pre{margin-top:10px}
</style>
