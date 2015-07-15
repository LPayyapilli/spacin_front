(function userContollerIIFE() {

  var userController = function(userFactory, spaceFactory) {
    this.user = userFactory.user;
    this.newSpace = {};

    this.showSpaces = function() {
      console.log('hello');
      spaceFactory.showSpaces();
    }
    this.hostSpace = function() {
      spaceFactory.createSpace(this.newSpace);
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
