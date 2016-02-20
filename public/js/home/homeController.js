angular.module('gcApp').controller('homeController', function($scope, $rootScope, homeService, $state) {
       $scope.logUserIn = function(user) {
           return homeService.logUserIn(user).then(function(res){
               $rootScope.user = res;
               localStorage.setItem('userData', JSON.stringify(res));
               $rootScope.loggedIn = true;
               $state.go('forum');
           })
       } 
});