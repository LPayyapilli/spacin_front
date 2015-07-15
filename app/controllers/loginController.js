(function loginContollerIIFE() {

  var loginController = function(loginFactory) {
    /////////////////Empty login object//////////////////////
    /////////////////////////////////////////////////////////
    this.login = {};
    this.login.username = undefined;
    this.login.password = undefined;
    this.message = undefined;

    /////////////////Post Login In Function//////////////////
    /////////////////////////////////////////////////////////
    this.postLogin = function() {
      if (this.login.password && this.login.username) {
      loginFactory.postLogin(this.login);
      } else {
          this.message = "Please fill all fields with valid data";
      }
    };

  }

  /////////////////Dependency Injections///////////////////
  /////////////////////////////////////////////////////////
  loginController.$inject = ['loginFactory'];

  /////////////////Exporting Module////////////////////////
  /////////////////////////////////////////////////////////
  angular.module('spacin').controller('loginController', loginController);

})();

