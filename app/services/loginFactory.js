(function loginFactory() {

  var loginFactory = function($http, $location, appSettings) {
    /////////////////Empty factory object////////////////////
    /////////////////////////////////////////////////////////
    var factory = {};

    /////////////////Post Login In Function//////////////////
    /////////////////////////////////////////////////////////
    factory.postLogin = function(data) {
      var url = appSettings.url + '/auth/login';
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
  loginFactory.$inject = ['$http', '$location', 'appSettings'];

  /////////////////Exporting Module////////////////////////
  /////////////////////////////////////////////////////////
  angular.module('spacin').factory('loginFactory', loginFactory);
})();
