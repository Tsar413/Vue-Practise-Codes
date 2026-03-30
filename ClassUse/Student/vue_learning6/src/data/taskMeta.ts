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
    title: '默认插槽信息面板',
    points: '默认插槽、内容分发、固定结构',
    requirement: '制作一个带标题和边框的面板组件，面板中间内容由父组件通过默认插槽决定。',
    expectation: '学生理解“子组件定结构，父组件填内容”是默认插槽最基础的使用方式。',
  },
  {
    id: '02',
    title: '具名插槽卡片布局',
    points: '具名插槽、多区域布局、slot name',
    requirement: '制作一个课程卡片组件，头部、主体、底部三部分都由父组件分别传入。',
    expectation: '学生理解当一个组件有多个可变区域时，应使用具名插槽拆分内容入口。',
  },
  {
    id: '03',
    title: '作用域插槽课程列表',
    points: '作用域插槽、子提供数据、父决定显示',
    requirement: '子组件内部维护课程数组并负责循环，父组件拿到每条课程数据后自定义显示模板。',
    expectation: '学生理解作用域插槽的本质是“子组件暴露数据，父组件决定模板”。',
  },
  {
    id: '04',
    title: '动态组件页签切换',
    points: '动态组件、component is、页签切换',
    requirement: '页面有“课程信息”和“学习记录”两个页签，点击不同按钮时在同一位置切换显示对应组件。',
    expectation: '学生理解动态组件适合多个组件占据同一位置轮流显示的场景。',
  },
  {
    id: '05',
    title: 'KeepAlive 表单缓存',
    points: 'KeepAlive、动态组件、状态保留',
    requirement: '在两个表单面板之间切换时，希望切回来后原来的输入内容仍然保留。',
    expectation: '学生理解 KeepAlive 会缓存组件实例，因此切换回来时状态不会丢失。',
  },
  {
    id: '06',
    title: '生命周期日志面板',
    points: 'onMounted、onUpdated、onUnmounted、日志观察',
    requirement: '要求在组件挂载、更新和销毁时输出对应日志，观察组件完整运行过程。',
    expectation: '学生能够借助生命周期日志建立组件运行的时序感。',
  },
  {
    id: '07',
    title: '缓存组件生命周期',
    points: 'KeepAlive、onActivated、onDeactivated',
    requirement: '在 KeepAlive 包裹下切换组件，观察组件的激活和停用，而不是单纯挂载与卸载。',
    expectation: '学生理解缓存组件切换时会出现 activated 和 deactivated 这类特殊生命周期。',
  },
  {
    id: '08',
    title: '插槽课程卡片综合题',
    points: '默认插槽、具名插槽、组件布局',
    requirement: '完成一个课程卡片组件，包含标题、课程介绍和底部按钮区域，综合使用默认插槽与具名插槽。',
    expectation: '学生能够把插槽基础知识组合到同一个可复用组件中。',
  },
  {
    id: '09',
    title: '动态仪表盘综合题',
    points: '动态组件、KeepAlive、工作台切换',
    requirement: '页面有统计面板、草稿面板两个模块，切换时希望草稿内容保留。',
    expectation: '学生理解动态组件负责切换，KeepAlive 负责保留状态。',
  },
  {
    id: '10',
    title: '学习实验室综合题',
    points: '插槽、动态组件、KeepAlive、生命周期',
    requirement: '完成一个带插槽布局、动态切换、缓存和日志观察的学习实验室页面。',
    expectation: '学生能够把本节四个核心知识点串联在同一个综合页面中实现。',
  },
  {
    id: '11',
    title: '具名插槽对话框',
    points: '具名插槽、标题区、正文区、按钮区',
    requirement: '通过具名插槽自定义标题、正文和按钮区域，完成一个通用对话框组件。',
    expectation: '学生进一步巩固多区域组件结构，理解具名插槽的典型业务场景。',
  },
  {
    id: '12',
    title: '作用域插槽表格',
    points: '作用域插槽、表格行渲染、数据暴露',
    requirement: '子组件内部维护表格数据，父组件通过作用域插槽自定义每一行的显示内容。',
    expectation: '学生进一步理解“子给数据，父定结构”的职责边界。',
  },
  {
    id: '13',
    title: '动态组件步骤切换',
    points: '动态组件、步骤条、切换逻辑',
    requirement: '像步骤条一样切换显示不同组件，在同一位置完成分步骤内容展示。',
    expectation: '学生能够把动态组件应用到步骤式交互场景中。',
  },
]
