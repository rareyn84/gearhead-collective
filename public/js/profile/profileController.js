angular.module('gcApp').controller('profileController', function($scope, profileService, $stateParams, profile) {
 
        if (localStorage['userData'] !== undefined){
            $scope.user = JSON.parse(localStorage['userData']);
        }
            
       $scope.profile = profile;
});