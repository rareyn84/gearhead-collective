angular.module('gcApp').directive('navbar', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/navbarTmpl.html',
    controller: function ($scope, $rootScope, $state) {
        $scope.user = JSON.parse(localStorage['userData']);
        $scope.logOut = function () {
            localStorage.clear();
            console.log(localStorage);
            $rootScope.loggedIn = false;
            $rootScope.user = {};
            $state.go('home');
        }
    }
    }
});
