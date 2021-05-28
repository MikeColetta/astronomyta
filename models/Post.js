const mongoose = require('mongoose')
const Schema = mongoose.Schema
const CommentModel = require('./Comment')

const postSchema = new Schema({
    id: {
        type: Number,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    comments: [CommentModel],
    title: {
        type: String,
    },
    date: {
        type: String
    },
    imageLink: {
        type: String,
    },
    videoLink: {
        type: String
    },
    createdDate: {
        type: Date, default: Date.now
    },
    description: {
        type: String
    }

})

const Post = mongoose.model('Post', postSchema)

module.exports = Post