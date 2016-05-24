angular.module("gcApp").service("modalService", function(ModalService, $q) {

  this.alert = function(input) {
    var defered = $q.defer();
    ModalService.showModal({
      templateUrl: "./app/modals/alert/alertTmpl.html",
      controller: 'alertCtrl',
      inputs: {text: input}
    }).then(function(modal) {
      modal.close.then(function(then) {
        defered.resolve(then);
      });
    });
    return defered.promise;
  };

  this.confirm = function(input) {
    var defered = $q.defer();
    ModalService.showModal({
      templateUrl: "./app/modals/confirm/confirmTmpl.html",
      controller: 'confirmCtrl',
      inputs: {text: input}
    }).then(function(modal) {
      modal.close.then(function(then) {
        defered.resolve(then);
      });
    });
    return defered.promise;
  };

});