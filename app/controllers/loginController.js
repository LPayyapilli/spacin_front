(function loginContollerIIFE() {

  var loginController = function(loginFactory) {
    this.login = {};
    this.login.username = undefined;
    this.login.password = undefined;
    this.message = undefined;

    this.postLogin = function() {
      if (this.login.password && this.login.username) {
      loginFactory.postLogin(this.login);
      } else {
          this.message = "Please fill all fields with valid data";
      }
    };

  }

  loginController.$inject = ['loginFactory'];

  angular.module('spacin').controller('loginController', loginController);

})();

