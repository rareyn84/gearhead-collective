var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var User = new Schema({
    email: {
        type: String,
        required: true,
        unique: true     
    },
    password: {
        type: String,
        required: true,     
    },
    
    first_name: {
        type: String,
        required: false,     
    },
    last_name: {
        type: String,
        required: false
    },
    city: {
       type: String,
        required: false 
    },
    state: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    threads: [{
        type: Schema.Types.ObjectId,
        ref: 'Thread'
    }]
});

module.exports = mongoose.model('User', User);