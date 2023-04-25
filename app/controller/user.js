/*
 * @Author: yykyraz kk@qq.com
 * @Date: 2023-04-22 19:21:51
 * @LastEditors: yykyraz kk@qq.com
 * @LastEditTime: 2023-04-23 13:22:05
 * @FilePath: \AIplatformEgg\app\controller\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use strict";

const Controller = require("egg").Controller;
class UserController extends Controller {
    // 查找
    async find() {
        const { ctx } = this;
        const result = await ctx.service.user.find(ctx.request.body);
        console.log(result);
        ctx.body = result;
    }

    // 添加
    async create() {
        const { ctx } = this
        const res = await ctx.service.user.create(ctx.request.body);
        ctx.body = res
    }

    // 删除
    async delete() {
        const { ctx } = this
        const res = await ctx.service.user.delete(ctx.request.body);
        ctx.body = res
    }

    // 修改
    async update() {
        const { ctx } = this;
        const res = await ctx.service.user.update(ctx.request.body);
        ctx.body = res
    }
}

module.exports = UserController