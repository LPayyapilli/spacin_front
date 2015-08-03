(function userContollerIIFE() {

  var userController = function(userFactory, spaceFactory) {

    //////////////////sets the user object////////////////
    //////////////////////////////////////////////////////
    this.user = userFactory.user;
    this.newprofilePicture = undefined;
    this.newbackgroundPicture = undefined;

    ///////////////Function to show spaces////////////////
    //////////////////////////////////////////////////////
    this.showSpaces = function() {
      spaceFactory.showSpaces();
    };

    ///////////////Function to get spaces/////////////////
    //////////////////////////////////////////////////////
    this.getSpaces = function() {
      spaceFactory.getSpaces(this.user);
    };

    ///////////////Function to create prof pic////////////
    //////////////////////////////////////////////////////
    this.profilePicture = function() {
      userFactory.newProfPic(this.newprofilePicture);
    };

    ///////////////Function to create back pic////////////
    //////////////////////////////////////////////////////
    this.backgroundPicture = function() {
      userFactory.newBackPic(this.newbackgroundPicture);
    }

    ///////////////Function to initialize user////////////
    //////////////////////////////////////////////////////
    function init() {
      userFactory.getUser();

    };
    init();
  };


  // this.showMessages = function() {
  //   messageFactory.getMessages();
  // };
  // this.getUsers = function() {
  //   usersFactory.getUsers();
  // };

  /////////////////Dependency Injections///////////////////
  /////////////////////////////////////////////////////////
  userController.$inject = ['userFactory', 'spaceFactory'];

  /////////////////Exporting Module////////////////////////
  /////////////////////////////////////////////////////////
  angular.module('spacin').controller('userController', userController);

})();
