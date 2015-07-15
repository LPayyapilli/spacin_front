(function userFactoryIIFE(){

  var userFactory = function($http, $location, appSettings) {
    /////////////////Empty factory object////////////////////
    /////////////////////////////////////////////////////////
    var factory = {};
    factory.users = [];
    factory.user = {};

    //////////////////////Get All Users//////////////////////
    /////////////////////////////////////////////////////////
    factory.getUsers = function() {
      var url = appSettings.url + '/users';
      // allow access to the list of users
      return $http.get(url).success(function(res) {
        if(res.message === "unAuthenticated") {
          $location.path('/');
        } else {
        angular.copy(res, factory.users);
      }
    }).error(function(err) {
      console.log(err);
      $location.path('/');
    });

    };

    //////////////////Get a single user//////////////////////
    /////////////////////////////////////////////////////////
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

  /////////////////Dependency Injections///////////////////
  /////////////////////////////////////////////////////////
  userFactory.$inject = ['$http', '$location', 'appSettings'];

  /////////////////Exporting Module////////////////////////
  /////////////////////////////////////////////////////////
  angular.module('spacin').factory('userFactory', userFactory);
})();
