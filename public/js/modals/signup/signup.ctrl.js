angular.module("gcApp").controller("signUpCtrl", function($scope, close, authService, modalService) {
  $scope.close = close;





  $scope.signUp = function (user) {
      authService.signUp(user).then(function (response) {
           if (!response.data) {
               modalService.alert(response);
           }
           $scope.close();
      });
  };

});
