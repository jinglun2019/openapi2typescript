## 简介

本项目基于@umijs/openapi 改造，如您不需要这些修改的功能，建议使用[官方原版](https://github.com/chenshuai2144/openapi2typescript)

## 修改

1. 修改 api 模板(对只有一种入参的情况简化显示)
2. 新增 swr 模板(配合 swr.js 库)
3. mock 生成 index 文件方便导出，添加 CJS 和 ES 两种模块风格;schema 中 response.content['application/json']放宽到 response.content[*/*]
4. 新增一些自定义 mock 规则

## 参数
|  属性   | 必填  | 备注 | 类型 |
|  ----  | ----  |  ----  |  ----  |
| requestLibPath  | 否 | 自定义请求方法路径 | string |
| requestImportStatement  | 否 | 自定义请求方法表达式 | string |
| apiPrefix  | 否 | api 的前缀 | string |
| serversPath  | 否 | 生成的文件夹的路径 | string |
| schemaPath  | 否 | openAPI 3.0 的地址 | string |
| projectName  | 否 | 项目名称 | string |
| namespace  | 否 | 命名空间名称 | string |
| mockFolder  | 否 | mock目录 | string |

## 新增如下配置项
|  属性   | 必填  | 备注 | 类型 |
|  ----  | ----  |  ----  |  ----  |
| swrLibPath  | 否 | swr库导入的路径 | string |
| swrImportStatement  | 否 | 自定义swr表达式 | string |
| swrName  | 否 | swr生成的文件夹名 | string |
| mockModuleType  | 否 | 用于生成 mock文件的module风格，默认 ES,  | 'CJS' | 'ES' |

## 示例
```ts
await openAPI.generateService({
    schemaPath: `${__dirname}/example-files/dorm.json`,
    requestLibPath: "import http  from '@/request'",
    swrLibPath: "import useSWR  from '@/libs/swr'",
    serversPath: './servers',
    swrName: 'data',
    mockFolder: './mocks',
    mockModuleType: 'CJS',
});
```