<template>
  <section class="page">
    <article class="intro card">
      <h2>教案示例与效果</h2>
      <p>
        本页先固定提供数据和方法，只演示模板里要写的 Vue 指令。进入题目页后，学生重点练习插值表达式、事件绑定、属性绑定、条件渲染和列表渲染。
      </p>
    </article>

    <section class="examples">
      <article class="card">
        <div class="head">
          <div>
            <h3>1. 响应式数据 + 插值表达式</h3>
            <p>数据变化后，页面文本自动更新。</p>
          </div>
          <button @click="count++">点击加一</button>
        </div>
        <div class="demo-value">当前点击次数：{{ count }}</div>
        <pre><code>const count = ref(0)

&lt;div&gt;当前点击次数：\{{ count }}&lt;/div&gt;
&lt;button @click="count++"&gt;点击加一&lt;/button&gt;</code></pre>
      </article>

      <article class="card">
        <div class="head">
          <div>
            <h3>2. v-bind 属性绑定</h3>
            <p>标签属性不能直接用插值，改用 <code>:属性名</code>。</p>
          </div>
          <button class="ghost" @click="isActive = !isActive">切换高亮</button>
        </div>
        <p :class="{ highlight: isActive }">这段文字会根据状态切换高亮。</p>
        <pre><code>const isActive = ref(true)

&lt;p :class="\{ highlight: isActive }"&gt;这段文字会根据状态切换高亮。&lt;/p&gt;</code></pre>
      </article>

      <article class="card">
        <div class="head">
          <div>
            <h3>3. v-on 事件绑定</h3>
            <p>事件的核心是“用户操作 -> 修改数据 -> 页面更新”。</p>
          </div>
          <button @click="score += 5">加 5 分</button>
        </div>
        <div class="demo-value">当前分数：{{ score }}</div>
        <pre><code>const score = ref(60)

&lt;div&gt;当前分数：\{{ score }}&lt;/div&gt;
&lt;button @click="score += 5"&gt;加 5 分&lt;/button&gt;</code></pre>
      </article>

      <article class="card">
        <div class="head">
          <div>
            <h3>4. :disabled 按钮状态</h3>
            <p>把按钮是否禁用交给数据控制，而不是手动改属性。</p>
          </div>
          <button class="ghost" @click="isDisabled = !isDisabled">切换状态</button>
        </div>
        <div class="button-row">
          <button :disabled="isDisabled">提交作业</button>
        </div>
        <pre><code>const isDisabled = ref(true)

&lt;button :disabled="isDisabled"&gt;提交作业&lt;/button&gt;</code></pre>
      </article>

      <article class="card">
        <div class="head">
          <div>
            <h3>5. v-if / v-else 条件渲染</h3>
            <p>适合控制“显示哪一段内容”。</p>
          </div>
          <button class="ghost" @click="examScore = examScore >= 60 ? 58 : 78">
            切换成绩
          </button>
        </div>
        <div class="demo-value">当前成绩：{{ examScore }}</div>
        <p v-if="examScore >= 60" class="pass">及格</p>
        <p v-else class="fail">不及格</p>
        <pre><code>const examScore = ref(78)

&lt;p v-if="examScore &gt;= 60"&gt;及格&lt;/p&gt;
&lt;p v-else&gt;不及格&lt;/p&gt;</code></pre>
      </article>

      <article class="card">
        <div class="head">
          <div>
            <h3>6. v-show 显示隐藏</h3>
            <p>适合频繁切换同一块内容的显示状态。</p>
          </div>
          <button @click="isShow = !isShow">切换面板</button>
        </div>
        <div v-show="isShow" class="panel">这里是课程详情面板。</div>
        <pre><code>const isShow = ref(true)

&lt;button @click="isShow = !isShow"&gt;切换面板&lt;/button&gt;
&lt;div v-show="isShow"&gt;这里是课程详情面板。&lt;/div&gt;</code></pre>
      </article>

      <article class="card">
        <div class="head">
          <div>
            <h3>7. v-for 列表渲染</h3>
            <p>根据数组生成重复结构，而不是复制标签。</p>
          </div>
        </div>
        <ul>
          <li v-for="student in students" :key="student">{{ student }}</li>
        </ul>
        <pre v-pre><code>const students = ref(['张三', '李四', '王五'])

&lt;li v-for="student in students" :key="student"&gt;
  {{ student }}
&lt;/li&gt;</code></pre>
      </article>

      <article class="card">
        <div class="head">
          <div>
            <h3>8. :src 图片绑定</h3>
            <p>图片地址来自数据时，使用 <code>:src</code> 绑定。</p>
          </div>
          <button class="ghost" @click="toggleCover">切换图片</button>
        </div>
        <img class="cover" :src="cover" alt="课程封面" />
        <p>{{ caption }}</p>
        <pre><code>const cover = ref('图片地址')

&lt;img :src="cover" alt="课程封面" /&gt;</code></pre>
      </article>

      <article class="card">
        <div class="head">
          <div>
            <h3>9. :title 悬停提示</h3>
            <p>把按钮的提示文字绑定到数据上。</p>
          </div>
        </div>
        <button :title="tip">鼠标移入查看提示</button>
        <p>当前提示：{{ tip }}</p>
        <pre><code>const tip = ref('点击这里打开 Day01 练习说明')

&lt;button :title="tip"&gt;鼠标移入查看提示&lt;/button&gt;</code></pre>
      </article>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const score = ref(60)
const isActive = ref(true)
const isDisabled = ref(true)
const examScore = ref(78)
const isShow = ref(true)
const students = ref(['张三', '李四', '王五'])
const cover = ref('https://dummyimage.com/600x360/0f766e/ffffff&text=Vue+基础')
const caption = ref('Vue 基础课程封面')
const tip = ref('点击这里打开 Day01 练习说明')

function toggleCover() {
  if (cover.value.includes('Vue+基础')) {
    cover.value = 'https://dummyimage.com/600x360/1d4ed8/ffffff&text=组件基础'
    caption.value = '组件基础课程封面'
    return
  }

  cover.value = 'https://dummyimage.com/600x360/0f766e/ffffff&text=Vue+基础'
  caption.value = 'Vue 基础课程封面'
}
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
  background: linear-gradient(180deg, #ffffff 0%, #f0fdfa 100%);
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

.demo-value {
  margin: 14px 0;
  font-size: 24px;
  font-weight: 700;
}

.button-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

button {
  padding: 10px 16px;
  border: none;
  border-radius: 12px;
  background: #0f766e;
  color: #fff;
  cursor: pointer;
}

button[disabled] {
  background: #94a3b8;
  cursor: not-allowed;
}

.ghost {
  background: #e2e8f0;
  color: #1e293b;
}

.highlight {
  display: inline-block;
  padding: 8px 12px;
  border-radius: 10px;
  color: #115e59;
  background: #ccfbf1;
}

.pass {
  color: #15803d;
  font-weight: 700;
}

.fail {
  color: #dc2626;
  font-weight: 700;
}

.panel {
  margin: 14px 0;
  padding: 14px;
  border-radius: 14px;
  background: #ecfeff;
  border: 1px solid #a5f3fc;
}

.cover {
  display: block;
  width: 100%;
  max-width: 320px;
  border-radius: 16px;
}

pre {
  margin: 16px 0 0;
  padding: 16px;
  overflow: auto;
  border-radius: 14px;
  background: #0f172a;
  color: #e2e8f0;
  font-size: 13px;
}

code {
  font-family: 'Consolas', 'Courier New', monospace;
}

ul {
  margin: 12px 0 0;
  padding-left: 18px;
  color: #334155;
}

@media (max-width: 640px) {
  .head {
    flex-direction: column;
  }
}
</style>
