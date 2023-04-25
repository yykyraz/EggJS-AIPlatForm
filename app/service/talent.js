/*
 * @Author: yykyraz kk@qq.com
 * @Date: 2023-04-23 20:09:05
 * @LastEditors: yykyraz kk@qq.com
 * @LastEditTime: 2023-04-24 11:00:45
 * @FilePath: \AIplatformEgg\app\service\talent.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use strict";
const Service = require("egg").Service;
class TalentService extends Service {
    // 返回数据库中所有人才
    async all() {
        const { ctx } = this;
        try {
            const results = await ctx.model.Talent.find();
            return results;
        } catch (err) {
            return {
                code: 500,
                msg: JSON.stringify(err),
            };
        }
    }

    // 根据信息查找人才
    async find(params) {
        const { ctx } = this;
        try {
            const results = await ctx.model.Talent.find(params);
            return results;
        } catch (err) {
            return {
                code: 500,
                msg: JSON.stringify(err),
            };
        }
    }

    // 进入人才详情
    async getDetail(params) {
        const { ctx } = this;
        try {
            const results = await ctx.model.Talent.findOne(params);
            return results;
        } catch (err) {
            return {
                code: 500,
                msg: JSON.stringify(err),
            };
        }
    } 


    // 添加人才数据
    async create(params) {
        const { ctx } = this;
        try {
            const results = await ctx.model.Talent.create(params);
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
            const results = await ctx.model.Talent.deleteOne({ _id: params._id }, (err) => {
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


    // 修改人才数据
    async update(params) {
        const { ctx } = this;
        try {
            const results = await ctx.model.Talent.findOneAndUpdate({ _id: params._id }, params, { returnNewDocument: true }, (err, data) => {
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
module.exports = TalentService;
