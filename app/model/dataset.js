module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const DatasetSchema = new Schema({
        dataname: {
            type: String,
            required: true
        },
        class: {
            type: String,
        },
        department: {
            type: String,
            required: true
        },
        introduction: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        scene: {
            type: Object,
            required: true
        },
        tags: {
            type: Array,
        },
        status: {
            type: String,
            required: true
        },

    });
    return mongoose.model('Dataset', DatasetSchema, "dataset");
};