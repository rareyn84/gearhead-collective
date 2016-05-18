var Thread = require('../models/ThreadModel.js');

module.exports = {
    createThread: function (req, res) {
        var newThread = new Thread(req.body);
        newThread.save(function(err, result) {
            if (err) {
               return res.status(500).send(err); 
            } else {

                
            }
            res.send(result);
            console.log(result);    
        });
        
    }, 
    updateThread: function(req, res) {
        Thread.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
            if (err) return res.err(500).send(err);
            res.send(result);
        });
    },
    getThreads: function(req, res) {
        Thread.find(req.query)
        .populate('created_by')
        .exec(function(err, result) {
            if(err) return res.err(500).send(err);
            res.send(result);
        });
    },
    getThread: function(req,res) {
        Thread.findById(req.params.id)
        .populate('comments created_by')
        .exec(function (err, result) {
            if(err) console.log(err);
            res.send(result);
        }); 
    },
    deleteThreads: function(req, res) {
        Thread.splice(req.params.id, 1);
        res.status(204).send();
    }
}