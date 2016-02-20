angular.module('gcApp').service('forumService', function($http, $q, $rootScope, homeService) {
 
    this.getForumThreads = function () {
        return $http({
            method: 'GET',
            url: '/api/forum'
        }).then(function (res) {
            return res.data;
        });   
    };
    
    this.createThread = function (newThread, user) {      
        newThread.created_by = user._id;
        return $http({
                method: 'POST',
                url: 'api/forum/new',
                data: newThread
            }).then(function (res) {
                   return res.data;
            })
      
    }
    
    this.pushThreadToUser = function (user) {
        return $http({
            method: 'PUT',
            url: 'api/user/update/' + user._id,
            data: user
        }).then(function (res) {
            return res.data;
        })
    }
   
});

