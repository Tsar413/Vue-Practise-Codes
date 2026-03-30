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
    title: '教程展示页',
    points: 'v-for、@click、:class、v-model、computed',
    requirement: '完成左侧分类切换、右侧教程列表展示、搜索关键字筛选和分类高亮。',
    expectation: '点击分类后内容区域同步切换；输入关键字后仅显示匹配教程。',
  },
  {
    id: '02',
    title: '购物车',
    points: 'v-for、:class、@click、computed、watch、localStorage',
    requirement: '完成商品渲染、单项选中、数量加减、删除、全选、统计总价和本地存储。',
    expectation: '商品状态、全选框、已选数量和总价联动更新，刷新页面后数据可恢复。',
  },
  {
    id: '03',
    title: '表情包投票器',
    points: 'v-for、@click、computed',
    requirement: '渲染多个投票对象，点击按钮后对应票数增加，并显示当前最高票对象。',
    expectation: '投票排行榜和最高票结果会随着点击实时变化。',
  },
]
