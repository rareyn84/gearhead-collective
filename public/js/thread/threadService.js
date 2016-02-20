angular.module('gcApp').service('threadService', function($http, $q) {
    
    this.getThread = function(id) {
        return $http({
            method: 'GET',
            url: 'api/forum/thread/' + id,
        }).then(function(res) {
            return res.data;
        })
    }
    
    this.createComment = function (newComment, user) {
        newComment.user = user._id;
        console.log(newComment);
        return $http ({
            method: 'POST',
            url: '/api/comment/new',
            data: newComment
        }).then(function (res) {
            return res.data
            
        })
    }
    
    this.pushCommentToThread = function (thread) {
        return $http ({
            method: 'PUT',
            url: '/api/thread/update/' + thread._id,
            data: thread
        }).then(function (res) {
            return res.data;
        })
    }
    
   
});



