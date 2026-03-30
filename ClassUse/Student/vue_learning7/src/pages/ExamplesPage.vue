<template>
  <section class="page">
    <article class="intro card">
      <h2>Day07 项目思维提示</h2>
      <p>
        Day07 不再拆成零散语法题，而是按照教案推进 3 个完整综合项目。重点不是“又学了什么新语法”，而是“如何用已有语法组织一个业务页面”。
      </p>
      <p>
        约定：这一天先在当前页面中把主流程跑通，再决定是否拆组件。页面里依然保留语法提示区，帮助学生在项目中回忆
        <code>v-for</code>、<code>v-model</code>、<code>computed</code>、<code>@click</code> 等综合知识点。
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
    title: '方法 1：项目先抓主流程',
    desc: '三个项目虽然场景不同，但都应该先抓住“用户先做什么，页面接着发生什么”。',
    code: `项目完成顺序建议：
1. 先分析页面模块
2. 再设计原始数据结构
3. 先做列表或输入绑定
4. 再补点击与状态变化
5. 最后完成 computed 统计结果`,
  },
  {
    id: '02',
    title: '项目 1：点餐系统',
    desc: '先让商品列表来自数组，再处理加入购物车、数量变化和总金额统计。',
    code: `关键数据：
productList: 商品数组
cartList: 购物车数组

关键结果：
totalCount
totalPrice

重点语法：
v-for 渲染商品
@click 加入购物车
computed 统计金额`,
  },
  {
    id: '03',
    title: '项目 2：奶茶点单系统',
    desc: '多个输入项共同决定一个结果，先分清输入项与结果项，再统一计算价格与摘要。',
    code: `输入项：
drink
cupSize
sugarLevel
toppings
count

结果项：
orderSummary
totalPrice

重点语法：
v-model
computed
条件展示`,
  },
  {
    id: '04',
    title: '项目 3：记账系统',
    desc: '先把输入状态和记录列表分开，再做新增、删除和收支统计。',
    code: `输入状态：
type
amount
remark

原始数据：
recordList

结果项：
incomeTotal
expenseTotal
balance

重点语法：
v-model
数组新增/删除
computed 统计`,
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
