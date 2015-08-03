(function messageFactoryIIFE(){

  // Create a message factory
  var messageFactory = function($http, $location, appSettings, spaceFactory) {
    /////////////////Empty factory object////////////////////
    /////////////////////////////////////////////////////////
    var factory = {};
    factory.messages = [];
    factory.message = {};


    /////////////////Create a New Message////////////////////
    /////////////////////////////////////////////////////////
    factory.createMessage = function(newMessage) {
      var url = appSettings.url + '/space/message/new'
      return $http.post(url, newMessage).success(function(res) {
        console.log(res);
        if (res.message === "unAuthenticated") {
          $location.path('/');
        } else {
          console.log(res);
          angular.copy(res, factory.message);
          console.log(factory.message);
          $location.path('/search');
        }
      }).error(function(err) {
        console.log("this is an error");
        console.log(err);
      });
    };

    /////////////////Get All Messages////////////////////////
    /////////////////////////////////////////////////////////
    factory.getMessages = function() {
      var url = appSettings.url + '/message/all'
        console.log(url);
      return  $http.get(url).success(function(res) {
        if (res.message === "unAuthenticated") {
          $location.path('/');
        } else {
          angular.copy(res, factory.messages);
        }
      }).error(function(err) {
        console.log(err);
        // $location.path('/');
      });
    };


    factory.searchUser = function(query) {
      var url = appSettings.url + '/message/search'
      console.log(url);
      var data = {user: query};
      console.log(data);
      return $http.post(url, data).success(function(res) {
        console.log(res);
        angular.copy(res, factory.messages);
      }).error(function(err) {
        console.log(err);
      });
    };

    return factory;
  };

  /////////////////Dependency Injections///////////////////
  /////////////////////////////////////////////////////////
  messageFactory.$inject = ['$http', '$location', 'appSettings', 'spaceFactory'];

  /////////////////Exporting Module////////////////////////
  /////////////////////////////////////////////////////////
  angular.module('spacin').factory('messageFactory', messageFactory);
})();
