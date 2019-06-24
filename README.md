# egg-alicloud-open-api

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-alicloud-open-api.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-alicloud-open-api
[travis-image]: https://img.shields.io/travis/eggjs/egg-alicloud-open-api.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-alicloud-open-api
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-alicloud-open-api.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-alicloud-open-api?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-alicloud-open-api.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-alicloud-open-api
[snyk-image]: https://snyk.io/test/npm/egg-alicloud-open-api/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-alicloud-open-api
[download-image]: https://img.shields.io/npm/dm/egg-alicloud-open-api.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-alicloud-open-api

[AliCloud OpenAPI](https://github.com/aliyun/openapi-core-nodejs-sdk) plugin for egg framework

## Install

```bash
$ npm i egg-alicloud-open-api --save
```

## Usage

### Enable the plugin

Change `${app_root}/config/plugin.js` to enable AliCloud plugin:

```js
exports.aliCloud = {
  enable: true,
  package: 'egg-alicloud-open-api',
};
```

### Configuration

Configure information in ${app_root}/config/config.{env}.js:

```js
// ${app_root}/config/config.${env}.js
config.aliCloud = {
  client: {
    clientType: 'RPC',  // RPC or ROA, default RPC
    accessKeyId: '<accessKeyId>',
    accessKeySecret: '<accessKeySecret>',
    endpoint: '<endpoint>',
    apiVersion: '<apiVersion>'
  }
};
```

* The `clientType` option is for creating `RPC` style client or `ROA` style client, default `ROA` style client.
* [More options](https://github.com/aliyun/openapi-core-nodejs-sdk#usage)

#### Call api

```js
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // call SendSms api
    const res = await ctx.aliCloud.request('SendSms', {
      PhoneNumbers: '138xxxxxxx',
      SignName: 'xxx',
      TemplateCode: 'xxx',
      TemplateParam: JSON.stringify({ code: 123456 })
    });
    ctx.body = res;
  }
}

module.exports = HomeController;
```

## License

[MIT](LICENSE)