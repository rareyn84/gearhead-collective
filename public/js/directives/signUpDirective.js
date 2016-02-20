angular.module('gcApp').directive('signUp', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/signUpTmpl.html',
    controller: function($scope, $state, $http, homeService) {
          $scope.createUser = function(newUser){
           return homeService.createUser(newUser);
          }
    }
    }
});
