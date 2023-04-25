"use strict";

const Controller = require("egg").Controller;
class TalentController extends Controller {
    // 返回所有
    async all() {
        const { ctx } = this;
        const result = await ctx.service.talent.all();
        ctx.body = result;
    }

    // 查找
    async find() {
        const { ctx } = this;
        const result = await ctx.service.talent.find(ctx.request.body);
        ctx.body = result;
    }

    // 详情
    async getDetail() {
        const { ctx } = this;
        const result = await ctx.service.talent.getDetail(ctx.request.body);
        ctx.body = result;
    }


    // 添加
    async create() {
        const { ctx } = this
        const res = await ctx.service.talent.create(ctx.request.body);
        ctx.body = res
    }

    // 删除
    async delete() {
        const { ctx } = this
        const res = await ctx.service.talent.delete(ctx.request.body);
        ctx.body = res
    }

    // 修改
    async update() {
        const { ctx } = this;
        const res = await ctx.service.talent.update(ctx.request.body);
        ctx.body = res
    }
}

module.exports = TalentController