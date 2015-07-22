(function userFactoryIIFE(){

  var userFactory = function($http, $location, appSettings) {
    /////////////////Empty factory object////////////////////
    /////////////////////////////////////////////////////////
    var factory = {};
    factory.users = [];
    factory.user = {};

    //////////////////////Get All Users//////////////////////
    /////////////////////////////////////////////////////////
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

    //////////////////Get a single user//////////////////////
    /////////////////////////////////////////////////////////
    factory.getUser = function() {
      var url = appSettings.url + '/user';
      return  $http.get(url).success(function(res) {
        if (res.message === "unAuthenticated") {
          $location.path('/');
        } else {
          angular.copy(res, factory.user);
        }
      }).error(function(err) {
        console.log(err);
        $location.path('/');
      });
    };

    //////////////////Sets Prof Pic//////////////////////////
    /////////////////////////////////////////////////////////

    factory.newProfPic = function(newprofilePicture) {
      var data = {pic:newprofilePicture};
      var url = appSettings.url + '/user/newProfPic'
      return $http.post(url, data).success(function(res) {
        if (res.message === "unAuthenticated") {
          $location.path('/');
        } else {
          console.log(res);
          angular.copy(res, factory.user);
          $location.path('/user');
        }
      }).error(function(err) {
        console.log("this is an error");
        console.log(err);
      });
    };

    factory.newBackPic = function(newbackgroundPicture) {
      var data = {pic:newbackgroundPicture};
      var url = appSettings.url + '/user/newBackPic'
      return $http.post(url, data).success(function(res) {
        if (res.message === "unAuthenticated") {
          $location.path('/');
        } else {
          console.log(res);
          angular.copy(res, factory.user);
          $location.path('/user');
        }
      }).error(function(err) {
        console.log("this is an error");
        console.log(err);
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
