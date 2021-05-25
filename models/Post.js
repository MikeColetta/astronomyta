const mongoose = require('mongoose')
const Schema = mongoose.Schema
const CommentModel = require('./Comment')

const postModel = new Schema({
    id: {
        type: Number,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    comments: [CommentModel],
    text: {
        type: String,
    },
    date: {
        type: Date, default: Date.now
    },
    imageLink: {
        type: String,
    },
    videoLink: {
        type: String
    },
    createdDate: {
        type: Date
    },
    description: {
        type: String
    }

})

const PostModel = mongoose.model('postModel', postModel)

module.exports = PostModel