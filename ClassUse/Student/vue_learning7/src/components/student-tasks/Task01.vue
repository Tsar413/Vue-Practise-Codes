<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>点餐系统先抓主流程，不要一开始就纠结样式。先保证“商品展示 → 加入购物车 → 数量变化 → 金额统计”能跑通。</p>
    </div>
    <div class="order-layout">
      <section class="menu-pane">
        <h3>商品展示区</h3>
        <p class="preview-note">预览区只展示 2 条示例商品，完整数据已经写在脚本里，学生直接用提供的数据做列表渲染。</p>
        <!-- TODO 学生练习区：这里用数组渲染商品列表 -->
        <div class="product-grid">
          <article class="product-card">
            <div class="thumb">图片</div>
            <h4>香辣鸡腿饭</h4>
            <p>￥18</p>
            <span class="fake-button">加入购物车</span>
          </article>
          <article class="product-card">
            <div class="thumb">图片</div>
            <h4>番茄牛腩饭</h4>
            <p>￥22</p>
            <span class="fake-button">加入购物车</span>
          </article>
        </div>
      </section>

      <section class="cart-pane">
        <h3>已点商品区</h3>
        <!-- TODO 学生练习区：这里改成购物车列表 -->
        <div class="cart-item">
          <span>香辣鸡腿饭</span>
          <div class="counter">
            <span class="fake-counter">-</span>
            <span>1</span>
            <span class="fake-counter">+</span>
          </div>
        </div>
        <div class="settlement">
          <!-- TODO 学生练习区：这里显示总数量与总金额 -->
          <p>共 1 份</p>
          <p>合计：￥18</p>
        </div>
      </section>
    </div>
    <TaskScaffold summary="先完成商品列表、加入购物车和金额统计，再考虑是否拆成商品卡片和购物车项组件。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[0]!
const productList = [
  {
    id: 1,
    name: '香辣鸡腿饭',
    price: 18,
    imageText: '鸡腿饭',
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='100' viewBox='0 0 160 100'><rect width='160' height='100' rx='16' fill='%23fef3c7'/><circle cx='48' cy='48' r='22' fill='%23f59e0b'/><rect x='70' y='30' width='50' height='34' rx='12' fill='%23b45309'/><text x='80' y='84' text-anchor='middle' font-size='14' fill='%2392400e'>鸡腿饭</text></svg>",
  },
  {
    id: 2,
    name: '番茄牛腩饭',
    price: 22,
    imageText: '牛腩饭',
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='100' viewBox='0 0 160 100'><rect width='160' height='100' rx='16' fill='%23fee2e2'/><circle cx='46' cy='48' r='21' fill='%23ef4444'/><rect x='72' y='28' width='48' height='38' rx='12' fill='%23991b1b'/><text x='80' y='84' text-anchor='middle' font-size='14' fill='%237f1d1d'>牛腩饭</text></svg>",
  },
  {
    id: 3,
    name: '土豆牛肉饭',
    price: 20,
    imageText: '牛肉饭',
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='100' viewBox='0 0 160 100'><rect width='160' height='100' rx='16' fill='%23fef9c3'/><circle cx='45' cy='48' r='20' fill='%23eab308'/><rect x='70' y='30' width='50' height='34' rx='12' fill='%239a3412'/><text x='80' y='84' text-anchor='middle' font-size='14' fill='%23854d0e'>牛肉饭</text></svg>",
  },
  {
    id: 4,
    name: '椒盐鸡排饭',
    price: 19,
    imageText: '鸡排饭',
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='100' viewBox='0 0 160 100'><rect width='160' height='100' rx='16' fill='%23ffedd5'/><circle cx='48' cy='48' r='21' fill='%23fb923c'/><rect x='72' y='30' width='48' height='34' rx='12' fill='%23c2410c'/><text x='80' y='84' text-anchor='middle' font-size='14' fill='%239a3412'>鸡排饭</text></svg>",
  },
] as const

const cartSeed = [
  { id: 1, name: '香辣鸡腿饭', price: 18, count: 1 },
] as const

const todoText = `已学知识点提示：
1. 商品数据 productList 和购物车示例 cartSeed 已经提供好，先不要自己重新编数据。
2. 商品展示区优先用 v-for 跑通，图片字段 image 也已经给好，可直接渲染。
3. 点击“加入购物车”时先想清楚业务规则：新增还是数量累加。
4. 总份数和总金额都属于结果型数据，统一交给 computed。

可先思考：
- 哪些是原始数据？商品数组、购物车数组
- 哪些是结果数据？总数量、总金额`
</script>

<style scoped>
.workspace { margin-bottom: 12px; line-height: 1.9; color: #475569; }
.workspace p { margin: 0; }
.order-layout { display: grid; grid-template-columns: 1.2fr 0.9fr; gap: 14px; }
.menu-pane, .cart-pane { padding: 18px; border: 1px solid #dbe4f0; border-radius: 20px; background: #fff; }
.menu-pane h3, .cart-pane h3, .product-card h4, .product-card p, .settlement p, .preview-note { margin: 0; }
.preview-note { margin-top: 10px; line-height: 1.7; color: #64748b; font-size: 14px; }
.product-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin-top: 12px; }
.product-card { padding: 14px; border: 1px solid #fde68a; border-radius: 16px; background: #fffdf4; }
.thumb { display: grid; place-items: center; height: 80px; border-radius: 14px; background: #fef3c7; color: #92400e; }
.product-card p { margin-top: 8px; color: #92400e; }
.fake-button, .fake-counter { display: inline-flex; align-items: center; justify-content: center; margin-top: 10px; padding: 8px 12px; border-radius: 10px; background: #b45309; color: #fff; }
.fake-counter { margin-top: 0; min-width: 36px; }
.cart-item { display: flex; justify-content: space-between; gap: 12px; align-items: center; margin-top: 12px; padding: 12px 0; border-bottom: 1px dashed #cbd5e1; }
.counter { display: flex; align-items: center; gap: 10px; }
.settlement { margin-top: 14px; padding: 14px; border-radius: 14px; background: #f8fafc; }
.settlement p + p { margin-top: 8px; }
@media (max-width: 860px) {
  .order-layout { grid-template-columns: 1fr; }
  .product-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
</style>
