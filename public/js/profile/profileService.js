angular.module('gcApp').service('profileService', function($http, $rootScope, $stateParams) {
    this.getProfileDetails = function (id) {
        return $http ({
            method: 'GET',
            url: 'api/user/' + id
        }).then(function (res) {
            return res.data;
        })
    }
    
});
