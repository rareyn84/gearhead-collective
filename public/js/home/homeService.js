angular.module('gcApp').factory('homeService', function($http) {
    var user = {}
    
    var createUser =function(newUser) {
        $http({
                method: 'POST',
                url: '/api/user/signup',
                data: newUser
            }).then(function(res){
              
            });
     
    }
    
    var logUserIn = function(user) {
        return $http({
            method: 'POST',
            url: '/api/user/login',
            data: user
        }).then(function(res) {
            return res.data;
        });
    }
    
    return {
        createUser: createUser,
        logUserIn: logUserIn
    }
})