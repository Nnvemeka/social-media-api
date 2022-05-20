const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    description: {
        type: String,
        max: 100
    },
    image: {
        type: String
    },
    likes: {
        type: Array,
        default: []
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Post', PostSchema)