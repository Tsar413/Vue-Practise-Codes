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
    title: '登录页面',
    points: 'v-model、watch、:disabled',
    requirement: '按教材版式完成登录页面，包含标题、账号输入框、密码输入框和登录按钮。初始状态按钮不可点击；当账号和密码都填写后按钮可点击；任意一项为空则重新禁用。',
    expectation: '页面结构和视觉效果接近教材项目，账号和密码变化时按钮禁用状态同步联动。',
  },
  {
    id: '02',
    title: '成绩案例',
    points: 'v-for、v-if、:class、v-model、@click、watch、computed',
    requirement: '完成成绩列表渲染、不及格高亮、空数据提示、添加成绩、删除成绩，以及总分和平均分统计。',
    expectation: '列表、提示、总分和平均分会随成绩数据变化而同步更新。',
  },
]
