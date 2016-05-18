var Comment = require('../models/CommentModel.js');

module.exports = {
    getComments: function (req, res) {
        Comment.findById(req.query)
        .populate('created_by')
        .exec(function (err, result) {
            if (err) console.log(err);
            res.send(result);
        })
    },
    createComment: function (req, res) {
        var newComment = new Comment(req.body);
        console.log(newComment);
        newComment.save(function(err, result) {
            if(err) return res.status(500).send(err);
            res.send(result);
            console.log(result)
        })
    }
}