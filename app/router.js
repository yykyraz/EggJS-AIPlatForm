/*
 * @Author: yykyraz kk@qq.com
 * @Date: 2023-04-20 18:08:20
 * @LastEditors: yykyraz kk@qq.com
 * @LastEditTime: 2023-04-25 14:12:37
 * @FilePath: \AIplatformEgg\app\router.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 用户
  router.post('/userFind', controller.user.find);
  router.post('/userCreate', controller.user.create);
  router.post('/userDelete', controller.user.delete);
  router.post('/userUpdate', controller.user.update);

  // 场景库
  router.post('/sceneAll', controller.scene.all);
  router.post('/sceneFind', controller.scene.find);
  router.post('/sceneDetail', controller.scene.getDetail);
  router.post('/sceneCreate', controller.scene.create);
  router.post('/sceneDelete', controller.scene.delete);
  router.post('/sceneUpdate', controller.scene.update);

  // 算法
  router.post('/algorithmAll', controller.algorithm.all);
  router.post('/algorithmFind', controller.algorithm.find);
  router.post('/algorithmDetail', controller.algorithm.getDetail);
  router.post('/algorithmCreate', controller.algorithm.create);
  router.post('/algorithmDelete', controller.algorithm.delete);
  router.post('/algorithmUpdate', controller.algorithm.update);

  // 数据集
  router.post('/datasetAll', controller.dataset.all);
  router.post('/datasetFind', controller.dataset.find);
  router.post('/datasetDetail', controller.dataset.getDetail);
  router.post('/datasetCreate', controller.dataset.create);
  router.post('/datasetDelete', controller.dataset.delete);
  router.post('/datasetUpdate', controller.dataset.update);


  // 人才库
  router.post('/talentAll', controller.talent.all);
  router.post('/talentFind', controller.talent.find);
  router.post('/talentDetail', controller.talent.getDetail);
  router.post('/talentCreate', controller.talent.create);
  router.post('/talentDelete', controller.talent.delete);
  router.post('/talentUpdate', controller.talent.update);


};
