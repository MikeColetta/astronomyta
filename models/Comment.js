const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentModel = new Schema({
    id: {
        type: Number,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date, default: Date.now
    }

})

const Comment = mongoose.model('Comment', commentModel)

module.exports = Comment