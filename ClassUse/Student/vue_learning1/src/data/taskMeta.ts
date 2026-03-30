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
    title: '计数按钮',
    points: 'ref、插值表达式、v-on',
    requirement: '页面显示“当前点击次数：0”，点击按钮后数字自动加一。',
    expectation: '点击按钮后，页面中的次数依次显示为 1、2、3……',
  },
  {
    id: '02',
    title: '分数累加',
    points: 'ref、插值表达式、v-on',
    requirement: '页面显示当前分数 60，点击“加 5 分”按钮后每次增加 5。',
    expectation: '点击按钮后，页面中的分数按 65、70、75 递增显示。',
  },
  {
    id: '03',
    title: '课程信息',
    points: 'ref、多个数据项、插值表达式',
    requirement: '展示课程名称、讲师、地点等信息，内容由数据驱动输出。',
    expectation: '页面显示课程名称、授课教师和上课教室三项信息。',
  },
  {
    id: '04',
    title: '公告文字',
    points: '插值表达式',
    requirement: '把“本周五下午进行班级卫生检查”作为公告内容，通过数据方式输出。',
    expectation: '页面显示一条公告文字，内容来自脚本中的数据。',
  },
  {
    id: '05',
    title: '高亮文本',
    points: 'v-bind:class',
    requirement: '根据状态决定某段文字是否加上高亮样式。',
    expectation: '切换状态后，文字在普通样式和高亮样式之间变化。',
  },
  {
    id: '06',
    title: '按钮状态',
    points: 'v-bind',
    requirement: '根据状态决定按钮是否可点击，按钮禁用时应有明显表现。',
    expectation: '切换状态后，按钮会在可点击和禁用之间切换。',
  },
  {
    id: '07',
    title: '点击加一',
    points: 'v-on',
    requirement: '点击一次按钮，页面中的数字增加一。',
    expectation: '每次点击按钮后，页面中的数字都会增加 1。',
  },
  {
    id: '08',
    title: '显示标签名',
    points: 'ref、插值表达式、v-on',
    requirement: '页面初始显示“未选择”，点击按钮后显示“Vue 基础班”。',
    expectation: '点击按钮后，页面中的标签名会改成“Vue 基础班”。',
  },
  {
    id: '09',
    title: '是否及格',
    points: 'v-if、v-else',
    requirement: '如果成绩大于等于 60 显示“及格”，否则显示“不及格”。',
    expectation: '切换成绩后，页面会显示“及格”或“不及格”两种结果之一。',
  },
  {
    id: '10',
    title: '面板切换',
    points: 'v-show',
    requirement: '点击按钮切换“课程详情面板”的显示与隐藏。',
    expectation: '点击按钮后，课程详情面板会显示或隐藏。',
  },
  {
    id: '11',
    title: '学生列表',
    points: 'v-for',
    requirement: '把三名学生姓名渲染成列表。',
    expectation: '页面按列表形式显示三名学生的姓名。',
  },
  {
    id: '12',
    title: '课程卡片',
    points: 'v-for、插值表达式、v-bind',
    requirement: '页面显示多门课程，每张卡片包含课程名称、图片和简介。',
    expectation: '页面生成多张课程卡片，每张卡片都显示标题、图片和简介。',
  },
  {
    id: '13',
    title: '通知板',
    points: 'v-for',
    requirement: '页面按列表方式显示多条通知内容。',
    expectation: '页面连续显示多条通知，每条通知都来自数组中的一项。',
  },
  {
    id: '14',
    title: '图片展示',
    points: 'v-bind:src、插值表达式',
    requirement: '根据数据展示课程封面图片和图片说明。',
    expectation: '页面显示图片和对应说明文字，切换数据后图片也会变化。',
  },
  {
    id: '15',
    title: '悬停提示',
    points: 'v-bind:title',
    requirement: '把按钮的悬停提示文字绑定到数据上。',
    expectation: '鼠标移到按钮上时，会显示数据里的提示文字。',
  },
  {
    id: '16',
    title: '按钮文字切换',
    points: 'ref、插值表达式、v-on',
    requirement: '点击按钮后，在“开始学习”和“继续学习”之间切换。',
    expectation: '按钮文本会随着点击在两种文字之间切换。',
  },
  {
    id: '17',
    title: '签到状态',
    points: 'v-if、v-else',
    requirement: '根据签到状态显示“已签到”或“未签到”。',
    expectation: '切换状态后，页面显示对应的签到结果。',
  },
  {
    id: '18',
    title: '教师列表',
    points: 'v-for',
    requirement: '用列表渲染多位教师的姓名和授课方向。',
    expectation: '页面显示多位教师卡片，每项包含姓名和授课方向。',
  },
  {
    id: '19',
    title: '课程分类切换',
    points: 'v-for、v-on、v-bind:class',
    requirement: '点击分类按钮切换当前选中的课程分类。',
    expectation: '当前分类按钮会高亮，页面标题同步显示当前分类名称。',
  },
  {
    id: '20',
    title: '提交状态面板',
    points: 'v-bind、v-show、v-on',
    requirement: '点击提交按钮后显示“作业已提交”提示，并禁用提交按钮。',
    expectation: '提交后按钮变为禁用状态，页面同时显示提交成功提示。',
  },
]
