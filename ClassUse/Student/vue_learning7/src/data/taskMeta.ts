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
    title: '点餐系统',
    points: 'v-for、@click、computed、列表状态管理、业务主流程',
    requirement: '完成商品展示、加入购物车、数量修改与结算金额统计，先打通“商品列表到购物车”的主流程。',
    expectation: '学生能够围绕业务主线组织页面结构、数组数据和计算结果，建立完整项目开发顺序意识。',
  },
  {
    id: '02',
    title: '奶茶点单系统',
    points: 'v-model、computed、表单联动、结果型数据',
    requirement: '完成饮品、杯型、甜度、加料、数量等输入项绑定，并实时生成订单摘要与最终价格。',
    expectation: '学生能够区分输入项、原始数据和结果项，理解多个输入共同决定一个结果的项目实现方式。',
  },
  {
    id: '03',
    title: '记账系统',
    points: 'v-model、v-for、@click、computed、列表增删改',
    requirement: '完成收支记录录入、记录列表展示、删除操作以及收入、支出、结余统计。',
    expectation: '学生能够理解“输入形成记录，列表产生统计”的业务链条，并在项目中保持数据层次清晰。',
  },
]
