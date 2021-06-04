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
    },
<<<<<<< HEAD
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
=======
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // }
>>>>>>> main

})

const Comment = mongoose.model('Comment', commentModel)

module.exports = Comment