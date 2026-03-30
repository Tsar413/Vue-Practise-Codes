<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>用户主页展示页不是单一列表，而是多个信息模块同时存在。关键是先把用户对象、标签数组、动态数组、作品数组分别组织清楚。</p>
    </div>
    <div class="profile-layout">
      <section class="profile-pane">
        <h3>个人信息区</h3>
        <p class="preview-note">用户对象和各模块数组都已经在脚本里准备好。学生的任务是把不同类型数据渲染到对应页面区域。</p>
        <!-- TODO 学生练习区：这里补充用户信息与标签渲染 -->
        <div class="profile-card">
          <div class="avatar">L</div>
          <div>
            <h4>林小满</h4>
            <p>校园摄影爱好者，喜欢记录日常与光影。</p>
          </div>
        </div>
        <div class="tag-row">
          <span class="tag">摄影</span>
          <span class="tag">探店</span>
          <span class="tag">Vlog</span>
        </div>
      </section>

      <section class="feed-pane">
        <h3>动态与作品区</h3>
        <!-- TODO 学生练习区：这里改成多个模块的列表渲染 -->
        <article class="post-item">
          <div>
            <strong>校园樱花已经进入最佳观赏期</strong>
            <p>今天傍晚在操场边拍到一组很好看的逆光照片。</p>
          </div>
          <span class="badge">动态</span>
        </article>
        <div class="works-box">
          <p>作品集</p>
          <div class="work-grid">
            <div class="work-card">夜景</div>
            <div class="work-card">操场</div>
            <div class="work-card">食堂</div>
          </div>
        </div>
      </section>
    </div>
    <TaskScaffold summary="先完成对象信息区，再分别完成标签、动态、作品等数组模块。展示型主页的核心不是交互多，而是数据结构和模块边界清楚。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
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

const todoText = `已学知识点提示：
1. userInfo、tagList、postList、workList 都已提供，先不要自己重新改变数据层级。
2. 单个用户基础信息更适合用对象，多个标签、动态、作品更适合用数组。
3. 页面可以按“头部信息区、标签区、动态区、作品区”拆成多个模块分别渲染。
4. 不同模块虽然展示方式不同，但本质上仍然是数据驱动页面。

可先思考：
- 哪些区域适合直接渲染对象字段？
- 哪些区域适合用 v-for 循环生成？`
</script>

<style scoped>
.workspace { margin-bottom: 12px; line-height: 1.9; color: #475569; }
.workspace p { margin: 0; }
.profile-layout { display: grid; grid-template-columns: 0.92fr 1.08fr; gap: 14px; }
.profile-pane, .feed-pane { padding: 18px; border: 1px solid #dbe4f0; border-radius: 20px; background: #fff; }
.profile-pane h3, .feed-pane h3, .preview-note, .profile-card h4, .profile-card p, .post-item p, .works-box p { margin: 0; }
.preview-note { margin-top: 10px; line-height: 1.7; color: #64748b; font-size: 14px; }
.profile-card { display: flex; gap: 14px; align-items: center; margin-top: 12px; padding: 16px; border: 1px solid #e2e8f0; border-radius: 16px; background: #fffaf5; }
.avatar { display: grid; place-items: center; width: 64px; height: 64px; border-radius: 50%; background: linear-gradient(135deg, #fb923c, #f97316); color: #fff; font-size: 28px; font-weight: 700; }
.profile-card p { margin-top: 8px; line-height: 1.7; color: #64748b; }
.tag-row { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 14px; }
.tag { display: inline-flex; align-items: center; padding: 8px 12px; border-radius: 999px; background: #ffedd5; color: #c2410c; }
.post-item { display: flex; justify-content: space-between; gap: 12px; align-items: flex-start; margin-top: 12px; padding: 14px; border: 1px solid #fde68a; border-radius: 14px; background: #fffef7; }
.post-item strong { color: #7c2d12; }
.post-item p { margin-top: 8px; color: #64748b; line-height: 1.7; }
.badge { display: inline-flex; align-items: center; justify-content: center; padding: 6px 10px; border-radius: 999px; background: #fed7aa; color: #9a3412; font-size: 12px; }
.works-box { margin-top: 14px; padding: 14px; border-radius: 14px; background: #f8fafc; }
.works-box p { color: #475569; }
.work-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; margin-top: 12px; }
.work-card { display: grid; place-items: center; min-height: 76px; border-radius: 14px; background: linear-gradient(135deg, #fdba74, #fb923c); color: #fff; font-weight: 600; }
@media (max-width: 860px) {
  .profile-layout { grid-template-columns: 1fr; }
  .work-grid { grid-template-columns: 1fr; }
}
</style>
