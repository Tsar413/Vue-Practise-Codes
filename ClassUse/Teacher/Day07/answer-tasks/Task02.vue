<template>
  <TaskPanel v-bind="meta">
    <div class="milk-layout">
      <section class="form-pane">
        <h3>点单设置区</h3>
        <label class="field">
          <span>饮品</span>
          <select v-model="drink">
            <option v-for="item in drinkOptions" :key="item.name" :value="item.name">{{ item.name }}</option>
          </select>
        </label>
        <label class="field">
          <span>杯型</span>
          <select v-model="cupSize">
            <option value="中杯">中杯</option>
            <option value="大杯">大杯</option>
          </select>
        </label>
        <label class="field">
          <span>甜度</span>
          <select v-model="sugarLevel">
            <option value="少糖">少糖</option>
            <option value="正常糖">正常糖</option>
            <option value="全糖">全糖</option>
          </select>
        </label>
        <label class="field">
          <span>加料</span>
          <div class="checks">
            <label><input v-model="toppings" type="checkbox" value="珍珠" /> 珍珠</label>
            <label><input v-model="toppings" type="checkbox" value="椰果" /> 椰果</label>
            <label><input v-model="toppings" type="checkbox" value="奶盖" /> 奶盖</label>
          </div>
        </label>
        <label class="field">
          <span>数量</span>
          <input v-model="count" type="number" min="1" />
        </label>
      </section>

      <section class="summary-pane">
        <h3>订单信息区</h3>
        <p>{{ orderSummary }}</p>
        <strong>应付金额：￥{{ totalPrice }}</strong>
      </section>
    </div>
  </TaskPanel>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[1]!
const drinkOptions = [
  { name: '芝士奶绿', price: 12 },
  { name: '杨枝甘露', price: 15 },
]
const toppingPriceMap = {
  珍珠: 2,
  椰果: 2,
  奶盖: 3,
} as const

const drink = ref('芝士奶绿')
const cupSize = ref<'中杯' | '大杯'>('中杯')
const sugarLevel = ref('少糖')
const toppings = ref<string[]>(['珍珠'])
const count = ref(2)

const totalPrice = computed(() => {
  const drinkPrice = drinkOptions.find((item) => item.name === drink.value)?.price ?? 0
  const cupExtra = cupSize.value === '大杯' ? 3 : 0
  const toppingExtra = toppings.value.reduce((sum, item) => sum + toppingPriceMap[item as keyof typeof toppingPriceMap], 0)
  return (drinkPrice + cupExtra + toppingExtra) * count.value
})

const orderSummary = computed(() => {
  const toppingText = toppings.value.length ? toppings.value.join('、') : '不加料'
  return `你当前选择的是 ${drink.value}，${cupSize.value}，${sugarLevel.value}，${toppingText}，共 ${count.value} 杯。`
})
</script>

<style scoped>
.milk-layout { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 14px; }
.form-pane, .summary-pane { padding: 18px; border: 1px solid #dbe4f0; border-radius: 20px; background: #fff; }
.form-pane h3, .summary-pane h3, .summary-pane p, .summary-pane strong { margin: 0; }
.field { display: grid; gap: 8px; margin-top: 12px; color: #334155; }
.field select, .field input { padding: 12px 14px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; }
.checks { display: flex; gap: 12px; flex-wrap: wrap; }
.summary-pane { background: linear-gradient(180deg, #fffdf4 0%, #fff 100%); }
.summary-pane p { margin-top: 14px; line-height: 1.8; color: #475569; }
.summary-pane strong { display: inline-block; margin-top: 12px; color: #b45309; }
@media (max-width: 860px) {
  .milk-layout { grid-template-columns: 1fr; }
}
</style>
