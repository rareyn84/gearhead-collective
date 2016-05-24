angular.module('gcApp').controller('homeController', function($scope, $rootScope, authService, $state, ModalService) {
    
    $scope.openSignUpModal = function () {
        ModalService.showModal({
            templateUrl: "./js/modals/signup/signup.ctrl.html",
            controller: "signUpCtrl"
        }).then(function (modal) {
            modal.close.then(function (then) {
            });
        });
    };
    
    $scope.logUserIn = function(user) {
        return authService.login(user).then(function(res){
            $state.go('forum');
        })
    } 
});