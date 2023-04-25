/*
 * @Author: yykyraz kk@qq.com
 * @Date: 2023-04-20 18:08:20
 * @LastEditors: yykyraz kk@qq.com
 * @LastEditTime: 2023-04-23 10:25:31
 * @FilePath: \AIplatformEgg\config\config.default.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1681985237062_6665';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // CSRF enable false
  config.security = {
    csrf: {
      enable: false,
    }
  };

  // MongoDB
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1:27017/AIPlatForm',
      options: {},
    }
  };

  //配置插件的功能，配置插件的功能必须写在声明的config对象下方，是const声明的在声明前操作会报错  
  config.cors = {
    //允许跨域的网址，*表示所有网址都可以跨域请求文件资源，也可以指定域名
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }


  return {
    ...config,
    ...userConfig,
  };
};
