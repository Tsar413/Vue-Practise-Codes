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
    title: '教室值日安排板',
    points: 'v-for、@click、:class、computed、单页面题解题顺序',
    requirement: '完成值日列表展示、当前组切换、完成状态呈现和完成统计，先打通“列表渲染 -> 当前状态 -> 自动统计”的主链路。',
    expectation: '学生能够把考试型单页面题拆成原始数据、当前状态和统计结果三层，按步骤稳定完成。',
  },
  {
    id: '02',
    title: '校园图书信息卡',
    points: 'props、emit、父传子、子传父、单页面组件通信',
    requirement: '完成图书列表展示、点击图书切换当前项以及右侧详情渲染，重点练习父组件传值给子组件、子组件把选中项传回父组件。',
    expectation: '学生能够掌握最基础的组件通信：父组件保存当前图书，列表子组件负责触发选择，详情子组件负责接收数据并渲染。',
  },
]
