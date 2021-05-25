const mongoose = require('mongoose')
const Schema = mongoose.Schema

const likedModel = new Schema({
    id: {
        type: Number,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    likedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    likedPost: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
})

const LikedModel = mongoose.model('LikedModel', likedModel)

module.exports = LikedModel