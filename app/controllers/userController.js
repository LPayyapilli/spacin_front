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

  userController.$inject = ['userFactory', 'spaceFactory'];

  angular.module('spacin').controller('userController', userController);

})();
