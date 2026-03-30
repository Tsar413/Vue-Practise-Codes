<template>
  <TaskPanel v-bind="meta">
    <div class="workspace"><p>这一题要对比普通组件生命周期和缓存组件生命周期。切走后不是卸载，而是停用。</p></div>
    <div class="cache-life-demo">
      <!-- TODO 学生练习区：导入两个缓存面板组件 -->
      <!-- TODO 学生练习区：完善切换逻辑，重点观察 activated 和 deactivated -->
      <div class="switcher">
        <button class="active">缓存面板 A</button>
        <button>缓存面板 B</button>
      </div>
      <div class="log-box">
        <!-- TODO 学生练习区：把这里改成缓存组件展示区 -->
        <p>activated: 重新显示</p>
        <p>deactivated: 临时停用</p>
      </div>
    </div>
    <TaskScaffold summary="准备一个会被缓存的组件，并记录激活与停用日志；切换时对比它与普通卸载的区别。" :code-hint="todoText" />
  </TaskPanel>
</template>
<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[6]!
const todoText = `已学知识点提示：
1. 在被缓存的组件中引入 onActivated 和 onDeactivated。
2. 让切换区域具备缓存效果。
3. 日志里要能看见“激活/停用”，而不是只看见 mounted/unmounted。
4. 也可以额外保留输入框，方便观察缓存是否生效。

可先思考：
- 缓存组件切走时为什么不一定触发 unmounted？
- activated 和 mounted 的区别是什么？`
</script>
<style scoped>
.workspace { margin-bottom: 12px; line-height: 1.9; color: #475569; }
.workspace p { margin: 0; }
.cache-life-demo { display: grid; gap: 12px; }
.switcher { display: flex; gap: 10px; }
.switcher button { padding: 10px 14px; border: 1px solid #bfdbfe; border-radius: 999px; background: #fff; color: #1d4ed8; }
.switcher button.active { background: #dbeafe; }
.log-box { padding: 16px; border: 1px dashed #93c5fd; border-radius: 16px; background: #f8fbff; }
.log-box p { margin: 0; color: #475569; }
.log-box p + p { margin-top: 8px; }
</style>
