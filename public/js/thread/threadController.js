angular.module('gcApp').controller('threadController', function($scope, threadService, $stateParams, thread) {
    
     $scope.thread = thread;
 
     if (localStorage['userData'] !== undefined){
            $scope.user = JSON.parse(localStorage['userData']);
        }
     
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