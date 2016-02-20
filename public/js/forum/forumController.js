angular.module('gcApp').controller('forumController', function($scope, $state, $stateParams, $rootScope, homeService, forumService) {

    $scope.getThreads = function() {
        forumService.getForumThreads().then(function(res) {
            $scope.threads = res;
        });
    }
    
    $scope.getThreads();
    
    $scope.uid = homeService.uid;
    
    $scope.pushThreadToUser = function(user) {
       forumService.pushThreadToUser(user);
   }
    
    $scope.createThread = function(newThread) {
            forumService.createThread(newThread, $rootScope.user).then(function(res){
                $rootScope.user.threads.push(res._id);
                $scope.pushThreadToUser($rootScope.user);
                $scope.newThread = {}; 
                $scope.getThreads();
            })
        }
        
   
    
    $scope.createThreadToggle = true;
   
    $scope.advancedSearch = true;
    
});
