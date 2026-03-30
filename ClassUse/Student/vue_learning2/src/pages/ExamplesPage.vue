<template>
  <section class="page">
    <article class="intro card">
      <h2>Day02 教案示例与效果</h2>
      <p>
        本页集中演示 Day02 的核心内容：用 <code>v-model</code> 接住输入，用
        <code>computed</code> 生成结果，再配合条件渲染和列表渲染完成页面联动。
      </p>
    </article>

    <section class="examples">
      <article class="card">
        <div class="head">
          <div>
            <h3>1. 昵称回显</h3>
            <p>输入框和数据同步，欢迎语实时变化。</p>
          </div>
        </div>
        <input v-model="nickname" type="text" placeholder="请输入昵称" />
        <div class="demo-value">欢迎你，{{ nickname || '同学' }}</div>
      </article>

      <article class="card">
        <div class="head">
          <div>
            <h3>2. 报名协议</h3>
            <p>勾选状态由 <code>v-model</code> 管理。</p>
          </div>
        </div>
        <label class="checkbox-row">
          <input v-model="agreed" type="checkbox" />
          我已阅读并同意报名协议
        </label>
        <button :disabled="!agreed">立即报名</button>
      </article>

      <article class="card">
        <div class="head">
          <div>
            <h3>3. 购物车总价</h3>
            <p>结果值适合交给 <code>computed</code>。</p>
          </div>
        </div>
        <div class="cart-list">
          <label v-for="item in cartItems" :key="item.name" class="cart-item">
            <span>{{ item.name }} / {{ item.price }} 元</span>
            <input v-model.number="item.count" type="number" min="0" />
          </label>
        </div>
        <p class="demo-value">总件数：{{ totalCount }}，总价：{{ totalPrice }} 元</p>
      </article>

      <article class="card">
        <div class="head">
          <div>
            <h3>4. 温度顾问</h3>
            <p>输入值变化后，建议文本自动重算。</p>
          </div>
        </div>
        <input v-model.number="temperature" type="number" placeholder="请输入温度" />
        <p class="tip">{{ advisorText }}</p>
      </article>

      <article class="card">
        <div class="head">
          <div>
            <h3>5. 课程筛选</h3>
            <p>原始数组不改，返回筛选后的结果数组。</p>
          </div>
        </div>
        <input v-model="keyword" type="text" placeholder="搜索课程关键字" />
        <ul class="list">
          <li v-for="course in filteredCourses" :key="course">{{ course }}</li>
        </ul>
      </article>

      <article class="card">
        <div class="head">
          <div>
            <h3>6. 草稿助手</h3>
            <p>一个输入项可以派生多个联动结果。</p>
          </div>
        </div>
        <textarea v-model="draftText" rows="5" placeholder="输入你的草稿"></textarea>
        <p class="muted">字数：{{ draftLength }}</p>
        <div class="preview">{{ draftText || '这里显示草稿预览。' }}</div>
      </article>
    </section>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const nickname = ref('')
const agreed = ref(false)
const temperature = ref(22)
const keyword = ref('')
const draftText = ref('')
const cartItems = ref([
  { name: 'Vue 实训讲义', price: 35, count: 1 },
  { name: '组件练习册', price: 18, count: 2 },
])
const courses = ref(['Vue 基础', '计算属性训练', '表单交互实战', '项目综合练习'])

const totalCount = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.count, 0),
)
const totalPrice = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.price * item.count, 0),
)
const advisorText = computed(() => {
  if (temperature.value < 10) return '天气偏冷，建议穿厚外套。'
  if (temperature.value < 20) return '可以穿外套，注意早晚温差。'
  if (temperature.value < 28) return '体感舒适，常规穿搭即可。'
  return '温度较高，建议短袖并注意补水。'
})
const filteredCourses = computed(() =>
  courses.value.filter((course) => course.includes(keyword.value.trim())),
)
const draftLength = computed(() => draftText.value.length)
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
  background: linear-gradient(180deg, #ffffff 0%, #fff7ed 100%);
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

input,
textarea,
select {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  font: inherit;
  box-sizing: border-box;
}

.checkbox-row {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 14px;
  color: #475569;
}

.checkbox-row input {
  width: auto;
}

.demo-value {
  margin-top: 14px;
  font-size: 22px;
  font-weight: 700;
}

.tip,
.muted {
  margin-top: 12px;
}

.cart-list,
.list {
  display: grid;
  gap: 10px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
}

.cart-item input {
  width: 96px;
}

.preview {
  margin-top: 12px;
  padding: 14px;
  border-radius: 14px;
  background: #f8fafc;
  line-height: 1.8;
}

button {
  padding: 10px 16px;
  border: none;
  border-radius: 12px;
  background: #ea580c;
  color: #fff;
  cursor: pointer;
}

button:disabled {
  background: #94a3b8;
  cursor: not-allowed;
}

.list {
  margin: 12px 0 0;
  padding-left: 20px;
}
</style>
