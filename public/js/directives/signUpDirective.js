angular.module('gcApp').directive('signUp', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/signUpTmpl.html',
    controller: function($scope, $state, $http, authService) {
          $scope.createUser = function(newUser){
           return authService.signUp(newUser);
          }
    }
    }
});
