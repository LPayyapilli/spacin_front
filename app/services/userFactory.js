(function usersFactoryIIFE(){

  // Create a users factory
  var usersFactory = function($http) {
    var factory = {};
    factory.users = [];
    factory.user = {};

    factory.getUsers = function() {
      // allow access to the list of users
      return $http.get('/users').success(function(response){
        angulr.copy(response, factory.users);
      });
    };

    factory.getUser = function(userId){
      return  $http.get('/users/' + userId).sucess(function(response)
        angular.copy(response, factory.user);
      });
    };
    return factory;
  };

  usersFactory.$inject = ['$http'];

  angular.module('usersApp').factory('usersFactory', usersFactory);
})();
