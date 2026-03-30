<template>
  <TaskPanel v-bind="meta">
    <div class="order-layout">
      <section class="menu-pane">
        <h3>商品展示区</h3>
        <div class="product-grid">
          <article v-for="item in productList" :key="item.id" class="product-card">
            <div class="thumb">{{ item.name.slice(0, 2) }}</div>
            <h4>{{ item.name }}</h4>
            <p>￥{{ item.price }}</p>
            <button @click="addToCart(item)">加入购物车</button>
          </article>
        </div>
      </section>

      <section class="cart-pane">
        <h3>已点商品区</h3>
        <div v-if="cartList.length" class="cart-list">
          <div v-for="item in cartList" :key="item.id" class="cart-item">
            <span>{{ item.name }}</span>
            <div class="counter">
              <button @click="decreaseCount(item.id)">-</button>
              <span>{{ item.count }}</span>
              <button @click="increaseCount(item.id)">+</button>
            </div>
          </div>
        </div>
        <p v-else class="empty">购物车还是空的，先从左侧加入商品。</p>
        <div class="settlement">
          <p>共 {{ totalCount }} 份</p>
          <p>合计：￥{{ totalPrice }}</p>
        </div>
      </section>
    </div>
  </TaskPanel>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[0]!
const productList = [
  { id: 1, name: '香辣鸡腿饭', price: 18 },
  { id: 2, name: '番茄牛腩饭', price: 22 },
  { id: 3, name: '土豆牛肉饭', price: 20 },
]
const cartList = ref<Array<{ id: number; name: string; price: number; count: number }>>([])

function addToCart(product: (typeof productList)[number]) {
  const target = cartList.value.find((item) => item.id === product.id)
  if (target) {
    target.count += 1
    return
  }
  cartList.value.push({ ...product, count: 1 })
}

function increaseCount(id: number) {
  const target = cartList.value.find((item) => item.id === id)
  if (target) target.count += 1
}

function decreaseCount(id: number) {
  const target = cartList.value.find((item) => item.id === id)
  if (!target) return
  if (target.count === 1) {
    cartList.value = cartList.value.filter((item) => item.id !== id)
    return
  }
  target.count -= 1
}

const totalCount = computed(() => cartList.value.reduce((sum, item) => sum + item.count, 0))
const totalPrice = computed(() => cartList.value.reduce((sum, item) => sum + item.price * item.count, 0))
</script>

<style scoped>
.order-layout { display: grid; grid-template-columns: 1.2fr 0.9fr; gap: 14px; }
.menu-pane, .cart-pane { padding: 18px; border: 1px solid #dbe4f0; border-radius: 20px; background: #fff; }
.menu-pane h3, .cart-pane h3, .product-card h4, .product-card p, .settlement p, .empty { margin: 0; }
.product-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin-top: 12px; }
.product-card { padding: 14px; border: 1px solid #fde68a; border-radius: 16px; background: #fffdf4; }
.thumb { display: grid; place-items: center; height: 80px; border-radius: 14px; background: #fef3c7; color: #92400e; font-weight: 700; }
.product-card p { margin-top: 8px; color: #92400e; }
.product-card button, .counter button { margin-top: 10px; padding: 8px 12px; border: none; border-radius: 10px; background: #b45309; color: #fff; cursor: pointer; }
.cart-list { margin-top: 12px; display: grid; gap: 12px; }
.cart-item { display: flex; justify-content: space-between; gap: 12px; align-items: center; padding-bottom: 12px; border-bottom: 1px dashed #cbd5e1; }
.counter { display: flex; align-items: center; gap: 10px; }
.counter button { margin-top: 0; }
.empty { margin-top: 12px; color: #64748b; }
.settlement { margin-top: 14px; padding: 14px; border-radius: 14px; background: #f8fafc; }
.settlement p + p { margin-top: 8px; }
@media (max-width: 860px) {
  .order-layout { grid-template-columns: 1fr; }
  .product-grid { grid-template-columns: 1fr; }
}
</style>
