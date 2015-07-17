(function finalAppIIFE(){
  var app = angular.module('spacin', ['ngRoute', 'ngSanitize', 'ngS3upload']);

  app.config(function($routeProvider){
    $routeProvider
      .when('/',
            {
              controller: 'loginController',
              controllerAs: 'loginCtrl',
              templateUrl: 'app/views/login.html'
            }
           )
      .when('/signup',
            {
              controller: 'signupController',
              controllerAs: 'signupCtrl',
              templateUrl: 'app/views/signup.html'
            }
           )
      .when('/user',
            {
              controller:'userController',
              controllerAs: 'userCtrl',
              templateUrl: 'app/views/user.html'
            }
            )
      .when('/space',
            {
              controller:'userController',
              controllerAs: 'userCtrl',
              templateUrl: 'app/views/space.html'
            }
           )
      .when('/search',
            {
              controller:'spaceController',
              controllerAs: 'spaceCtrl',
              templateUrl: 'app/views/rent.html'
            }
           )
      .when('/host',
            {
              controller:'spaceController',
              controllerAs:'spaceCtrl',
              templateUrl: 'app/views/host.html'
            }
           )
      .when('/account',
            {
              controller:'userController',
              controllerAs:'userCtrl',
              templateUrl: 'app/views/account.html'
            }
           )
      .when('/background',
            {
              controller:'userController',
              controllerAs:'userCtrl',
              templateUrl: 'app/views/background.html'
            }
           )
      // .otherwise({redirectTo: '/'});
  }).config(['$httpProvider', function($httpProvider){
    $httpProvider.defaults.withCredentials = true;
  }]).config(function(ngS3Config) {
  ngS3Config.theme = 'bootstrap3';
  });

})();
