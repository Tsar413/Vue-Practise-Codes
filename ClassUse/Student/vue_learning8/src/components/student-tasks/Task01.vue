<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>二手物品展示板属于展示类页面。先让卡片正确来自数组，再处理分类、搜索和状态样式，不要一开始就沉迷配色和边框。</p>
    </div>
    <div class="board-layout">
      <section class="filter-pane">
        <h3>筛选区</h3>
        <p class="preview-note">分类数组、关键字状态和物品数据都已经准备好，学生只需要完成筛选条件与结果列表的联动。</p>
        <!-- TODO 学生练习区：这里补充分类切换和关键字绑定 -->
        <div class="filter-row">
          <span class="chip active">全部</span>
          <span class="chip">数码</span>
          <span class="chip">书籍</span>
          <span class="chip">生活</span>
        </div>
        <div class="fake-input">搜索关键字：键盘</div>
      </section>

      <section class="list-pane">
        <h3>物品展示区</h3>
        <!-- TODO 学生练习区：这里改成 v-for 渲染筛选后的物品列表 -->
        <div class="product-grid">
          <article class="product-card">
            <div class="thumb">机械键盘</div>
            <h4>雷柏机械键盘</h4>
            <p>￥80</p>
            <div class="meta-row">
              <span>数码</span>
              <span class="status recommend">推荐</span>
            </div>
          </article>
          <article class="product-card">
            <div class="thumb">高数书</div>
            <h4>高等数学教材</h4>
            <p>￥15</p>
            <div class="meta-row">
              <span>书籍</span>
              <span class="status sold">已售出</span>
            </div>
          </article>
        </div>

        <div class="result-box">
          <!-- TODO 学生练习区：这里显示筛选结果数量 -->
          <p>当前共 2 件匹配物品</p>
          <p>筛选结果由分类和关键字共同决定</p>
        </div>
      </section>
    </div>
    <TaskScaffold summary="先完成卡片渲染，再完成分类和关键字联合筛选，最后再处理状态样式。展示型页面里，筛选逻辑应该集中在 computed 中。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
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
const currentType = '全部'
const keyword = '键盘'

const todoText = `已学知识点提示：
1. 物品数组 itemList、分类选项 typeOptions 和搜索关键字示例都已提供，先不要自己重新设计字段。
2. 卡片展示区优先用 v-for 跑通，图片字段 image 也已经给好，可直接渲染。
3. 当前分类和关键字都属于状态数据，筛选结果属于计算结果。
4. 状态标签如“推荐”“九成新”“已售出”适合交给 :class 或条件渲染处理。

可先思考：
- 哪些是原始数据？物品数组
- 哪些是状态数据？当前分类、关键字
- 哪些是结果数据？筛选后的列表`
</script>

<style scoped>
.workspace { margin-bottom: 12px; line-height: 1.9; color: #475569; }
.workspace p { margin: 0; }
.board-layout { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 14px; }
.filter-pane, .list-pane { padding: 18px; border: 1px solid #dbe4f0; border-radius: 20px; background: #fff; }
.filter-pane h3, .list-pane h3, .product-card h4, .product-card p, .result-box p, .preview-note { margin: 0; }
.preview-note { margin-top: 10px; line-height: 1.7; color: #64748b; font-size: 14px; }
.filter-row { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 12px; }
.chip { display: inline-flex; align-items: center; padding: 8px 12px; border-radius: 999px; background: #f1f5f9; color: #475569; }
.chip.active { background: #fed7aa; color: #9a3412; }
.fake-input { margin-top: 12px; padding: 12px 14px; border: 1px solid #cbd5e1; border-radius: 14px; color: #64748b; }
.product-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin-top: 12px; }
.product-card { padding: 14px; border: 1px solid #fdba74; border-radius: 16px; background: #fffdf8; }
.thumb { display: grid; place-items: center; height: 80px; border-radius: 14px; background: #ffedd5; color: #9a3412; font-weight: 700; }
.product-card p { margin-top: 8px; color: #9a3412; }
.meta-row { display: flex; justify-content: space-between; gap: 12px; align-items: center; margin-top: 12px; color: #64748b; font-size: 14px; }
.status { padding: 6px 10px; border-radius: 999px; font-size: 12px; }
.status.recommend { background: #ffedd5; color: #c2410c; }
.status.sold { background: #e2e8f0; color: #475569; }
.result-box { margin-top: 14px; padding: 14px; border-radius: 14px; background: #f8fafc; }
.result-box p + p { margin-top: 8px; }
@media (max-width: 860px) {
  .board-layout { grid-template-columns: 1fr; }
  .product-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
</style>
