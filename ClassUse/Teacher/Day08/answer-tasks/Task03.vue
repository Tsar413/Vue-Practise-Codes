<template>
  <TaskPanel v-bind="meta">
    <div class="profile-layout">
      <section class="profile-pane">
        <div class="profile-card">
          <div class="avatar">{{ userInfo.name.slice(0, 1) }}</div>
          <div>
            <h3>{{ userInfo.name }}</h3>
            <p>{{ userInfo.intro }}</p>
          </div>
        </div>

        <div class="stats-row">
          <article class="stat-card">
            <strong>{{ userInfo.fans }}</strong>
            <span>粉丝</span>
          </article>
          <article class="stat-card">
            <strong>{{ userInfo.following }}</strong>
            <span>关注</span>
          </article>
          <article class="stat-card">
            <strong>{{ userInfo.likes }}</strong>
            <span>获赞</span>
          </article>
        </div>

        <div class="tag-row">
          <span v-for="item in tagList" :key="item" class="tag">{{ item }}</span>
        </div>
      </section>

      <section class="feed-pane">
        <div class="section-head">
          <h3>最新动态</h3>
          <span class="section-tip">v-for 渲染数组</span>
        </div>
        <article v-for="item in postList" :key="item.id" class="post-item">
          <strong>{{ item.title }}</strong>
          <p>{{ item.content }}</p>
        </article>

        <div class="works-box">
          <div class="section-head">
            <h3>作品集</h3>
            <span class="section-tip">对象 + 数组混合结构</span>
          </div>
          <div class="work-grid">
            <div v-for="item in workList" :key="item" class="work-card">{{ item }}</div>
          </div>
        </div>
      </section>
    </div>
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[2]!
const userInfo = {
  name: '林小满',
  intro: '校园摄影爱好者，喜欢记录日常与光影。',
  fans: 3280,
  following: 214,
  likes: 8012,
}

const tagList = ['摄影', '探店', 'Vlog', '校园生活'] as const

const postList = [
  {
    id: 1,
    title: '校园樱花已经进入最佳观赏期',
    content: '今天傍晚在操场边拍到一组很好看的逆光照片。',
  },
  {
    id: 2,
    title: '新开的面包店值得去试试',
    content: '肉松小贝和抹茶卷都很不错，拍照也很好看。',
  },
] as const

const workList = ['夜景摄影', '操场晚霞', '食堂窗口'] as const
</script>

<style scoped>
.profile-layout { display: grid; grid-template-columns: 0.92fr 1.08fr; gap: 14px; }
.profile-pane, .feed-pane { padding: 18px; border: 1px solid #dbe4f0; border-radius: 20px; background: #fff; }
.profile-card { display: flex; gap: 14px; align-items: center; padding: 16px; border: 1px solid #e2e8f0; border-radius: 16px; background: #fffaf5; }
.avatar { display: grid; place-items: center; width: 64px; height: 64px; border-radius: 50%; background: linear-gradient(135deg, #fb923c, #f97316); color: #fff; font-size: 28px; font-weight: 700; }
.profile-card h3, .profile-card p, .post-item p, .section-head h3 { margin: 0; }
.profile-card p { margin-top: 8px; line-height: 1.7; color: #64748b; }
.stats-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 14px; }
.stat-card { display: grid; place-items: center; padding: 14px; border-radius: 14px; background: #f8fafc; }
.stat-card strong { font-size: 22px; color: #9a3412; }
.stat-card span { margin-top: 6px; color: #64748b; font-size: 14px; }
.tag-row { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 14px; }
.tag { display: inline-flex; align-items: center; padding: 8px 12px; border-radius: 999px; background: #ffedd5; color: #c2410c; }
.section-head { display: flex; justify-content: space-between; align-items: center; gap: 12px; }
.section-tip { color: #64748b; font-size: 13px; }
.post-item { margin-top: 12px; padding: 14px; border: 1px solid #fde68a; border-radius: 14px; background: #fffef7; }
.post-item strong { color: #7c2d12; }
.post-item p { margin-top: 8px; color: #64748b; line-height: 1.7; }
.works-box { margin-top: 14px; padding: 14px; border-radius: 14px; background: #f8fafc; }
.work-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; margin-top: 12px; }
.work-card { display: grid; place-items: center; min-height: 76px; border-radius: 14px; background: linear-gradient(135deg, #fdba74, #fb923c); color: #fff; font-weight: 600; }
@media (max-width: 860px) {
  .profile-layout { grid-template-columns: 1fr; }
  .stats-row, .work-grid { grid-template-columns: 1fr; }
}
</style>
