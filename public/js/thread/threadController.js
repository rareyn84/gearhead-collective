angular.module('gcApp').controller('threadController', function($scope, threadService, $stateParams, thread) {
    
     $scope.thread = thread;
     $scope.threadId = $scope.thread._id;

 
     if (localStorage['userData'] !== undefined){
            $scope.user = JSON.parse(localStorage['userData']);
        }
     
     $scope.getComments = function (threadId) {
         threadService.getComments(threadId).then(function (res) {
             $scope.comments = res.data;
             console.log(res.data);
         })
     }
     
     $scope.getComments();
     
     $scope.pushCommentToThread = function (thread) {
         threadService.pushCommentToThread(thread);
     }
        
     $scope.addComment = function (newComment) {
        threadService.createComment(newComment, $scope.user).then(function (res) {
            $scope.thread.comments.push(res._id);
             console.log($scope.thread);
            $scope.pushCommentToThread($scope.thread);
            $scope.newComment = {};
        })
    }          
   

});