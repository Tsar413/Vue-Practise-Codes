<template>
  <TaskPanel v-bind="meta">
    <div v-if="cartList.length" class="cart-shell">
      <article
        v-for="item in cartList"
        :key="item.id"
        :class="['cart-item', { active: item.isChecked }]"
      >
        <label class="check">
          <input v-model="item.isChecked" type="checkbox" />
          <span>{{ item.name }}</span>
        </label>
        <strong>{{ item.price }} 元</strong>
        <div class="counter">
          <button @click="decrease(item.id)">-</button>
          <span>{{ item.num }}</span>
          <button @click="increase(item.id)">+</button>
        </div>
        <button class="danger" @click="removeItem(item.id)">删除</button>
      </article>

      <footer class="summary">
        <label class="check">
          <input v-model="checkAll" type="checkbox" />
          <span>全选</span>
        </label>
        <span>已选 {{ checkedCount }} 件</span>
        <span>合计 {{ totalPrice }} 元</span>
      </footer>
    </div>

    <div v-else class="empty">购物车为空，请先添加商品。</div>
  </TaskPanel>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'

type CartItem = {
  id: number
  name: string
  price: number
  num: number
  isChecked: boolean
}

const meta = taskMetaList[1]!
const storageKey = 'day04-cart'
const defaultList: CartItem[] = [
  { id: 1, name: '鲜牛奶 250ml', price: 4.5, num: 2, isChecked: true },
  { id: 2, name: '全麦面包', price: 12.8, num: 1, isChecked: false },
  { id: 3, name: '鸡蛋 10 枚装', price: 13.9, num: 1, isChecked: true },
  { id: 4, name: '洗衣液 2kg', price: 29.9, num: 1, isChecked: false },
]

function readCart() {
  if (typeof localStorage === 'undefined') return defaultList
  const saved = localStorage.getItem(storageKey)
  if (!saved) return defaultList

  try {
    const parsed = JSON.parse(saved) as CartItem[]
    return parsed.length ? parsed : defaultList
  } catch {
    return defaultList
  }
}

const cartList = ref<CartItem[]>(readCart())

function increase(id: number) {
  const current = cartList.value.find((item) => item.id === id)
  if (!current) return
  current.num += 1
}

function decrease(id: number) {
  const current = cartList.value.find((item) => item.id === id)
  if (!current || current.num <= 1) return
  current.num -= 1
}

function removeItem(id: number) {
  cartList.value = cartList.value.filter((item) => item.id !== id)
}

const checkAll = computed({
  get: () => cartList.value.length > 0 && cartList.value.every((item) => item.isChecked),
  set: (value: boolean) => {
    cartList.value.forEach((item) => {
      item.isChecked = value
    })
  },
})

const checkedCount = computed(() =>
  cartList.value
    .filter((item) => item.isChecked)
    .reduce((sum, item) => sum + item.num, 0),
)

const totalPrice = computed(() =>
  cartList.value
    .filter((item) => item.isChecked)
    .reduce((sum, item) => sum + item.price * item.num, 0),
)

watch(
  cartList,
  (value) => {
    if (typeof localStorage === 'undefined') return
    localStorage.setItem(storageKey, JSON.stringify(value))
  },
  { deep: true },
)
</script>

<style scoped>
.cart-shell { display: grid; gap: 12px; padding: 18px; border-radius: 20px; background: linear-gradient(180deg, #ecfeff 0%, #f8fafc 100%); }
.cart-item { display: grid; grid-template-columns: 1.4fr auto auto auto; gap: 12px; align-items: center; padding: 16px; border-radius: 18px; background: #fff; border: 1px solid #e2e8f0; }
.cart-item.active { border-color: #67e8f9; background: #ecfeff; }
.check { display: flex; gap: 10px; align-items: center; }
.counter { display: inline-flex; gap: 8px; align-items: center; }
button { padding: 8px 12px; border: none; border-radius: 10px; background: #0f766e; color: #fff; cursor: pointer; }
.danger { background: #ef4444; }
.summary { display: flex; justify-content: space-between; gap: 12px; align-items: center; padding: 16px; border-radius: 18px; background: #0f172a; color: #fff; }
.empty { padding: 18px; border-radius: 18px; background: #fff7ed; color: #9a3412; }
@media (max-width: 720px) {
  .cart-item,
  .summary { grid-template-columns: 1fr; display: grid; }
}
</style>
