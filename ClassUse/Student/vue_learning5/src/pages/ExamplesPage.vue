<template>
  <section class="page">
    <article class="intro card">
      <h2>Day05 知识点提示</h2>
      <p>
        Day05 按教案中的 13 道题组织练习。下面按知识点分组给出示例思路，学生可以先读完整结构，再回到准备页完成对应练习。
      </p>
      <p>
        约定：学生自己创建的组件统一放到 <code>src/components/student-build/</code>；老师参考素材放到 <code>answer-tasks/day05-components/</code>。
      </p>
    </article>

    <section class="examples">
      <article v-for="item in guideCards" :key="item.id" class="card">
        <div class="head">
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
        <pre><code>{{ item.code }}</code></pre>
      </article>
    </section>
  </section>
</template>

<script setup lang="ts">
const guideCards = [
  {
    id: '01',
    title: '知识点 1：组件定义与使用',
    desc: '覆盖 Task01-Task04。先掌握组件定义、导入、注册和基础展示，再进入通信。',
    code: `示例导入路径：
src/components/student-build/BannerBox.vue

示例使用：
<BannerBox />`,
  },
  {
    id: '02',
    title: '知识点 2：Props 父传子',
    desc: '覆盖 Task05-Task06。数据在父组件，子组件通过 defineProps 接收并展示。',
    code: `示例导入路径：
src/components/student-build/CourseInfo.vue

示例传值：
<CourseInfo
  :title="title"
  :teacher="teacher"
  :lessons="lessons"
/>`,
  },
  {
    id: '03',
    title: '知识点 3：Emit 子传父',
    desc: '覆盖 Task07-Task08。子组件通过事件把动作或数据回传给父组件。',
    code: `示例导入路径：
src/components/student-build/SearchBar.vue

示例监听：
<SearchBar @search="handleSearch" />
<p>关键词：{{ keyword }}</p>`,
  },
  {
    id: '04',
    title: '知识点 4：Params 与跨级通信',
    desc: '覆盖 Task09-Task10。重点是整理参数对象，并理解 provide/inject 适合公共配置数据。',
    code: `&lt;script setup&gt;
const courseList = [
  { id: '101', title: 'Vue 组件开发' },
  { id: '205', title: 'Emit 事件练习' },
]

function goDetail(course) {
  const params = {
    id: course.id,
    title: course.title,
  }
  console.log('跳转时携带：', params)
}
</script&gt;`,
  },
  {
    id: '05',
    title: '知识点 5：综合练习',
    desc: '覆盖 Task11-Task13。把组件使用、props、emit、params 和 provide/inject 组合起来。',
    code: `&lt;script setup&gt;
import { provide } from 'vue'

provide('themeColor', '#f59e0b')
</script&gt;

&lt;!-- 深层子组件中 --&gt;
&lt;script setup&gt;
import { inject } from 'vue'
const themeColor = inject('themeColor')
</script&gt;`,
  },
] as const
</script>

<style scoped>
.page {
  display: grid;
  gap: 20px;
}

.examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 18px;
}

.card {
  padding: 22px;
  border: 1px solid #dbe4f0;
  border-radius: 22px;
  background: #fff;
  box-shadow: 0 14px 36px rgba(15, 23, 42, 0.08);
}

.intro {
  background: linear-gradient(180deg, #ffffff 0%, #fff7ed 100%);
}

.head {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: flex-start;
  margin-bottom: 14px;
}

h2,
h3,
p {
  margin: 0;
}

p {
  color: #64748b;
  line-height: 1.7;
}

.intro code {
  padding: 2px 6px;
  border-radius: 8px;
  background: #ffedd5;
  color: #9a3412;
}

pre {
  margin: 14px 0 0;
  padding: 14px;
  overflow: auto;
  border-radius: 14px;
  background: #0f172a;
  color: #e2e8f0;
  font-size: 13px;
}
</style>
