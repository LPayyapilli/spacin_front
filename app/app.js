(function finalAppIIFE(){
  var app = angular.module('spacin', ['ngRoute']);

  app.config(function($routeProvider){
    $routeProvider
      .when('/',
            {
              controller: 'loginController',
              controllerAs: 'loginCtrl',
              templateUrl: 'app/views/login.html'
            }
           )
      // .when('/signup',
      //       {
      //         controller: 'signupController',
      //         controllerAs: 'signupCtrl',
      //         templateUrl: 'app/views/signup.html'
      //       }
      //      )
      // .when('/user',
      //       {
      //         controller:'userController',
      //         controllerAs: 'userCtrl',
      //         templateUrl: 'app/views/user.html'
      //       }
      // .when('/locations',
      //       {
      //         controller:'locationController',
      //         controllerAs: 'locationCtrl',
      //         templateUrl: 'app/views/location.html'
      //       }
      //      )
      .otherwise({redirectTo: '/'});
  }).config(['$httpProvider', function($httpProvider){
    $httpProvider.defaults.withCredentials = true;
  }]);

})();
