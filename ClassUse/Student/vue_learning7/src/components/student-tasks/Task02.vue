<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>奶茶点单系统的难点不是控件多，而是多个输入项共同影响同一个结果。先分清哪些是输入项，哪些是最终结果。</p>
    </div>
    <div class="milk-layout">
      <section class="form-pane">
        <h3>点单设置区</h3>
        <p class="preview-note">这里是静态预览。选项数据和默认值都已经在脚本里提供，学生只需要完成绑定和联动。</p>
        <!-- TODO 学生练习区：这里补充 v-model 绑定 -->
        <label class="field">
          <span>饮品</span>
          <select>
            <option>芝士奶绿</option>
          </select>
        </label>
        <label class="field">
          <span>杯型</span>
          <select>
            <option>大杯</option>
          </select>
        </label>
        <label class="field">
          <span>甜度</span>
          <select>
            <option>少糖</option>
          </select>
        </label>
        <label class="field">
          <span>数量</span>
          <div class="fake-input">2</div>
        </label>
      </section>

      <section class="summary-pane">
        <h3>订单信息区</h3>
        <!-- TODO 学生练习区：这里改成订单摘要和价格联动 -->
        <p>当前选择：芝士奶绿 / 大杯 / 少糖 / 加珍珠 / 2 杯</p>
        <strong>应付金额：￥34</strong>
      </section>
    </div>
    <TaskScaffold summary="先把输入项绑定完整，再统一处理订单摘要和最终价格，不要一开始就在多个地方手工维护结果。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[1]!
const drinkOptions = [
  {
    name: '芝士奶绿',
    basePrice: 12,
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='92' viewBox='0 0 140 92'><rect width='140' height='92' rx='16' fill='%23dcfce7'/><rect x='42' y='18' width='56' height='48' rx='14' fill='%2322c55e'/><rect x='48' y='12' width='44' height='14' rx='7' fill='%23fef9c3'/><text x='70' y='80' text-anchor='middle' font-size='13' fill='%23166534'>奶绿</text></svg>",
  },
  {
    name: '杨枝甘露',
    basePrice: 15,
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='92' viewBox='0 0 140 92'><rect width='140' height='92' rx='16' fill='%23ffedd5'/><rect x='42' y='18' width='56' height='48' rx='14' fill='%23fb923c'/><rect x='48' y='12' width='44' height='14' rx='7' fill='%23fde68a'/><text x='70' y='80' text-anchor='middle' font-size='13' fill='%239a3412'>甘露</text></svg>",
  },
  {
    name: '芋泥波波奶茶',
    basePrice: 16,
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='92' viewBox='0 0 140 92'><rect width='140' height='92' rx='16' fill='%23ede9fe'/><rect x='42' y='18' width='56' height='48' rx='14' fill='%238b5cf6'/><rect x='48' y='12' width='44' height='14' rx='7' fill='%23ddd6fe'/><text x='70' y='80' text-anchor='middle' font-size='13' fill='%235b21b6'>芋泥</text></svg>",
  },
] as const

const cupOptions = [
  { label: '中杯', extraPrice: 0 },
  { label: '大杯', extraPrice: 3 },
] as const

const sugarOptions = ['少糖', '正常糖', '全糖'] as const

const toppingOptions = [
  { label: '珍珠', extraPrice: 2 },
  { label: '椰果', extraPrice: 2 },
  { label: '奶盖', extraPrice: 3 },
] as const

const drink = ref<(typeof drinkOptions)[number]['name']>('芝士奶绿')
const cupSize = ref<(typeof cupOptions)[number]['label']>('大杯')
const sugarLevel = ref<(typeof sugarOptions)[number]>('少糖')
const selectedToppings = ref<Array<(typeof toppingOptions)[number]['label']>>(['珍珠'])
const count = ref(2)

const todoText = `已学知识点提示：
1. 饮品、杯型、甜度、加料和数量数据都已提供，先不要自己重新编选项格式。
2. 每个输入项都先完成 v-model 绑定，饮品数据中也已经带了 image 字段。
3. 订单摘要和总价都属于结果项，统一放到 computed 思考。
4. 价格联动时先拆成“基础价 + 附加项 + 数量”。

可先思考：
- 哪些是输入状态？饮品、杯型、甜度、加料、数量
- 哪些是结果状态？订单摘要、最终价格`
</script>

<style scoped>
.workspace { margin-bottom: 12px; line-height: 1.9; color: #475569; }
.workspace p { margin: 0; }
.milk-layout { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 14px; }
.form-pane, .summary-pane { padding: 18px; border: 1px solid #dbe4f0; border-radius: 20px; background: #fff; }
.form-pane h3, .summary-pane h3, .summary-pane p, .summary-pane strong, .preview-note { margin: 0; }
.preview-note { margin-top: 10px; line-height: 1.7; color: #64748b; font-size: 14px; }
.field { display: grid; gap: 8px; margin-top: 12px; color: #334155; }
.field select, .fake-input { padding: 12px 14px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; background: #fff; }
.summary-pane { background: linear-gradient(180deg, #fffdf4 0%, #fff 100%); }
.summary-pane p { margin-top: 14px; line-height: 1.8; color: #475569; }
.summary-pane strong { display: inline-block; margin-top: 12px; color: #b45309; }
@media (max-width: 860px) {
  .milk-layout { grid-template-columns: 1fr; }
}
</style>
