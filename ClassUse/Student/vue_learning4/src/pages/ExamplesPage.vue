<template>
  <section class="page">
    <article class="intro card">
      <h2>Day04 知识点提示</h2>
      <p>
        这一页不直接给出答案效果，只提示学生应该如何拆项目、先做哪一块数据和功能，再逐步补完整页面。
      </p>
    </article>

    <section class="examples">
      <article class="card">
        <div class="head">
          <div>
            <h3>项目一：教程展示页</h3>
            <p>先分析分类数组、当前分类和搜索关键字，再开始实现左右联动。</p>
          </div>
        </div>
        <div class="hint-grid">
          <div class="hint-block">
            <h4>知识点 1</h4>
            <p><code>v-for</code></p>
            <ul>
              <li>渲染左侧分类菜单</li>
              <li>渲染右侧教程卡片</li>
            </ul>
          </div>
          <div class="hint-block">
            <h4>知识点 2</h4>
            <p><code>@click</code></p>
            <ul>
              <li>点击分类时切换 currentType</li>
            </ul>
          </div>
          <div class="hint-block">
            <h4>知识点 3</h4>
            <p><code>:class</code></p>
            <ul>
              <li>给当前分类补高亮样式</li>
            </ul>
          </div>
          <div class="hint-block">
            <h4>知识点 4</h4>
            <p><code>v-model</code></p>
            <ul>
              <li>绑定搜索关键字</li>
              <li>让输入影响展示列表</li>
            </ul>
          </div>
          <div class="hint-block">
            <h4>知识点 5</h4>
            <p><code>computed</code></p>
            <ul>
              <li>根据分类和关键字返回筛选后的列表</li>
            </ul>
          </div>
        </div>
        <div class="hint-block">
          <h4>页面分析提示</h4>
          <ul>
            <li>categoryList：分类数据</li>
            <li>lessonMap：教程原始数据</li>
            <li>currentType：当前分类状态</li>
            <li>keyword：搜索输入值</li>
          </ul>
        </div>
      </article>

      <article class="card">
        <div class="head">
          <div>
            <h3>项目二：购物车</h3>
            <p>先把商品数据结构想清楚，再补选中、数量、删除和统计。</p>
          </div>
        </div>
        <div class="hint-grid">
          <div class="hint-block">
            <h4>知识点 1</h4>
            <p><code>v-for</code></p>
            <ul>
              <li>渲染商品列表</li>
            </ul>
          </div>
          <div class="hint-block">
            <h4>知识点 2</h4>
            <p><code>:class</code></p>
            <ul>
              <li>选中商品时高亮整行</li>
            </ul>
          </div>
          <div class="hint-block">
            <h4>知识点 3</h4>
            <p><code>@click</code></p>
            <ul>
              <li>数量加减</li>
              <li>删除商品</li>
            </ul>
          </div>
          <div class="hint-block">
            <h4>知识点 4</h4>
            <p><code>computed</code></p>
            <ul>
              <li>处理全选 get/set</li>
              <li>统计已选数量和总价</li>
            </ul>
          </div>
          <div class="hint-block">
            <h4>知识点 5</h4>
            <p><code>watch</code></p>
            <ul>
              <li>监听购物车数组</li>
              <li>写入 localStorage</li>
            </ul>
          </div>
        </div>
        <div class="hint-block">
          <h4>页面分析提示</h4>
          <ul>
            <li>cartList：商品原始数据</li>
            <li>item.isChecked：单项状态</li>
            <li>item.num：单项数量</li>
            <li>checkedCount、totalPrice：统计结果</li>
          </ul>
        </div>
      </article>

      <article class="card">
        <div class="head">
          <div>
            <h3>项目三：表情包投票器</h3>
            <p>这是轻量综合题，核心是点击修改数组项，再统计最高票结果。</p>
          </div>
        </div>
        <div class="hint-grid">
          <div class="hint-block">
            <h4>知识点 1</h4>
            <p><code>v-for</code></p>
            <ul>
              <li>渲染多个投票对象</li>
            </ul>
          </div>
          <div class="hint-block">
            <h4>知识点 2</h4>
            <p><code>@click</code></p>
            <ul>
              <li>点击按钮让当前项票数加一</li>
            </ul>
          </div>
          <div class="hint-block">
            <h4>知识点 3</h4>
            <p><code>computed</code></p>
            <ul>
              <li>计算当前最高票对象</li>
              <li>生成排行榜</li>
            </ul>
          </div>
        </div>
        <div class="hint-block">
          <h4>页面分析提示</h4>
          <ul>
            <li>memeList：投票原始数据</li>
            <li>item.votes：单项票数</li>
            <li>topMeme：最高票结果</li>
          </ul>
        </div>
      </article>
    </section>
  </section>
</template>

<script setup lang="ts"></script>

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

.hint-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
}

.hint-block {
  margin-top: 12px;
  padding: 14px;
  border-radius: 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
}

.hint-block h4 {
  margin: 0 0 10px;
}

.hint-block ul {
  margin: 0;
  padding-left: 20px;
  color: #475569;
  line-height: 1.8;
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
