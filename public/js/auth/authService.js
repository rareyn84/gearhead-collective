angular.module('gcApp')
  .service('authService', function($http, $state) {

    this.signUp = function(user) {
      return $http({
          method: 'POST',
          url: '/api/user/signup',
          data: user
        })
        .then(function(response) {
          return response;
        }).catch(function (err) {
            return "Email already exists in the database.  Use different Email.";
        });
    };

    this.login = function(user) {
      return $http({
          method: 'POST',
          url: '/api/user/login',
          data: user
        })
        .then(function(response) {
          return response;
        }).catch(function (err) {
            return "Email or password is incorrect.  Please try again.";
        });
    };

    this.currentUser = function() {
      return $http({
        method: 'GET',
        url: '/api/me'
      })
      .then(function(response) {
        delete response.data.password;
        return response;
      })
      .catch(function(err) {
        $state.go('home');
      });
    };

    this.logout = function() {
      return $http({
        method: 'GET',
        url: '/api/user/logout'
      })
      .then(function(response) {
        return response;
      });
    };

  });
