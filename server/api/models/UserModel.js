var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var userSchema = mongoose.Schema({
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Thread'
    }]
});

userSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) return next();
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;
  return next(null, user);
});

userSchema.methods.verifyPassword = function(reqBodyPassword) {
  var user = this;
  return bcrypt.compareSync(reqBodyPassword, user.password);
};
module.exports = mongoose.model('User', userSchema);