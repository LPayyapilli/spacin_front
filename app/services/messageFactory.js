(function messageFactoryIIFE(){

  // Create a message factory
  var messageFactory = function($http, $location, appSettings) {
    /////////////////Empty factory object////////////////////
    /////////////////////////////////////////////////////////
    var factory = {};
    factory.messages = [];
    factory.message = {};

    /////////////////Create a New message//////////////////////
    /////////////////////////////////////////////////////////
    factory.createMessage = function(newmessage) {
      console.log(newmessage);
      var url = appSettings.url + '/message/new'
      return $http.post(url, newmessage).success(function(res) {
        if (res.message === "unAuthenticated") {
          $location.path('/');
        } else {
          console.log(res);
          angular.copy(res, factory.message);
          $location.path('/host');
        }
      }).error(function(err) {
        console.log("this is an error");
        console.log(err);
      });
    };

    /////////////////Get All messages//////////////////////////
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
  messageFactory.$inject = ['$http', '$location', 'appSettings'];

  /////////////////Exporting Module////////////////////////
  /////////////////////////////////////////////////////////
  angular.module('spacin').factory('messageFactory', messageFactory);
})();