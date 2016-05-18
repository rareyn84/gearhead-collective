var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Thread = new Schema({
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
       type: String,
       required: true
    },
    vehicle_year: {
        type: Number,
        min: 4,
    },
    vehicle_make: {
        type: String,
        required: true
    },
    vehicle_model: {
        type: String,
        required: true
    },
    thread_text: {
        type: String,
        required: true,
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
})

module.exports = mongoose.model('Thread', Thread);