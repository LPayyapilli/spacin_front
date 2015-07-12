(function usersFactoryIIFE(){

  // Create a users factory
  var usersFactory = function($http) {
    var factory = {};
    factory.users = [];
    factory.user = {};

    factory.getUsers = function() {
      var url = appSettings.url + '/users';
      // allow access to the list of users
      return $http.get(url).success(function(response) {
        if(res.message === "unAuthenticated") {
          $location.path('/');
        } else {
        angular.copy(response, factory.users);
      }
    }).error(function(err) {
      console.log(err);
      $location.path('/');
    });

    };

    factory.getUser = function(userId){
      var url = appSettings.url + '/users';
      return  $http.get(url + userId).sucess(function(response) {
        if (res.message === "unAuthenticated") {
          $location.path('/');
        } else {
          angular.copy(response, factory.user);
        }
      }).error(function(err) {
        console.log(err);
        $location.path('/');
      });
    };
    return factory;
  };

  usersFactory.$inject = ['$http'];

  angular.module('spacin').factory('usersFactory', usersFactory);
})();
