"use strict";

const Controller = require("egg").Controller;
class SceneController extends Controller {
    // 返回所有
    async all() {
        const { ctx } = this;
        const result = await ctx.service.scene.all();
        ctx.body = result;
    }

    // 查找
    async find() {
        const { ctx } = this;
        const result = await ctx.service.scene.find(ctx.request.body);
        ctx.body = result;
    }

    // 详情
    async getDetail() {
        const { ctx } = this;
        const result = await ctx.service.scene.getDetail(ctx.request.body);
        ctx.body = result;
    }


    // 添加
    async create() {
        const { ctx } = this
        const res = await ctx.service.scene.create(ctx.request.body);
        ctx.body = res
    }

    // 删除
    async delete() {
        const { ctx } = this
        const res = await ctx.service.scene.delete(ctx.request.body);
        ctx.body = res
    }

    // 修改
    async update() {
        const { ctx } = this;
        const res = await ctx.service.scene.update(ctx.request.body);
        ctx.body = res
    }
}

module.exports = SceneController