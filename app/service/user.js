/*
 * @Author: yykyraz kk@qq.com
 * @Date: 2023-04-22 19:21:05
 * @LastEditors: yykyraz kk@qq.com
 * @LastEditTime: 2023-04-23 10:58:17
 * @FilePath: \AIplatformEgg\app\service\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use strict";
const Service = require("egg").Service;
class UserService extends Service {
    // 根据名字查找用户
    async find(params) {
        const { ctx } = this;
        try {
            const results = await ctx.model.User.findOne({ name: params.name });
            console.log(results);
            return results;
        } catch (err) {
            return {
                code: 500,
                msg: JSON.stringify(err),
            };
        }
    }

    // 添加用户数据
    async create(params) {
        const { ctx } = this;
        try {
            const results = await ctx.model.User.create(params);
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
            const results = await ctx.model.User.deleteOne({ _id: params._id }, (err) => {
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


    // 修改用户数据
    async update(params) {
        const { ctx } = this;
        try {
            const results = await ctx.model.User.findOneAndUpdate({ _id: params._id }, params, { returnNewDocument: true }, (err, data) => {
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
            console.log(results);
            return results
        } catch (err) {
            return {
                code: 500,
                msg: JSON.stringify(err),
            };
        }
    }

}
module.exports = UserService;
