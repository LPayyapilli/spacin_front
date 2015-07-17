(function userContollerIIFE() {

  var userController = function(userFactory, spaceFactory) {
    this.user = userFactory.user;
    this.newprofilePicture = undefined;
    this.newbackgroundPicture = undefined;


    this.showSpaces = function() {
      spaceFactory.showSpaces();
    }
    this.getSpaces = function() {
      spaceFactory.getSpaces(this.user);
    }
    this.host = function () {
      spaceFactory.showHost();
    }
    this.rent = function() {
      spaceFactory.showRent();
    }
    this.profilePicture = function() {
      userFactory.newProfPic(this.newprofilePicture);
    }
    this.backgroundPicture = function() {
      userFactory.newBackPic(this.newbackgroundPicture);
    }

    function init() {
      userFactory.getUser();

    }
    init();
  }


  // this.showMessages = function() {
  //   messageFactory.getMessages();
  // }
  // this.getUsers = function() {
  //   usersFactory.getUsers();
  // }
  // this.postSpace = function() {
  //   spaceFactory.show();
  // }

  /////////////////Dependency Injections///////////////////
  /////////////////////////////////////////////////////////
  userController.$inject = ['userFactory', 'spaceFactory'];

  /////////////////Exporting Module////////////////////////
  /////////////////////////////////////////////////////////
  angular.module('spacin').controller('userController', userController);

})();
