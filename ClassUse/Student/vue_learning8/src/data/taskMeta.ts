export type TaskMeta = {
  id: string
  title: string
  points: string
  requirement: string
  expectation: string
}

export const taskMetaList: TaskMeta[] = [
  {
    id: '01',
    title: '校园二手物品展示板',
    points: 'v-for、v-model、:class、computed、展示类页面筛选',
    requirement: '完成物品卡片展示、分类筛选、关键字搜索和状态样式显示，先打通“筛选条件到列表结果”的主链路。',
    expectation: '学生能够围绕展示型页面组织数组数据、筛选状态和动态样式，理解搜索与分类联动的实现方式。',
  },
  {
    id: '02',
    title: '今日热搜榜',
    points: 'props、emit、条件渲染、父组件状态管理、列表详情切换',
    requirement: '完成列表页与详情页切换，并实现父组件保存当前页面和当前选中项、子组件负责展示与反馈。',
    expectation: '学生能够理解公共状态为什么交给父组件统一管理，并掌握 props 与 emit 在双页面协作中的基本用法。',
  },
  {
    id: '03',
    title: '用户主页展示页',
    points: '对象与数组混合数据、v-for、动态样式、页面模块组织',
    requirement: '完成个人信息、标签、动态、作品等模块展示，先拆清对象数据、数组数据和对应显示区域。',
    expectation: '学生能够掌握展示型主页中多块信息的组织方式，理解对象和数组混合结构在页面中的实际应用。',
  },
]
