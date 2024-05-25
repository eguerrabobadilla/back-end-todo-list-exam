const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');


const TaskScheme = new mongoose.Schema(
    {
        title: {
            type: String
        },
        description: {
            type: String,
        },
        isCompleted: {
            type: Boolean,
        },
    },
    {
        versionKey: false,
        timestamps: true
    }
)

TaskScheme.plugin(mongoosePaginate)

module.exports = mongoose.model('tasks', TaskScheme)