<template>
  <section class="page">
    <article class="intro card">
      <h2>Day08 项目思维提示</h2>
      <p>
        Day08 的重点从“业务流程型小项目”转向“展示型页面 + 跨页面组件协作”。难点不在控件数量，而在于页面模块、数据结构和父子组件职责是否清楚。
      </p>
      <p>
        约定：先拆页面模块，再整理数据，最后再补样式细节。页面里依然保留语法提示区，帮助学生在项目中回忆
        <code>v-for</code>、<code>v-model</code>、<code>:class</code>、<code>computed</code>、<code>props</code> 与
        <code>emit</code>。
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
    title: '方法 1：展示页先拆模块',
    desc: 'Day08 的页面模块更多，第一步应该先拆出筛选区、列表区、详情区、信息区等板块。',
    code: `项目完成顺序建议：
1. 先分析页面分区
2. 再设计对象或数组结构
3. 优先完成基础渲染
4. 再处理筛选、切换、联动
5. 最后补动态样式与细节`,
  },
  {
    id: '02',
    title: '项目 1：校园二手物品展示板',
    desc: '这是典型展示类页面，先让卡片来自数组，再补分类筛选、关键字搜索和状态样式。',
    code: `关键数据：
itemList: 物品数组
currentType: 当前分类
keyword: 搜索关键字

关键结果：
filteredList

重点语法：
v-for 渲染卡片
v-model 绑定搜索
computed 集中筛选
:class 控制状态样式`,
  },
  {
    id: '03',
    title: '项目 2：今日热搜榜',
    desc: '这是 Day08 最关键的双页面项目，先分清哪些状态必须由父组件统一管理。',
    code: `输入项：
currentPage
currentItem

子组件：
ListPage
DetailPage

重点语法：
props
emit
条件渲染
父组件状态调度`,
  },
  {
    id: '04',
    title: '项目 3：用户主页展示页',
    desc: '页面信息块更多，需要把对象和数组混合数据结构组织清楚，再决定每块如何渲染。',
    code: `输入状态：
userInfo
tagList
postList
workList

原始数据：
主页模块

重点语法：
对象渲染
v-for
动态样式
模块化布局`,
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
  background: #fed7aa;
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
