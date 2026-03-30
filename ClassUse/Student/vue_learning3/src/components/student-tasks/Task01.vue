<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>准备页保留教材里的初始状态，学生需要在这个基础上补全数据绑定和按钮联动。</p>
    </div>
    <div class="login-stage" :style="{ backgroundImage: `url(${loginBg})` }">
      <form class="login-form" @submit.prevent>
        <div class="title">
          <h1>欢 迎 来 到 编 程 技 术 学 习 网 站</h1>
        </div>
        <div class="input-row">
          <label for="student-name">账号:</label>
          <input id="student-name" type="text" placeholder="请输入账号" />
        </div>
        <div class="input-row">
          <label for="student-password">密码:</label>
          <input id="student-password" type="password" placeholder="请输入密码" />
        </div>
        <div class="input-row action-row">
          <button type="submit" disabled>登 录</button>
        </div>
      </form>
    </div>
    <TaskScaffold summary="补全输入绑定、按钮禁用状态和侦听器逻辑。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'
import loginBg from '@/assets/login_bg.jpg'

const meta = taskMetaList[0]!
const todoText = `已学知识点提示：
1. 输入框取值：给账号和密码输入框补上 v-model 绑定。
2. 按钮状态控制：给按钮补 :disabled="disabled"。
3. 响应式数据：定义 name、password、disabled。
4. 监视器：使用 watch([name, password], ...) 侦听两个输入项。
5. 侦听器职责：当账号或密码变化后，决定 disabled 是否为 false。

可先思考：
- 哪些是输入数据？name、password
- 哪些是状态数据？disabled`

// TODO: 定义 name
// TODO: 定义 password
// TODO: 定义 disabled
</script>

<style scoped>
.workspace {
  margin-bottom: 12px;
  line-height: 1.9;
  color: #475569;
}

.workspace p {
  margin: 0;
}

.login-stage {
  min-height: 560px;
  padding: 32px 20px;
  border-radius: 24px;
  background-color: #595959;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12);
}

.login-form {
  width: min(650px, 100%);
  margin: 0 auto;
  padding: 36px 28px 20px;
  border-radius: 14px;
  background: rgba(173, 161, 161, 0.72);
  box-shadow: 0 0 25px rgba(87, 86, 86, 0.8);
}

.title {
  margin-top: 20px;
  padding-bottom: 10px;
  text-align: center;
  color: #fff;
}

.title h1 {
  margin: 0;
  font-size: clamp(24px, 3.2vw, 34px);
  font-weight: 700;
  letter-spacing: 0.08em;
}

.input-row {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 20px auto;
}

.input-row label {
  min-width: 72px;
  color: #fff;
  font-size: 20px;
}

.input-row input {
  flex: 1;
  height: 50px;
  padding: 0 14px;
  border: 2px solid #ccc;
  border-radius: 4px;
  font: inherit;
  box-sizing: border-box;
}

.action-row {
  justify-content: center;
}

.action-row button {
  width: 100px;
  height: 45px;
  border: none;
  border-radius: 5px;
  background: rgb(5, 5, 5);
  color: #fff;
  font-size: 20px;
  cursor: not-allowed;
}

@media (max-width: 720px) {
  .login-stage {
    min-height: auto;
    padding: 20px 14px;
  }

  .login-form {
    padding: 24px 18px 16px;
  }

  .input-row {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }

  .input-row label {
    min-width: 0;
    font-size: 18px;
  }
}
</style>
