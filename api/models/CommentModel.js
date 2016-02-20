var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = './UserModel'
var Comment = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'UserSchema',
        required: true
    },
    comment_text:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Comment', Comment)