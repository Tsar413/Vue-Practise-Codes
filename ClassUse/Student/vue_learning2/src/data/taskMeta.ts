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
    title: '昵称回显',
    points: 'v-model、插值表达式',
    requirement: '输入昵称后，页面实时显示“欢迎你，xxx”。',
    expectation: '输入框内容变化时，欢迎语同步变化。',
  },
  {
    id: '02',
    title: '课程报名',
    points: 'v-model、:disabled、条件渲染',
    requirement: '勾选“我已阅读协议”后，报名按钮才可用。',
    expectation: '未勾选时按钮禁用，勾选后可报名。',
  },
  {
    id: '03',
    title: '标签切换',
    points: 'v-model、动态类名',
    requirement: '切换当前标签时，对应标签按钮高亮。',
    expectation: '当前选中的标签样式明显不同。',
  },
  {
    id: '04',
    title: '购物车结算',
    points: 'v-model、computed、v-for',
    requirement: '根据商品数量自动统计总件数和总价。',
    expectation: '修改数量后，统计结果立即更新。',
  },
  {
    id: '05',
    title: '温度顾问',
    points: 'v-model、computed、条件判断',
    requirement: '输入温度后显示对应穿衣建议。',
    expectation: '不同温度区间显示不同提示文本。',
  },
  {
    id: '06',
    title: '搜索提示',
    points: 'v-model、computed',
    requirement: '输入关键字时，显示“正在搜索...”或“请输入关键字”。',
    expectation: '根据输入内容动态反馈搜索状态。',
  },
  {
    id: '07',
    title: '排课筛选',
    points: 'v-model、computed、v-for',
    requirement: '输入课程关键字后，只显示匹配的课程。',
    expectation: '课程列表会根据关键字过滤。',
  },
  {
    id: '08',
    title: '草稿助手',
    points: 'v-model、computed',
    requirement: '输入草稿后，同时显示预览和字数。',
    expectation: '文本变化时，预览内容和字数同步变化。',
  },
  {
    id: '09',
    title: '课程面板',
    points: 'v-model、computed、v-for',
    requirement: '根据分类和关键字，筛选课程卡片。',
    expectation: '多条件变化时，筛选结果实时更新。',
  },
  {
    id: '10',
    title: '报名管理器',
    points: 'v-model、computed、条件显示',
    requirement: '根据姓名、课程和协议状态生成报名提示。',
    expectation: '表单状态不同，提示文本和颜色同步变化。',
  },
  {
    id: '11',
    title: '通知中心',
    points: 'v-model、computed、v-for',
    requirement: '按通知类型和关键字筛选通知列表。',
    expectation: '筛选后的通知数量和列表内容一起更新。',
  },
  {
    id: '12',
    title: '学习计划表',
    points: 'v-model、computed、v-for、条件渲染',
    requirement: '根据分类与状态筛选计划，并统计完成情况。',
    expectation: '筛选列表、已完成数和未完成数联动更新。',
  },
  {
    id: '13',
    title: '机房预约',
    points: 'v-model、computed、条件渲染',
    requirement: '根据姓名、时段和是否携带设备，生成预约状态。',
    expectation: '输入项变化时，预约提示实时更新。',
  },
  {
    id: '14',
    title: '技能评级器',
    points: 'v-model、computed、动态类名',
    requirement: '输入练习得分后，自动显示技能等级和样式。',
    expectation: '不同分数区间显示不同等级与颜色。',
  },
  {
    id: '15',
    title: '值班安排表',
    points: 'v-model、computed、v-for',
    requirement: '根据星期和关键字筛选值班安排列表。',
    expectation: '筛选条件变化时，安排列表同步刷新。',
  },
]
