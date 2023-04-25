/*
 * @Author: yykyraz kk@qq.com
 * @Date: 2023-04-25 19:45:09
 * @LastEditors: yykyraz kk@qq.com
 * @LastEditTime: 2023-04-25 19:54:31
 * @FilePath: \AIplatformEgg\app\controller\dataset.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use strict";

const Controller = require("egg").Controller;
class DataSetController extends Controller {
    // 返回所有
    async all() {
        const { ctx } = this;
        const result = await ctx.service.dataset.all();
        ctx.body = result;
    }

    // 查找
    async find() {
        const { ctx } = this;
        const result = await ctx.service.dataset.find(ctx.request.body);
        ctx.body = result;
    }

    // 详情
    async getDetail() {
        const { ctx } = this;
        const result = await ctx.service.dataset.getDetail(ctx.request.body);
        ctx.body = result;
    }


    // 添加
    async create() {
        const { ctx } = this
        const res = await ctx.service.dataset.create(ctx.request.body);
        ctx.body = res
    }

    // 删除
    async delete() {
        const { ctx } = this
        const res = await ctx.service.dataset.delete(ctx.request.body);
        ctx.body = res
    }

    // 修改
    async update() {
        const { ctx } = this;
        const res = await ctx.service.dataset.update(ctx.request.body);
        ctx.body = res
    }
}

module.exports = DataSetController