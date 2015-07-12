(function spaceFactoryIIFE(){

  // Create a space factory
  var spaceFactory = function($http, $location, appSettings) {
    var factory = {};
    factory.spaces = [];
    factory.space = {};

    factory.createSpace = function(newSpace) {
      console.log(newSpace);
      // var url = appSettings.url + '/space/new'
      // return $http.post(url).success(function(res) {
      //   if (res.message === "unAuthenticated") {
      //     $location.path('/');
      //   } else {
      //     console.log(response);
      //     $location.path('/user');
      //   }
      // }).error(function(err) {
      //   console.log(err);
      //   $location.path('/');
      // });
    };

    factory.showSpaces = function () {
      var url = appSettings.url + '/space/all'
        console.log(url);
      return  $http.get(url).success(function(response) {
        if (res.message === "unAuthenticated") {
          $location.path('/');
        } else {
          angular.copy(response, factory.spaces);
          console.log(response);
        }
      }).error(function(err) {
        console.log(err);
        $location.path('/');
      });
    };
    return factory;
  };

  spaceFactory.$inject = ['$http', '$location', 'appSettings'];

  angular.module('spacin').factory('spaceFactory', spaceFactory);
})();
