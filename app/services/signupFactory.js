(function signupFactory() {

  var signupFactory = function($http, $location, appSettings) {
    /////////////////Empty factory object////////////////////
    /////////////////////////////////////////////////////////
    var factory = {};

    /////////////////Post Sign Up Function///////////////////
    /////////////////////////////////////////////////////////
    factory.postSignup = function(data) {
      var url = appSettings.url + '/auth/signup';
      return $http.post(url, data).success(function(res) {
        $location.path('/user');
      }).error(function(err) {
        console.log(err);
      });

    };

    return factory;
  };

  /////////////////Dependency Injections///////////////////
  /////////////////////////////////////////////////////////
  signupFactory.$inject = ['$http', '$location', 'appSettings'];

  /////////////////Exporting Module////////////////////////
  /////////////////////////////////////////////////////////
  angular.module('spacin').factory('signupFactory', signupFactory);
})();
