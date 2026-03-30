<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>购物车是 Day04 的核心题。先让页面由数组驱动，再补全选和统计。</p>
    </div>
    <div class="cart-shell">
      <article class="cart-item active">
        <label class="check">
          <input type="checkbox" checked />
          <span>鲜牛奶 250ml</span>
        </label>
        <strong>4.5 元</strong>
        <div class="counter">
          <button>-</button>
          <span>2</span>
          <button>+</button>
        </div>
        <button class="danger">删除</button>
      </article>
      <article class="cart-item">
        <label class="check">
          <input type="checkbox" />
          <span>全麦面包</span>
        </label>
        <strong>12.8 元</strong>
        <div class="counter">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <button class="danger">删除</button>
      </article>
      <footer class="summary">
        <label class="check">
          <input type="checkbox" />
          <span>全选</span>
        </label>
        <span>已选 2 件</span>
        <span>合计 9 元</span>
      </footer>
    </div>
    <TaskScaffold summary="补全商品数组、单项状态、数量修改、删除逻辑、全选计算属性和本地存储。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[1]!
const todoText = `已学知识点提示：
1. 先定义 cartList，商品项至少包含 id、name、price、num、isChecked。
2. 商品列表使用 v-for 渲染，选中行用 :class 控制高亮。
3. 数量加减和删除都通过 @click 修改数组中的当前项。
4. 全选适合写成带 get/set 的 computed。
5. 已选数量和总价属于结果数据，继续使用 computed。
6. 使用 watch(cartList, ..., { deep: true }) 写入 localStorage。

可先思考：
- 哪些是原始数据？cartList
- 哪些是单项状态？item.isChecked、item.num
- 哪些是结果数据？checkAll、checkedCount、totalPrice`

// TODO: 定义 cartList
// TODO: 编写 increase
// TODO: 编写 decrease
// TODO: 编写 removeItem
// TODO: 定义 checkAll
// TODO: 定义 checkedCount
// TODO: 定义 totalPrice

const cartSource = [
  { id: 1, name: '鲜牛奶 250ml', price: 4.5, num: 2, isChecked: true },
  { id: 2, name: '全麦面包', price: 12.8, num: 1, isChecked: false },
  { id: 3, name: '鸡蛋 10 枚装', price: 13.9, num: 1, isChecked: true },
  { id: 4, name: '洗衣液 2kg', price: 29.9, num: 1, isChecked: false },
]
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p { margin: 0 0 8px; }
.cart-shell { display: grid; gap: 12px; padding: 18px; border-radius: 20px; background: linear-gradient(180deg, #ecfeff 0%, #f8fafc 100%); }
.cart-item { display: grid; grid-template-columns: 1.4fr auto auto auto; gap: 12px; align-items: center; padding: 16px; border-radius: 18px; background: #fff; border: 1px solid #e2e8f0; }
.cart-item.active { border-color: #67e8f9; background: #ecfeff; }
.check { display: flex; gap: 10px; align-items: center; }
.counter { display: inline-flex; gap: 8px; align-items: center; }
button { padding: 8px 12px; border: none; border-radius: 10px; background: #0f766e; color: #fff; cursor: pointer; }
.danger { background: #ef4444; }
.summary { display: flex; justify-content: space-between; gap: 12px; align-items: center; padding: 16px; border-radius: 18px; background: #0f172a; color: #fff; }
@media (max-width: 720px) {
  .cart-item,
  .summary { grid-template-columns: 1fr; display: grid; }
}
</style>
