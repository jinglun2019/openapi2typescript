const assert = require('assert');
const path = require('path');
const fs = require('fs');

const openAPI = require('../dist/index');

const gen = async () => {
  // await openAPI.generateService({
  //   schemaPath: `${__dirname}/example-files/swagger-get-method-params-convert-obj.json`,
  //   serversPath: './servers',
  // });
  // await openAPI.generateService({
  //   schemaPath: `${__dirname}/example-files/swagger-file-convert.json`,
  //   serversPath: './file-servers',
  // });
  // await openAPI.generateService({
  //   requestLibPath: "import request  from '@/request';",
  //   schemaPath: `${__dirname}/example-files/swagger-custom-hook.json`,
  //   serversPath: './servers',
  //   hook: {
  //     // 自定义类名
  //     customClassName: (tagName) => {
  //       return /[A-Z].+/.exec(tagName);
  //     },
  //     // 自定义函数名
  //     customFunctionName: (data) => {
  //       let funName = data.operationId ? data.operationId : '';
  //       const suffix = 'Using';
  //       if (funName.indexOf(suffix) != -1) {
  //         funName = funName.substring(0, funName.lastIndexOf(suffix));
  //       }
  //       return funName;
  //     },
  //   },
  // });
  // // check 文件生成
  // const fileControllerStr = fs.readFileSync(
  //   path.join(__dirname, 'file-servers/api/fileController.ts'),
  //   'utf8',
  // );
  // assert(fileControllerStr.indexOf('!(item instanceof File)') > 0);
  // assert(fileControllerStr.indexOf(`requestType: 'form',`) > 0);
  // assert(fileControllerStr.indexOf('Content-Type') < 0);
  // await openAPI.generateService({
  //   requestLibPath: "import request  from '@/request';",
  //   // schemaPath: `http://172.16.52.199:32275/dms/v2/api-docs`,
  //   // schemaPath: 'http://172.16.52.61:20005/pmca511/v2/api-docs',
  //   // schemaPath: 'http://81.69.193.138:8080/bsp/v2/api-docs',
  //   // schemaPath: 'http://47.102.152.218:3000/api-docs/json',
  //   schemaPath: 'http://172.16.52.114:8889/bsp/v2/api-docs',
  //   serversPath: './servers',
  //   // mockFolder: './mocks',
  // });
  await openAPI.generateService({
    schemaPath: `${__dirname}/example-files/dorm.json`,
    // schemaPath: 'http://81.69.193.138:8080/bsp/v2/api-docs',
    // schemaPath: 'http://172.16.52.114:8889/bsp/v2/api-docs',
    requestLibPath: "import http  from '@/request'",
    swrLibPath: "import useSWR  from '@/libs/swr'",
    serversPath: './servers',
    swrName: 'data',
    mockFolder: './mocks',
    mockModuleType: 'CJS',
  });
  // await openAPI.generateService({
  //   schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/CA1dOm%2631B/openapi.json',
  //   serversPath: './servers',
  //   mockFolder: './mocks',
  // });
  // await openAPI.generateService({
  //   schemaPath: 'http://petstore.swagger.io/v2/swagger.json',
  //   serversPath: './servers',
  //   mockFolder: './mocks',
  // });
  // await openAPI.generateService({
  //   schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/LyDMjDyIhK/1611471979478-opa.json',
  //   serversPath: './servers',
  //   mockFolder: './mocks',
  // });
  // await openAPI.generateService({
  //   schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/Zd7dLTHUjE/ant-design-pro.json',
  //   serversPath: './servers',
  //   mockFolder: './mocks',
  // });
  // await openAPI.generateService({
  //   schemaPath: `${__dirname}/morse-api.json`,
  //   serversPath: './servers',
  //   mockFolder: './mocks',
  // });
  // await openAPI.generateService({
  //   schemaPath: `${__dirname}/oc-swagger.json`,
  //   serversPath: './servers',
  //   mockFolder: './mocks',
  // });
  // await openAPI.generateService({
  //   schemaPath: `${__dirname}/java-api.json`,
  //   serversPath: './servers',
  //   mockFolder: './mocks',
  // });
};
gen();
