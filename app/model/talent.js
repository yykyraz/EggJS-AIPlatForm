/*
 * @Author: yykyraz kk@qq.com
 * @Date: 2023-04-23 20:06:15
 * @LastEditors: yykyraz kk@qq.com
 * @LastEditTime: 2023-04-23 21:20:08
 * @FilePath: \AIplatformEgg\app\model\talent.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const TalentSchema = new Schema({
        name: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        jobNum: {
            type: String,
            required: true,
        },
        department: {
            type: String,
            required: true,
        },
        office: {
            type: String,
            required: true,
        },
        team: {
            type: String,
            required: true,
        },
        position: {
            type: String,
            required: true,
        },
        contactInfo: {
            type: String,
        },
        honor: {
            type: String,
        },
        reserchField: {
            type: String,
            required: true,
        },
    });
    return mongoose.model('Talent', TalentSchema, "talent");
};