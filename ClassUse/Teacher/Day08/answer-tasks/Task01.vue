<template>
  <TaskPanel v-bind="meta">
    <div class="board-layout">
      <section class="filter-pane">
        <h3>筛选区</h3>
        <div class="filter-row">
          <button
            v-for="item in typeOptions"
            :key="item"
            :class="['chip', { active: currentType === item }]"
            @click="currentType = item"
          >
            {{ item }}
          </button>
        </div>
        <input v-model.trim="keyword" class="search-input" type="text" placeholder="请输入物品关键字" />
      </section>

      <section class="list-pane">
        <h3>物品展示区</h3>
        <div class="product-grid">
          <article v-for="item in filteredList" :key="item.id" class="product-card">
            <img :src="item.image" :alt="item.name" class="thumb" />
            <h4>{{ item.name }}</h4>
            <p class="price">￥{{ item.price }}</p>
            <div class="meta-row">
              <span>{{ item.type }}</span>
              <span :class="['status', statusClassMap[item.status]]">{{ item.status }}</span>
            </div>
          </article>
        </div>
        <p v-if="!filteredList.length" class="empty">没有匹配的物品，换一个分类或关键字试试。</p>
        <div class="result-box">
          <p>当前共 {{ filteredList.length }} 件匹配物品</p>
          <p>分类和关键字会同时作用于同一个结果列表</p>
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
const itemList = [
  {
    id: 1,
    name: '雷柏机械键盘',
    price: 80,
    type: '数码',
    status: '推荐',
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='100' viewBox='0 0 160 100'><rect width='160' height='100' rx='16' fill='%23dbeafe'/><rect x='26' y='24' width='108' height='44' rx='10' fill='%231d4ed8'/><rect x='36' y='34' width='88' height='24' rx='6' fill='%23eff6ff'/><text x='80' y='86' text-anchor='middle' font-size='14' fill='%231e3a8a'>键盘</text></svg>",
  },
  {
    id: 2,
    name: '高等数学教材',
    price: 15,
    type: '书籍',
    status: '已售出',
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='100' viewBox='0 0 160 100'><rect width='160' height='100' rx='16' fill='%23fef3c7'/><rect x='48' y='20' width='64' height='56' rx='8' fill='%23ca8a04'/><rect x='56' y='28' width='48' height='10' rx='4' fill='%23fefce8'/><rect x='56' y='44' width='48' height='6' rx='3' fill='%23fde68a'/><rect x='56' y='56' width='38' height='6' rx='3' fill='%23fde68a'/><text x='80' y='88' text-anchor='middle' font-size='14' fill='%23854d0e'>教材</text></svg>",
  },
  {
    id: 3,
    name: '宿舍收纳箱',
    price: 22,
    type: '生活',
    status: '九成新',
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='100' viewBox='0 0 160 100'><rect width='160' height='100' rx='16' fill='%23dcfce7'/><rect x='42' y='28' width='76' height='34' rx='10' fill='%2316a34a'/><rect x='54' y='20' width='52' height='12' rx='6' fill='%2386efac'/><text x='80' y='86' text-anchor='middle' font-size='14' fill='%23166534'>收纳箱</text></svg>",
  },
  {
    id: 4,
    name: '台灯',
    price: 30,
    type: '生活',
    status: '推荐',
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='100' viewBox='0 0 160 100'><rect width='160' height='100' rx='16' fill='%23ffedd5'/><path d='M80 20 L102 48 H58 Z' fill='%23ea580c'/><rect x='74' y='48' width='12' height='24' rx='4' fill='%239a3412'/><rect x='56' y='72' width='48' height='8' rx='4' fill='%23c2410c'/><text x='80' y='90' text-anchor='middle' font-size='14' fill='%239a3412'>台灯</text></svg>",
  },
] as const

const typeOptions = ['全部', '数码', '书籍', '生活'] as const
const currentType = ref<(typeof typeOptions)[number]>('全部')
const keyword = ref('')

const filteredList = computed(() => {
  return itemList.filter((item) => {
    const matchedType = currentType.value === '全部' || item.type === currentType.value
    const matchedKeyword = !keyword.value || item.name.includes(keyword.value)
    return matchedType && matchedKeyword
  })
})

const statusClassMap: Record<(typeof itemList)[number]['status'], string> = {
  推荐: 'recommend',
  已售出: 'sold',
  九成新: 'good',
}
</script>

<style scoped>
.board-layout { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 14px; }
.filter-pane, .list-pane { padding: 18px; border: 1px solid #dbe4f0; border-radius: 20px; background: #fff; }
.filter-pane h3, .list-pane h3, .product-card h4, .product-card p, .result-box p, .empty { margin: 0; }
.filter-row { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 12px; }
.chip { padding: 8px 12px; border: none; border-radius: 999px; background: #f1f5f9; color: #475569; cursor: pointer; }
.chip.active { background: #fed7aa; color: #9a3412; }
.search-input { width: 100%; margin-top: 12px; padding: 12px 14px; border: 1px solid #cbd5e1; border-radius: 14px; font: inherit; }
.product-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin-top: 12px; }
.product-card { padding: 14px; border: 1px solid #fdba74; border-radius: 16px; background: #fffdf8; }
.thumb { width: 100%; height: 80px; object-fit: cover; border-radius: 14px; background: #ffedd5; }
.price { margin-top: 8px; color: #9a3412; }
.meta-row { display: flex; justify-content: space-between; gap: 12px; align-items: center; margin-top: 12px; color: #64748b; font-size: 14px; }
.status { padding: 6px 10px; border-radius: 999px; font-size: 12px; }
.status.recommend { background: #ffedd5; color: #c2410c; }
.status.sold { background: #e2e8f0; color: #475569; }
.status.good { background: #dcfce7; color: #166534; }
.empty { margin-top: 14px; color: #64748b; }
.result-box { margin-top: 14px; padding: 14px; border-radius: 14px; background: #f8fafc; }
.result-box p + p { margin-top: 8px; }
@media (max-width: 860px) {
  .board-layout { grid-template-columns: 1fr; }
  .product-grid { grid-template-columns: 1fr; }
}
</style>
