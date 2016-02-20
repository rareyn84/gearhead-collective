var User = require('../models/UserModel.js');

module.exports = {
    //Authentication
    createUser: function (req, res) {
        var user = new User(req.body);
        console.log(req.body);
        user.save(function(err, saved) {
            if (err) {
                return res.status(500).send(err);
            }
            res.send('User registered successfully');
        })
    }, 
    loginUser: function(req, res){
        User.find(req.body, function(err, result) {
            if(err) {
                return res.status(500).send(err);
            }
            if (result && result.length === 1) {
                var userData = result[0];
                res.send(userData)
            }
        })
    },
    updateUser: function(req, res) {
        User.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
            if (err) return res.err(500).send(err);
            res.send(result);
        })
    },
    getProfile: function(req, res) {
       User.findById(req.params.id)
        .populate('threads')
        .exec(function (err, result) {
            if(err) console.log(err);
            res.send(result);
        })
    } 
     
}