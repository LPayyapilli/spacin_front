(function signupContollerIIFE() {

  var signupController = function(signupFactory) {
    /////////////////Empty signup object//////////////////////
    /////////////////////////////////////////////////////////
    this.signup = {};
    this.signup.username = undefined;
    this.signup.firstname = undefined;
    this.signup.lastname = undefined;
    this.signup.email = undefined;
    this.signup.password = undefined;
    this.signup.zip = undefined;
    this.message = undefined;

    /////////////////Post Sign Up Function///////////////////
    /////////////////////////////////////////////////////////
    this.postSignup = function() {
      if (this.signup.password && this.signup.username) {
      signupFactory.postSignup(this.signup);
      } else {
          this.message = "Please fill all fields with valid data";
      }
    };

  }

  /////////////////Dependency Injections///////////////////
  /////////////////////////////////////////////////////////
  signupController.$inject = ['signupFactory'];

  /////////////////Exporting Module////////////////////////
  /////////////////////////////////////////////////////////
  angular.module('spacin').controller('signupController', signupController);

})();
