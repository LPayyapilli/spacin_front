(function signupContollerIIFE() {

  var signupController = function(signupFactory) {
    this.signup = {};
    this.signup.username = undefined;
    this.signup.firstname = undefined;
    this.signup.lastname = undefined;
    this.signup.email = undefined;
    this.signup.password = undefined;
    this.signup.zip = undefined;
    this.message = undefined;

    this.postSignup = function() {
      if (this.signup.password && this.signup.username) {
      signupFactory.postSignup(this.signup);
      } else {
          this.message = "Please fill all fields with valid data";
      }
    };

  }

  signupController.$inject = ['signupFactory'];

  angular.module('spacin').controller('signupController', signupController);

})();
