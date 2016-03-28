angular.module('gcApp', ['ui.router'])




// UI-ROUTER
.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/js/home/homeTmpl.html',
            controller: 'homeController'
        })
        .state('forum', {
            url: '/forum',
            templateUrl: '/js/forum/forumTmpl.html',
            controller: 'forumController',
        })
        .state('profile', {
            url: '/user/:id',
            templateUrl: '/js/profile/profileTmpl.html',
            controller: 'profileController',
            resolve: {
                profile: function ($stateParams, profileService) {
                    return profileService.getProfileDetails($stateParams.id)
                }
            }
        })
        .state('thread', {
            url: '/forum/thread/:id',
            templateUrl: '/js/thread/threadTmpl.html',
            controller: 'threadController',
            resolve: {
                thread: function($stateParams, threadService) {
                  return threadService.getThread($stateParams.id)
                    
                }
            },
            
            
        })
        
        
    $urlRouterProvider
        .otherwise('/home')

})

