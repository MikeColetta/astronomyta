const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./users')

const commentModel = new Schema({
    id: {
        type: Number,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    user: User,
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date, default: Date.now
    }

})

const CommentModel = mongoose.model('CommentModel', commentModel)

module.exports = CommentModel