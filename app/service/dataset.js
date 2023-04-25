"use strict";
const Service = require("egg").Service;
class DataSetService extends Service {
    // 返回数据库中所有数据集
    async all() {
        const { ctx } = this;
        try {
            const results = await ctx.model.Dataset.find();
            return results;
        } catch (err) {
            return {
                code: 500, 
                msg: JSON.stringify(err),
            };
        }
    }

    // 根据信息查找数据集
    async find(params) {
        const { ctx } = this;
        try {
            const results = await ctx.model.Dataset.find(params);
            return results;
        } catch (err) {
            return {
                code: 500,
                msg: JSON.stringify(err),
            };
        }
    }

    // 进入数据集详情
    async getDetail(params) {
        const { ctx } = this;
        try {
            const results = await ctx.model.Dataset.findOne(params);
            return results;
        } catch (err) {
            return {
                code: 500,
                msg: JSON.stringify(err),
            };
        }
    }


    // 添加数据集数据
    async create(params) {
        const { ctx } = this;
        try {
            const results = await ctx.model.Dataset.create(params);
            return results
        } catch (err) {
            return {
                code: 500,
                msg: JSON.stringify(err),
            };
        }
    }

    // 删除数据集数据
    async delete(params) {
        const { ctx } = this;
        try {
            const results = await ctx.model.Dataset.deleteOne({ _id: params._id }, (err) => {
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


    // 修改数据集数据
    async update(params) {
        const { ctx } = this;
        try {
            const results = await ctx.model.Dataset.findOneAndUpdate({ _id: params._id }, params, { returnNewDocument: true }, (err, data) => {
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
module.exports = DataSetService;
