/*
 * @Author: yykyraz kk@qq.com
 * @Date: 2023-04-20 18:53:51
 * @LastEditors: yykyraz kk@qq.com
 * @LastEditTime: 2023-04-20 19:09:10
 * @FilePath: \AIplatformEgg\test\app\controller\yy.test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/app/controller/yy.test.js', () => {
  it('yy index', () => {
    return app.httpRequest()
      .get('/yyy')
      .expect(200)
      .expect('<h2>hiehie</h2>');
  });

  it('yy getGirls', async () => {
    return app.httpRequest()
      .get('/girl')
      .expect(200)
      .expect('<h1>yes</h1>');
  });
});
