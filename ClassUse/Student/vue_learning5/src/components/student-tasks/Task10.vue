<template>
  <TaskPanel v-bind="meta">
    <div class="workspace"><p>这一题练跨级通信。祖先组件提供主题色，深层子组件直接获取。</p></div>
    <div class="theme-shell"><div class="theme-tag">祖先组件提供：#f59e0b</div><div class="theme-box">深层组件显示主题色</div></div>
    <TaskScaffold summary="在 src/components/student-build/ThemeBadge.vue 中使用 inject，祖先组件 provide 主题色，深层子组件显示。" :code-hint="todoText" />
  </TaskPanel>
</template>
<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'
const meta = taskMetaList[9]!
const todoText = `已学知识点提示：
1. 祖先组件定义 themeColor。
2. 使用 provide('themeColor', themeColor)。
3. 在 src/components/student-build/ThemeBadge.vue 中使用 inject('themeColor') 获取。
4. 当前题目页导入路径：@/components/student-build/ThemeBadge.vue。
5. 用这个颜色设置文字或边框样式。

可先思考：
- 为什么不用一层层 props？因为中间层不关心这个公共数据
- provide/inject 适合什么？跨层公共信息`
</script>
<style scoped>
.workspace{margin-bottom:12px;line-height:1.9;color:#475569}.workspace p{margin:0}.theme-shell{display:grid;gap:12px}.theme-tag{padding:12px 14px;border-radius:14px;background:#fff7ed;color:#9a3412}.theme-box{padding:20px;border:2px dashed #f59e0b;border-radius:18px;color:#9a3412;background:#fff}
</style>
