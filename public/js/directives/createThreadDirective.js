angular.module('gcApp').directive('createThread', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/createThreadTmpl.html',
    controller: 'forumController'
    }
});