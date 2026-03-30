<template>
  <TaskPanel v-bind="meta">
    <div class="hot-layout">
      <HotListPage
        v-if="currentPage === 'list'"
        :hot-list="hotList"
        @select="handleSelect"
      />
      <HotDetailPage
        v-else-if="currentItem"
        :item="currentItem"
        @back="handleBack"
      />
    </div>
  </TaskPanel>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
import HotDetailPage from './day08-components/HotDetailPage.vue'
import HotListPage from './day08-components/HotListPage.vue'

type HotItem = {
  id: number
  title: string
  hot: number
  summary: string
  content: string
  tag: string
}

const meta = taskMetaList[1]!
const hotList: HotItem[] = [
  {
    id: 1,
    title: '春季校园歌会报名开启',
    hot: 9281,
    summary: '本周五晚上在操场举行，现已开放班级报名和志愿者招募。',
    content: '歌会面向全校班级和社团开放报名，现场将设置表演区、观众互动区和志愿者服务区。',
    tag: '校园活动',
  },
  {
    id: 2,
    title: '图书馆延长开放时间',
    hot: 7015,
    summary: '考试周期间图书馆将延长到晚上 11 点，并增加自习区座位。',
    content: '新开放区域位于三楼东侧，新增充电位和小组讨论区，方便晚间复习使用。',
    tag: '学习服务',
  },
  {
    id: 3,
    title: '社团文化节节目单公布',
    hot: 6452,
    summary: '多个社团将集中展示节目，现场还会开放互动体验区。',
    content: '本次文化节将设置舞台演出、摄影展、手作体验和游戏打卡区，适合做列表与详情切换练习。',
    tag: '社团资讯',
  },
]

const currentPage = ref<'list' | 'detail'>('list')
const currentItem = ref<HotItem | null>(null)

function handleSelect(item: HotItem) {
  currentItem.value = item
  currentPage.value = 'detail'
}

function handleBack() {
  currentPage.value = 'list'
}
</script>

<style scoped>
.hot-layout { min-height: 420px; }
</style>
