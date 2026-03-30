<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>教师完成版按教材项目还原结构和样式，同时保留 Day03 要求的按钮禁用联动。</p>
    </div>
    <div class="login-stage" :style="{ backgroundImage: `url(${loginBg})` }">
      <form class="login-form" @submit.prevent>
        <div class="title">
          <h1>欢 迎 来 到 编 程 技 术 学 习 网 站</h1>
        </div>
        <div class="input-row">
          <label for="teacher-name">账号:</label>
          <input id="teacher-name" v-model="name" type="text" placeholder="请输入账号" />
        </div>
        <div class="input-row">
          <label for="teacher-password">密码:</label>
          <input id="teacher-password" v-model="password" type="password" placeholder="请输入密码" />
        </div>
        <div class="input-row action-row">
          <button type="submit" :disabled="disabled">登 录</button>
        </div>
      </form>
    </div>
  </TaskPanel>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
import loginBg from '@/assets/login_bg.jpg'

const meta = taskMetaList[0]!
const name = ref('')
const password = ref('')
const disabled = ref(true)

watch([name, password], ([newName, newPassword]) => {
  disabled.value = !(newName && newPassword)
})
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
  cursor: pointer;
}

.action-row button:disabled {
  opacity: 0.55;
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
