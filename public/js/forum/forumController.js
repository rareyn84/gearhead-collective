angular.module('gcApp').controller('forumController', function($scope, forumService) {

  $scope.menuItems = forumService.navMenu;

  $scope.threadData = forumService.forumPostData;

})
