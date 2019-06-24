'use strict';
const PopCore = require('@alicloud/pop-core').RPCClient;

module.exports = app => {
  app.addSingleton('aliCloud', create);
};

function create(config, app) {
  const logger = app.coreLogger;
  const { type, ...restProps } = config;
  let client;

  logger.info('[ali-cloud] instance begin init');

  if (type === 'ROA') {
    client = new PopCore.ROAClient(restProps);
  } else {
    client = new PopCore.RPCClient(restProps);
  }

  logger.info('[ali-cloud] instance end init');

  return client;
}
