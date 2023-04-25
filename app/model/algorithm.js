/*
 * @Author: yykyraz kk@qq.com
 * @Date: 2023-04-25 14:02:07
 * @LastEditors: yykyraz kk@qq.com
 * @LastEditTime: 2023-04-25 19:41:15
 * @FilePath: \AIplatformEgg\app\model\algorithm.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const AlgorithmSchema = new Schema({
        algorithmname: {
            type: String,
            required: true,
        },
        class: {
            type: String,
            required: true,
        },
        department: {
            type: String,
            required: true,
        },
        information: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        scene: {
            type: Object,
        },
        tags: {
            type: Array,
        },
        status: {
            type: String,
            required: true
        },

    });
    return mongoose.model('Algorithm', AlgorithmSchema, "algorithm");
};