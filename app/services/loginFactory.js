(function loginFactory() {

  var loginFactory = function($http, $location, appSettings) {
    var factory = {};

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

  loginFactory.$inject = ['$http', '$location', 'appSettings'];

  angular.module('spacin').factory('loginFactory', loginFactory);
})();
