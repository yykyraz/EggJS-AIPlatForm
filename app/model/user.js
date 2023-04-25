/*
 * @Author: yykyraz kk@qq.com
 * @Date: 2023-04-20 20:55:36
 * @LastEditors: yykyraz kk@qq.com
 * @LastEditTime: 2023-04-22 19:20:12
 * @FilePath: \AIplatformEgg\app\model\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const UserSchema = new Schema({
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        }
    });
    return mongoose.model('User', UserSchema, "user");
};