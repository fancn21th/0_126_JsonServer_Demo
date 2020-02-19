# 创建一个查询页面

## 工程

- 0_125_Umi (\* 开发工程)

  - pro-table 2.0

- 0_126_Antd_Pro
  - pro-table 1.x

## 开发流程

- 期待

  - 通过命令
    - 只对 0_126_Antd_Pro 有效
    - 不可行

- 混合

  - 自动

    - 用 0_126_Antd_Pro 来查看 新增一个模版(页面) 需要添加什么文件
    - `npx umi block add https://github.com/ant-design/pro-blocks/tree/master/ListTableList --js`

  - 手动
    - 在 0_125_Umi 手动增加文件
      - 对比 0_126_Antd_Pro 与 0_125_Umi 的 complete-blocks

## 规范

- 路由
- 组件名
- 代码规范(一致, 为重构做准备)
- 分支
