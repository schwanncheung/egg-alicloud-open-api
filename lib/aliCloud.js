'use strict';

const PopCore = require('@alicloud/pop-core');

module.exports = app => {
  app.addSingleton('aliCloud', createClient);
};

function createClient(config, app) {
  const logger = app.coreLogger;
  const { clientType, ...restProps } = config;
  let client;

  logger.info('[ali-cloud] instance begin init');

  if (clientType === 'ROA') {
    client = new PopCore.ROAClient(restProps);
  } else {
    client = new PopCore.RPCClient(restProps);
  }

  logger.info('[ali-cloud] instance end init');

  return client;
}
