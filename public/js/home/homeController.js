angular.module('gcApp').controller('homeController', function($scope, $rootScope, authService, $state) {
       $scope.logUserIn = function(user) {
           return authService.login(user).then(function(res){
               $state.go('forum');
           })
       } 
});