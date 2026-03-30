<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>先完成分类和列表的静态渲染，再补分类切换与搜索功能。</p>
    </div>
    <div class="demo-shell">
      <aside class="menu">
        <button class="menu-item active">Vue 基础</button>
        <button class="menu-item">组件开发</button>
        <button class="menu-item">项目实战</button>
      </aside>
      <section class="board">
        <input type="text" placeholder="请输入关键字搜索教程" />
        <div class="lesson-list">
          <article class="lesson-card">
            <h4>Vue 模板语法</h4>
            <p>学习插值表达式和属性绑定。</p>
          </article>
          <article class="lesson-card">
            <h4>计算属性训练</h4>
            <p>掌握结果型数据的处理方式。</p>
          </article>
        </div>
      </section>
    </div>
    <TaskScaffold summary="补全分类数据、切换状态、搜索关键字和筛选后的教程列表。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[0]!
const todoText = `已学知识点提示：
1. 定义分类数组 categoryList 和教程原始数据 lessonMap。
2. 定义当前分类 currentType 和关键字 keyword。
3. 左侧分类用 v-for 渲染，点击时更新 currentType。
4. 当前分类按钮用 :class="{ active: ... }" 控制高亮。
5. 搜索框用 v-model 绑定 keyword。
6. 用 computed 返回 filteredLessons，再渲染右侧教程列表。

可先思考：
- 哪些是原始数据？categoryList、lessonMap
- 哪些是状态数据？currentType
- 哪些是输入数据？keyword
- 哪些是结果数据？filteredLessons`

// TODO: 定义 categoryList
// TODO: 定义 lessonMap
// TODO: 定义 currentType
// TODO: 定义 keyword
// TODO: 定义 filteredLessons

const categorySource = [
  { type: 'base', label: 'Vue 基础' },
  { type: 'component', label: '组件开发' },
  { type: 'project', label: '项目实战' },
]

const lessonSource = {
  base: [
    { id: 1, name: 'Vue 模板语法', desc: '学习插值表达式和属性绑定。' },
    { id: 2, name: '计算属性训练', desc: '掌握结果型数据的处理方式。' },
    { id: 3, name: '条件与列表渲染', desc: '用 v-if 和 v-for 构建动态页面。' },
  ],
  component: [
    { id: 4, name: 'Props 基础', desc: '理解父子组件通信的基本方式。' },
    { id: 5, name: '插槽案例', desc: '让组件的内容区域支持灵活扩展。' },
    { id: 6, name: '组件样式组织', desc: '处理作用域样式和组件复用。' },
  ],
  project: [
    { id: 7, name: '购物车综合案例', desc: '训练数组型页面的增删改和统计。' },
    { id: 8, name: '投票器综合案例', desc: '练习点击联动和最高票统计。' },
    { id: 9, name: '页面拆解方法', desc: '从需求出发梳理数据、渲染和交互。' },
  ],
} as const
</script>

<style scoped>
.workspace {
  margin-bottom: 12px;
  line-height: 1.9;
  color: #475569;
}

.workspace p {
  margin: 0;
}

.demo-shell {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 18px;
  min-height: 420px;
  padding: 18px;
  border-radius: 24px;
  background: linear-gradient(180deg, #ecfeff 0%, #f8fafc 100%);
}

.menu {
  display: grid;
  gap: 10px;
  align-content: start;
}

.menu-item,
.board input {
  font: inherit;
}

.menu-item {
  padding: 14px 16px;
  border: 1px solid #bae6fd;
  border-radius: 16px;
  background: #fff;
  text-align: left;
  color: #0f172a;
}

.menu-item.active {
  border-color: #06b6d4;
  background: #cffafe;
  color: #155e75;
}

.board {
  display: grid;
  align-content: start;
  gap: 14px;
}

.board input {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #cbd5e1;
  border-radius: 14px;
  box-sizing: border-box;
}

.lesson-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
}

.lesson-card {
  padding: 16px;
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  background: #fff;
}

.lesson-card h4,
.lesson-card p {
  margin: 0;
}

.lesson-card p {
  margin-top: 8px;
}

@media (max-width: 720px) {
  .demo-shell {
    grid-template-columns: 1fr;
  }
}
</style>
