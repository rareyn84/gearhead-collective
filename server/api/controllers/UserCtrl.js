var User = require('../models/UserModel.js');

module.exports = {
    //Authentication
    createUser: function (req, res) {
        User.create(req.body, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
            result.password = null;
            res.status(200).send(result);
          }
        });
    },
    
    loginUser: function (req, res) {
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
    
    me: function (req, res) {
      if (!req.user) {
        res.status(500).send('current user not defined');
      }
      req.user.password = null;
      res.status(200).send(req.user);
    },
    
    updateUser: function(req, res) {
        User.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
            if (err) return res.err(500).send(err);
            res.send(result);
        })
    },
    
    readProfile: function(req, res) {
       User.findById(req.params.id)
        .populate('threads')
        .exec(function (err, result) {
            if(err) console.log(err);
            res.send(result);
        })
    } 
     
}