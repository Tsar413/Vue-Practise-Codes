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
    title: '话题投票小程序',
    points: 'v-for、@click、computed、点击反馈、结果统计',
    requirement: '完成投票项渲染、点击加票以及最高票话题显示，先打通“点击修改数据 + 自动更新结果”的主链路。',
    expectation: '学生能够理解原始数据变化和计算结果联动的关系，掌握交互型列表页面的基本组织方式。',
  },
  {
    id: '02',
    title: 'AI 聊天界面模拟版',
    points: 'v-model、v-for、@click、动态样式、输入状态转列表数据',
    requirement: '完成消息输入、发送动作和消息列表渲染，先打通“输入内容 -> 发送 -> 列表更新”的交互链。',
    expectation: '学生能够区分临时输入状态与正式消息列表数据，理解发送动作如何把输入状态转成原始数据。',
  },
  {
    id: '03',
    title: '聊天联系人列表',
    points: 'props、emit、父组件状态管理、左右联动、公共状态',
    requirement: '完成左侧联系人列表、右侧详情区联动，并实现父组件统一管理当前联系人、子组件负责展示与反馈。',
    expectation: '学生能够真正理解“公共状态放父组件”的原则，并把这一思路迁移到左右联动型项目中。',
  },
]
