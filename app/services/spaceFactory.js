(function spaceFactoryIIFE(){

  // Create a space factory
  var spaceFactory = function($http, $location, appSettings) {
    /////////////////Empty factory object////////////////////
    /////////////////////////////////////////////////////////
    var factory = {};
    factory.spaces = [];
    factory.space = {};
    factory.displayHost = "displayInline";
    factory.displayHostDiv = "displayNone";

    /////////////////Create a New Space//////////////////////
    /////////////////////////////////////////////////////////
    factory.createSpace = function(newSpace) {
      console.log(newSpace);
      var url = appSettings.url + '/space/new'
      return $http.post(url).success(function(res) {
        if (res.message === "unAuthenticated") {
          $location.path('/');
        } else {
          console.log(response);
          angular.copy(response, factory.space);
          $location.path('/user');
        }
      }).error(function(err) {
        console.log(err);
        $location.path('/');
      });
    };

    /////////////////Get All Spaces//////////////////////////
    /////////////////////////////////////////////////////////
    factory.getSpaces = function () {
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

    /////////////////Showing/Hiding Host Div/////////////////
    /////////////////////////////////////////////////////////
    factory.showHost = function() {
      factory.displayHost = "displayNone";
      factory.displayHostDiv = "displayInline";
    }
    factory.showRent = function() {
      $location.path('/space');
    }

    return factory;
  };

  /////////////////Dependency Injections///////////////////
  /////////////////////////////////////////////////////////
  spaceFactory.$inject = ['$http', '$location', 'appSettings'];

  /////////////////Exporting Module////////////////////////
  /////////////////////////////////////////////////////////
  angular.module('spacin').factory('spaceFactory', spaceFactory);
})();
