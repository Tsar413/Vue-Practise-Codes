<template>
  <section class="page">
    <article class="intro card">
      <h2>Day09 项目思维提示</h2>
      <p>
        Day09 的重点从“展示与切换”转向“用户操作后页面立即反馈”。难点不在布局，而在于能不能把输入状态、原始数据、页面状态和计算结果分清楚。
      </p>
      <p>
        约定：先分清“用户操作改了什么数据”，再写界面。页面里依然保留语法提示区，帮助学生在项目中回忆
        <code>v-for</code>、<code>v-model</code>、<code>@click</code>、<code>computed</code>、<code>props</code> 与
        <code>emit</code>。
      </p>
    </article>

    <section class="examples">
      <article v-for="item in guideCards" :key="item.id" class="card">
        <div class="head">
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
        <pre><code>{{ item.code }}</code></pre>
      </article>
    </section>
  </section>
</template>

<script setup lang="ts">
const guideCards = [
  {
    id: '01',
    title: '方法 1：先分状态类型',
    desc: 'Day09 的项目都带强交互，先分清输入状态、原始数据、页面状态和结果数据，代码就不容易乱。',
    code: `项目完成顺序建议：
1. 先分析用户会做什么操作
2. 再区分状态数据类型
3. 优先完成基础渲染
4. 再补点击、发送、切换反馈
5. 最后补统计结果和动态样式`,
  },
  {
    id: '02',
    title: '项目 1：话题投票小程序',
    desc: '核心是“点击修改数组中的某一项”，然后让结果型数据自动更新。',
    code: `关键数据：
topicList: 话题数组

关键结果：
topTopic

重点语法：
v-for 渲染列表
@click 修改票数
computed 计算最高票`,
  },
  {
    id: '03',
    title: '项目 2：AI 聊天界面',
    desc: '核心是“输入框内容”和“消息列表”必须分开，发送动作负责把前者转成后者。',
    code: `输入项：
messageText

原始数据：
messageList

重点语法：
v-model
@click
v-for
:class`,
  },
  {
    id: '04',
    title: '项目 3：聊天联系人列表',
    desc: '它和 Day08 的热搜榜类似，但更强调“公共状态放父组件”的理解是否真正稳定。',
    code: `输入状态：
currentContact

原始数据：
contactList

重点语法：
props
emit
父组件主控
左右区域联动`,
  },
] as const
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
  background: linear-gradient(180deg, #ffffff 0%, #ecfdf5 100%);
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

.intro code {
  padding: 2px 6px;
  border-radius: 8px;
  background: #bbf7d0;
  color: #166534;
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
