<template>
  <section class="page">
    <article class="intro card">
      <h2>Day06 知识点提示</h2>
      <p>
        Day06 按教案中的 13 道题组织练习。下面按知识点分组给出示例思路，学生可以先读完整结构，再回到准备页完成对应练习。
      </p>
      <p>
        约定：学生自己创建的组件统一放到 <code>src/components/student-build/</code>；这一天的重点不是堆页面，而是理解“结构入口、切换位置、缓存状态、观察过程”四件事。
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
    title: '知识点 1：三种插槽',
    desc: '覆盖 Task01-Task03。先分清默认插槽、具名插槽、作用域插槽分别解决什么问题。',
    code: `默认插槽：
&lt;PanelBox&gt;
  &lt;p&gt;这里由父组件填内容&lt;/p&gt;
&lt;/PanelBox&gt;

具名插槽：
&lt;CourseCard&gt;
  &lt;template #header&gt;课程标题&lt;/template&gt;
  &lt;template #footer&gt;
    &lt;button&gt;立即学习&lt;/button&gt;
  &lt;/template&gt;
&lt;/CourseCard&gt;`,
  },
  {
    id: '02',
    title: '知识点 2：作用域插槽数据流向',
    desc: '重点对应 Task03。子组件维护数据，父组件只负责拿到插槽参数后决定怎么展示。',
    code: `子组件：
&lt;slot
  name="item"
  :course="course"
  :index="index"
/&gt;

父组件：
&lt;CourseList&gt;
  &lt;template #item="{ course, index }"&gt;
    &lt;p&gt;{{ index + 1 }} - {{ course.title }}&lt;/p&gt;
  &lt;/template&gt;
&lt;/CourseList&gt;`,
  },
  {
    id: '03',
    title: '知识点 3：动态组件',
    desc: '覆盖 Task04。多个组件轮流占据同一位置时，优先想到动态组件。',
    code: `演示思路：
1. 准备两个组件：课程信息面板、学习记录面板
2. 用 currentComponent 记录当前显示谁
3. 点击按钮时切换 currentComponent

核心写法：
&lt;component :is="currentComponent" /&gt;`,
  },
  {
    id: '04',
    title: '知识点 4：KeepAlive 与缓存生命周期',
    desc: '覆盖 Task05、Task07、Task09。缓存会保留状态，也会带来 activated / deactivated。',
    code: `&lt;KeepAlive&gt;
  &lt;component :is="currentComponent" /&gt;
&lt;/KeepAlive&gt;

onActivated(() => {
  console.log('组件重新激活')
})

onDeactivated(() => {
  console.log('组件暂时停用')
})`,
  },
  {
    id: '05',
    title: '知识点 5：生命周期日志与综合项目',
    desc: '覆盖 Task06、Task08、Task10。日志不是装饰，而是理解组件过程的工具。',
    code: `const logs = ref<string[]>([])

onMounted(() => logs.value.unshift('mounted'))
onUpdated(() => logs.value.unshift('updated'))
onUnmounted(() => logs.value.unshift('unmounted'))

实现顺序建议：
1. 先写布局插槽
2. 再做动态切换
3. 再包 KeepAlive
4. 最后补日志`,
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
  background: linear-gradient(180deg, #ffffff 0%, #ecfeff 100%);
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
  background: #cffafe;
  color: #155e75;
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
