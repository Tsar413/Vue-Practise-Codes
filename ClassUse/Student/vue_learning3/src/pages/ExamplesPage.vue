<template>
  <section class="page">
    <article class="intro card">
      <h2>Day03 知识点提示</h2>
      <p>
        这一页不直接给出答案效果，只提示学生应该分析哪些数据、该优先使用哪些已学知识点，以及它们分别适合解决什么问题。
      </p>
    </article>

    <section class="examples">
      <article class="card">
        <div class="head">
          <div>
            <h3>项目一：登录页面</h3>
            <p>先回忆本项目会用到哪些基础知识点，再开始分析页面。</p>
          </div>
        </div>
        <div class="hint-grid">
          <div class="hint-block">
            <h4>知识点 1</h4>
            <p><code>ref</code></p>
            <ul>
              <li>定义账号、密码、按钮状态</li>
            </ul>
          </div>
          <div class="hint-block">
            <h4>知识点 2</h4>
            <p><code>v-model</code></p>
            <ul>
              <li>绑定账号输入框</li>
              <li>绑定密码输入框</li>
            </ul>
          </div>
          <div class="hint-block">
            <h4>知识点 3</h4>
            <p><code>:disabled</code></p>
            <ul>
              <li>控制登录按钮是否可点击</li>
              <li>初始状态应为禁用</li>
            </ul>
          </div>
          <div class="hint-block">
            <h4>知识点 4</h4>
            <p><code>watch</code></p>
            <ul>
              <li>侦听账号和密码</li>
              <li>输入变化后更新按钮状态</li>
            </ul>
          </div>
        </div>
        <div class="hint-block">
          <h4>页面分析提示</h4>
          <ul>
            <li>账号、密码：输入数据</li>
            <li>按钮是否禁用：状态数据</li>
          </ul>
        </div>
      </article>

      <article class="card">
        <div class="head">
          <div>
            <h3>项目二：成绩案例</h3>
            <p>先回忆列表、条件、样式、统计分别该用什么知识点。</p>
          </div>
        </div>
        <div class="hint-grid">
          <div class="hint-block">
            <h4>知识点 1</h4>
            <p><code>v-model.trim</code> / <code>v-model.number</code></p>
            <ul>
              <li>绑定科目输入框</li>
              <li>绑定分数输入框</li>
            </ul>
          </div>
          <div class="hint-block">
            <h4>知识点 2</h4>
            <p><code>v-for</code></p>
            <ul>
              <li>渲染成绩列表</li>
              <li>每一项包含科目和分数</li>
            </ul>
          </div>
          <div class="hint-block">
            <h4>知识点 3</h4>
            <p><code>v-if</code></p>
            <ul>
              <li>列表为空时显示“暂无数据”</li>
            </ul>
          </div>
          <div class="hint-block">
            <h4>知识点 4</h4>
            <p><code>:class</code></p>
            <ul>
              <li>低于 60 分时显示不及格样式</li>
            </ul>
          </div>
          <div class="hint-block">
            <h4>知识点 5</h4>
            <p><code>@click</code></p>
            <ul>
              <li>点击添加成绩</li>
              <li>点击删除成绩</li>
            </ul>
          </div>
          <div class="hint-block">
            <h4>知识点 6</h4>
            <p><code>computed</code></p>
            <ul>
              <li>统计总分</li>
              <li>统计平均分</li>
            </ul>
          </div>
          <div class="hint-block">
            <h4>知识点 7</h4>
            <p><code>watch</code></p>
            <ul>
              <li>输入变化后更新提示文字</li>
            </ul>
          </div>
        </div>
        <div class="hint-block">
          <h4>页面分析提示</h4>
          <ul>
            <li>subject、score：输入数据</li>
            <li>scoreList：原始列表数据</li>
            <li>totalScore、averageScore：结果数据</li>
            <li>scoreTip：提示数据</li>
          </ul>
        </div>
      </article>
    </section>
  </section>
</template>

<script setup lang="ts"></script>

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
  background: linear-gradient(180deg, #ffffff 0%, #fdf2f8 100%);
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

.hint-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
}

.hint-block {
  margin-top: 12px;
  padding: 14px;
  border-radius: 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
}

.hint-block h4 {
  margin: 0 0 10px;
}

.hint-block ul {
  margin: 0;
  padding-left: 20px;
  color: #475569;
  line-height: 1.8;
}

pre {
  margin: 14px 0 0;
  padding: 14px;
  overflow: auto;
  border-radius: 14px;
  background: #0f172a;
  color: #e2e8f0;
  font-size: 13px;
}
</style>
