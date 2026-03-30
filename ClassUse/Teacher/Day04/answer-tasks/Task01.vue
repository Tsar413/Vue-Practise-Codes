<template>
  <TaskPanel v-bind="meta">
    <div class="demo-shell">
      <aside class="menu">
        <button
          v-for="item in categoryList"
          :key="item.type"
          :class="['menu-item', { active: currentType === item.type }]"
          @click="currentType = item.type"
        >
          {{ item.label }}
        </button>
      </aside>

      <section class="board">
        <input v-model.trim="keyword" type="text" placeholder="请输入关键字搜索教程" />

        <div v-if="filteredLessons.length" class="lesson-list">
          <article v-for="item in filteredLessons" :key="item.id" class="lesson-card">
            <span class="tag">{{ currentLabel }}</span>
            <h4>{{ item.name }}</h4>
            <p>{{ item.desc }}</p>
          </article>
        </div>

        <div v-else class="empty">当前分类下没有匹配“{{ keyword }}”的教程。</div>
      </section>
    </div>
  </TaskPanel>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[0]!
const categoryList = [
  { type: 'base', label: 'Vue 基础' },
  { type: 'component', label: '组件开发' },
  { type: 'project', label: '项目实战' },
]

const lessonMap = {
  base: [
    { id: 1, name: 'Vue 模板语法', desc: '学习插值表达式、属性绑定和事件绑定。' },
    { id: 2, name: '响应式基础', desc: '熟悉 ref 与 reactive 的用法。' },
    { id: 3, name: '条件与列表渲染', desc: '用 v-if 和 v-for 构建动态页面。' },
  ],
  component: [
    { id: 4, name: 'Props 与 Emit', desc: '掌握父子组件通信的基本模式。' },
    { id: 5, name: '插槽实战', desc: '理解组件复用中的插槽分发。' },
    { id: 6, name: '组件样式组织', desc: '让结构、样式和复用能力同时可控。' },
  ],
  project: [
    { id: 7, name: '购物车案例', desc: '综合使用列表、点击、统计和持久化。' },
    { id: 8, name: '投票器案例', desc: '通过数组项更新和 computed 完成结果联动。' },
    { id: 9, name: '页面拆解方法', desc: '训练从需求到数据结构再到交互的完整顺序。' },
  ],
} as const

const currentType = ref<keyof typeof lessonMap>('base')
const keyword = ref('')

const filteredLessons = computed(() =>
  lessonMap[currentType.value].filter((item) => item.name.includes(keyword.value) || item.desc.includes(keyword.value)),
)

const currentLabel = computed(
  () => categoryList.find((item) => item.type === currentType.value)?.label ?? '',
)
</script>

<style scoped>
.demo-shell { display: grid; grid-template-columns: 220px minmax(0, 1fr); gap: 18px; min-height: 420px; padding: 18px; border-radius: 24px; background: linear-gradient(180deg, #ecfeff 0%, #f8fafc 100%); }
.menu { display: grid; gap: 10px; align-content: start; }
.menu-item, .board input { font: inherit; }
.menu-item { padding: 14px 16px; border: 1px solid #bae6fd; border-radius: 16px; background: #fff; text-align: left; color: #0f172a; cursor: pointer; }
.menu-item.active { border-color: #06b6d4; background: #cffafe; color: #155e75; }
.board { display: grid; align-content: start; gap: 14px; }
.board input { width: 100%; padding: 12px 14px; border: 1px solid #cbd5e1; border-radius: 14px; box-sizing: border-box; }
.lesson-list { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; }
.lesson-card { padding: 16px; border: 1px solid #e2e8f0; border-radius: 18px; background: #fff; }
.tag { display: inline-block; padding: 6px 10px; border-radius: 999px; background: #ecfeff; color: #155e75; font-size: 12px; }
.lesson-card h4, .lesson-card p { margin: 10px 0 0; }
.empty { padding: 18px; border-radius: 18px; background: #fff7ed; color: #9a3412; }
@media (max-width: 720px) {
  .demo-shell { grid-template-columns: 1fr; }
}
</style>
