"use strict";
const Service = require("egg").Service;
class SceneService extends Service {
    // 返回数据库中所有场景
    async all() {
        const { ctx } = this;
        try {
            const results = await ctx.model.Scene.find();
            return results;
        } catch (err) {
            return {
                code: 500,
                msg: JSON.stringify(err),
            };
        }
    }

    // 根据信息查找场景
    async find(params) {
        const { ctx } = this;
        try {
            const results = await ctx.model.Scene.find(params);
            return results;
        } catch (err) {
            return {
                code: 500,
                msg: JSON.stringify(err),
            };
        }
    }

    // 进入场景详情
    async getDetail(params) {
        const { ctx } = this;
        try {
            const results = await ctx.model.Scene.findOne(params);
            return results;
        } catch (err) {
            return {
                code: 500,
                msg: JSON.stringify(err),
            };
        }
    }


    // 添加场景数据
    async create(params) {
        const { ctx } = this;
        try {
            const results = await ctx.model.Scene.create(params);
            return results
        } catch (err) {
            return {
                code: 500,
                msg: JSON.stringify(err),
            };
        }
    }

    // 删除数据
    async delete(params) {
        const { ctx } = this;
        try {
            const results = await ctx.model.Scene.deleteOne({ _id: params._id }, (err) => {
                if (err) {
                    return "删除失败"
                } else {
                    return "删除成功"
                }
            });
            return results
        } catch (err) {
            return {
                code: 500,
                msg: JSON.stringify(err),
            };
        }
    }


    // 修改场景数据
    async update(params) {
        const { ctx } = this;
        try {
            const results = await ctx.model.Scene.findOneAndUpdate({ _id: params._id }, params, { returnNewDocument: true }, (err, data) => {
                if (err) {
                    console.log('数据库发生错误')
                }
                else if (!data) {
                    console.log('未查找到相关数据')
                    console.log(data)
                }
                else {
                    console.log('修改数据成功')
                    console.log(data)
                }
            });
            return results
        } catch (err) {
            return {
                code: 500,
                msg: JSON.stringify(err),
            };
        }
    }

}
module.exports = SceneService;
