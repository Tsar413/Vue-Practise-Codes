<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>这一题让学生把课程卡片真正放进页面，感受组件作为页面构件的作用。</p>
    </div>
    <div class="course-grid">
      <article class="course-card">
        <span class="tag">基础</span>
        <h4>Vue 组件开发</h4>
        <p>讲师：李老师</p>
      </article>
      <article class="course-card">
        <span class="tag">通信</span>
        <h4>Emit 事件练习</h4>
        <p>讲师：陈老师</p>
      </article>
    </div>
    <TaskScaffold summary="先在 src/components/student-build/CourseCard.vue 创建组件，再导入当前题目页并传入课程标题、讲师和标签。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[3]!
const todoText = `已学知识点提示：
1. 在 src/components/student-build/CourseCard.vue 创建课程卡片组件。
2. 在当前题目页中 import CourseCard。
3. 当前题目页导入路径：@/components/student-build/CourseCard.vue。
4. 准备课程标题、讲师和标签数据。
5. 在模板里使用多个 <CourseCard /> 展示页面内容。

可先思考：
- 组件拆出来后有什么好处？可以复用
- 这一题先需要路由或事件吗？不需要`
</script>

<style scoped>
.workspace { margin-bottom: 12px; line-height: 1.9; color: #475569; }
.workspace p { margin: 0; }
.course-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; }
.course-card { padding: 18px; border: 1px solid #fed7aa; border-radius: 18px; background: linear-gradient(180deg, #fff7ed 0%, #fff 100%); }
.tag { display: inline-block; padding: 6px 10px; border-radius: 999px; background: #ffedd5; color: #9a3412; font-size: 12px; }
.course-card h4, .course-card p { margin: 10px 0 0; }
</style>
