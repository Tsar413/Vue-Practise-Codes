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
    title: '横幅组件',
    points: '单文件组件、导入、注册、使用',
    requirement: '定义一个课程横幅组件，并在父页面中正确导入和使用。',
    expectation: '页面能显示独立组件内容，学生理解组件是可复用的页面块。',
  },
  {
    id: '02',
    title: '学员卡组件',
    points: '单文件组件、导入使用、模板组合',
    requirement: '定义一个学员卡组件，并在父页面中显示学员姓名、班级和方向。',
    expectation: '学生能独立完成一个展示型组件，并理解组件作为页面构件的意义。',
  },
  {
    id: '03',
    title: '注册通知组件',
    points: '组件注册、导入使用',
    requirement: '把通知面板组件正确导入到父页面并显示出来。',
    expectation: '学生理解定义组件和真正使用组件是两个步骤。',
  },
  {
    id: '04',
    title: '课程卡片组件',
    points: '组件使用、模板组合、页面拆分',
    requirement: '在页面中渲染课程卡片组件，并让卡片展示课程标题、讲师和标签。',
    expectation: '学生体会组件作为页面构件的意义，理解展示结构可独立封装。',
  },
  {
    id: '05',
    title: '消息框组件',
    points: 'defineProps、字符串 props',
    requirement: '父组件传一段提示文字给子组件显示，子组件只负责展示。',
    expectation: '学生理解数据在父组件，展示在子组件，这是典型的父传子。',
  },
  {
    id: '06',
    title: '课程信息卡',
    points: 'defineProps、多字段 props、父子职责',
    requirement: '父组件准备课程名称、讲师姓名和课时数，通过 props 传给子组件展示。',
    expectation: '学生理解一个子组件可以同时接收多个 props。',
  },
  {
    id: '07',
    title: '搜索栏回传',
    points: 'defineEmits、点击事件、父组件计数',
    requirement: '搜索栏组件把输入的关键词回传给父组件，由父组件决定如何处理搜索结果。',
    expectation: '学生理解子组件通过自定义事件通知父组件动作和数据。',
  },
  {
    id: '08',
    title: '点赞按钮',
    points: 'defineEmits、自定义事件、父组件计数',
    requirement: '点赞按钮做成子组件，点击后通知父组件增加点赞数。',
    expectation: '学生理解子传父最常见的方式就是自定义事件。',
  },
  {
    id: '09',
    title: '课程详情跳转',
    points: 'params、列表到详情、页面切换思路',
    requirement: '点击课程列表项后，带上课程编号和标题，切换到对应详情内容。',
    expectation: '学生理解“当前点击的是谁”必须作为参数传给详情页。',
  },
  {
    id: '10',
    title: '主题色传递',
    points: 'provide、inject、跨级通信',
    requirement: '祖先组件提供主题色或公共提示语，让深层子组件直接获取并展示。',
    expectation: '学生理解 provide/inject 适合跨层级公共数据，而不是替代所有通信方式。',
  },
  {
    id: '11',
    title: '课程展示板',
    points: '组件定义、组件使用、props、emit、列表渲染',
    requirement: '完成课程展示板：父组件统一管理课程数组，搜索栏回传关键词，课程卡片接收 props 展示。',
    expectation: '学生能把组件定义、父传子和子传父组合在同一页面中使用。',
  },
  {
    id: '12',
    title: '通知中心',
    points: 'props、emit、列表渲染、状态更新',
    requirement: '父组件保存通知列表，子组件展示通知，点击按钮后回传给父组件更新状态。',
    expectation: '学生理解 props + emit 是最典型的综合通信方案。',
  },
  {
    id: '13',
    title: '课程详情页',
    points: 'params、provide/inject、综合通信',
    requirement: '完成列表页到详情页的跳转，并在详情页使用祖先组件提供的统一主题信息。',
    expectation: '学生理解同一页面中可以按场景组合多种通信方式。',
  },
]
