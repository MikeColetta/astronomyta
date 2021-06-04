const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Comment = require('./Comment')

const postSchema = new Schema({
    id: {
        type: Number,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
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
    },
    category: {
        type: String
    },
    likes: {
        type: Number,
        default: 1
    },
    comments: [Comment.schema]
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post