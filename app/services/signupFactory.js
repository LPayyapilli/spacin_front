(function signupFactory() {

  var signupFactory = function($http, $location, appSettings) {
    var factory = {};

    factory.postSignup = function(data) {
      var url = appSettings.url + '/auth/signup';
      return $http.post(url, data).success(function(res) {
        // $location.path('/user');
        console.log('res', res);
      }).error(function(err) {
        console.log(err);
      });

    };

    return factory;
  };

  signupFactory.$inject = ['$http', '$location', 'appSettings'];

  angular.module('spacin').factory('signupFactory', signupFactory);
})();
