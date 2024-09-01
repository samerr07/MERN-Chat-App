const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    message:{
        type:String,
        required: false
    },
    img: {
        type: String,
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},{timestamps:true})


exports.Message = mongoose.model('Message',messageSchema);