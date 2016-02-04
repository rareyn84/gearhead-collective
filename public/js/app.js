angular.module('gcApp', ['ui.router'])

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
        controller: 'forumController'
      })
      .state('profile', {
        url: '/profile',
        templateUrl: '/js/profile/profileTmpl.html',
        controller: 'profileController'
      })


  })
