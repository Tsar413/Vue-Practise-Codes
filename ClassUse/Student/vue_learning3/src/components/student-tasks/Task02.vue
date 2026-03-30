<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>完成“成绩案例”。</p>
      <p>要求：完成列表渲染、不及格高亮、空数据提示、添加成绩、删除成绩、总分和平均分统计。</p>
    </div>
    <div class="form">
      <input type="text" placeholder="请输入科目" />
      <input type="number" placeholder="请输入分数" />
      <button>添加<!-- TODO: 给按钮补 @click --></button>
    </div>
    <p class="tip"><!-- TODO: 显示 scoreTip --></p>
    <div class="panel">
      <!-- TODO: 当列表为空时显示“暂无数据” -->
      <!-- TODO: 列表不为空时使用 v-for 渲染成绩 -->
      <!-- TODO: 低于 60 分的分数补 :class -->
      <!-- TODO: 删除按钮补 @click="removeScore(item.id)" -->
    </div>
    <p class="result">总分：<!-- TODO: 显示 totalScore --></p>
    <p class="result">平均分：<!-- TODO: 显示 averageScore --></p>
    <TaskScaffold summary="补全输入绑定、列表增删、空状态、动态样式和统计计算。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[1]!
const todoText = `已学知识点提示：
1. 表单输入：科目使用 v-model.trim，分数使用 v-model.number。
2. 列表渲染：成绩列表使用 v-for 输出，每项包含 subject 和 score。
3. 条件渲染：列表为空时使用 v-if 显示“暂无数据”。
4. 动态样式：不及格分数可用 :class 绑定 fail 样式。
5. 点击事件：添加和删除分别使用 @click 触发 addScore、removeScore。
6. 计算属性：总分和平均分属于“结果数据”，适合用 computed。
7. 监视器：watch 适合在输入值或列表变化后更新 scoreTip。

可先思考：
- 哪些是输入数据？subject、score
- 哪些是原始列表数据？scoreList
- 哪些是结果数据？totalScore、averageScore
- 哪些是状态/提示数据？scoreTip`

// TODO: 定义 subject
// TODO: 定义 score
// TODO: 定义 scoreTip
// TODO: 定义 scoreList
// TODO: 编写 addScore
// TODO: 编写 removeScore
// TODO: 定义 totalScore
// TODO: 定义 averageScore
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p, .tip, .result { margin: 0 0 8px; }
.form { display: grid; grid-template-columns: 1fr 140px auto; gap: 12px; }
input { width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; box-sizing: border-box; }
button { padding: 10px 16px; border: none; border-radius: 12px; background: #db2777; color: #fff; cursor: pointer; }
.tip { margin-top: 12px; }
.panel { margin-top: 12px; padding: 14px; border-radius: 14px; background: #f8fafc; }
.result { margin-top: 12px; font-weight: 700; }
@media (max-width: 720px) {
  .form { grid-template-columns: 1fr; }
}
</style>
