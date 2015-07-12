(function userFactoryIIFE(){

  // Create a users factory
  var userFactory = function($http, $location, appSettings) {
    var factory = {};
    factory.users = [];
    factory.user = {};

    // factory.getUsers = function() {
    //   var url = appSettings.url + '/users';
    //   // allow access to the list of users
    //   return $http.get(url).success(function(res) {
    //     if(res.message === "unAuthenticated") {
    //       $location.path('/');
    //     } else {
    //     angular.copy(res, factory.users);
    //   }
    // }).error(function(err) {
    //   console.log(err);
    //   $location.path('/');
    // });

    // };

    factory.getUser = function() {
      var url = appSettings.url + '/user';
      return  $http.get(url).success(function(res) {
        if (res.message === "unAuthenticated") {
          $location.path('/');
        } else {
          angular.copy(res, factory.user);
          $location.path('/user');
        }
      }).error(function(err) {
        console.log(err);
        $location.path('/');
      });
    };
    return factory;
  };

  userFactory.$inject = ['$http', '$location', 'appSettings'];

  angular.module('spacin').factory('userFactory', userFactory);
})();
