/*
 * @Author: yykyraz kk@qq.com
 * @Date: 2023-04-24 12:54:52
 * @LastEditors: yykyraz kk@qq.com
 * @LastEditTime: 2023-04-24 16:29:59
 * @FilePath: \AIplatformEgg\app\model\scene.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const SceneSchema = new Schema({
        name: {
            type: String,
            required: true,
        },
        department: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        relPerson: {
            type: String,
        },
        tags: {
            type: Array,
        },
        techtag: {
            type: Array,
        },

    });
    return mongoose.model('Scene', SceneSchema, "scene");
};