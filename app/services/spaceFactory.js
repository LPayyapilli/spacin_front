(function spaceFactoryIIFE(){

  // Create a space factory
  var spaceFactory = function($http, $location, appSettings) {
    /////////////////Empty factory object////////////////////
    /////////////////////////////////////////////////////////
    var factory = {};
    factory.spaces = [];
    factory.space = {};

    /////////////////Create a New Space//////////////////////
    /////////////////////////////////////////////////////////
    factory.createSpace = function(newSpace) {
      console.log(newSpace);
      var url = appSettings.url + '/space/new'
      return $http.post(url, newSpace).success(function(res) {
        if (res.message === "unAuthenticated") {
          $location.path('/');
        } else {
          console.log(res);
          angular.copy(res, factory.space);
          $location.path('/host');
        }
      }).error(function(err) {
        console.log("this is an error");
        console.log(err);
      });
    };

    /////////////////Get All Spaces//////////////////////////
    /////////////////////////////////////////////////////////
    factory.getSpaces = function() {
      var url = appSettings.url + '/space/all'
      return  $http.get(url).success(function(res) {
        if (res.message === "unAuthenticated") {
          $location.path('/');
        } else {
          angular.copy(res, factory.spaces);
        }
      }).error(function(err) {
        console.log(err);
         $location.path('/');
      });
    };

    /////////////////Get All Spaces from a User//////////////
    /////////////////////////////////////////////////////////
    factory.getUserSpaces = function() {
      var url = appSettings.url + '/space/user/all'
        console.log(url);
      return  $http.get(url).success(function(res) {
        if (res.message === "unAuthenticated") {
          $location.path('/');
        } else {
          angular.copy(res, factory.spaces);
        }
      }).error(function(err) {
        console.log(err);
         $location.path('/');
      });
    };

    /////////////////Get One Space///////////////////////////
    /////////////////////////////////////////////////////////
    factory.findOne = function(_id) {
      var url = appSettings.url + '/space/' + _id
        console.log(url);
      return  $http.get(url).then(function(res) {
        if (res.message === "unAuthenticated") {
          $location.path('/');
        } else {
          angular.copy(res, factory.space);
          console.log(factory.space);
        }
      }).error(function(err) {
        console.log(err);
         $location.path('/');
      });
    };

    /////////////////Search by Zip///////////////////////////
    /////////////////////////////////////////////////////////
    factory.searchZip = function(query) {
      var url = appSettings.url + '/space/search'
      var data = {zip: query};
      return $http.post(url, data).success(function(res) {
        angular.copy(res, factory.spaces);
      }).error(function(err) {
        console.log(err);
      });
    };

    return factory;
  };

  /////////////////Dependency Injections///////////////////
  /////////////////////////////////////////////////////////
  spaceFactory.$inject = ['$http', '$location', 'appSettings'];

  /////////////////Exporting Module////////////////////////
  /////////////////////////////////////////////////////////
  angular.module('spacin').factory('spaceFactory', spaceFactory);
})();
