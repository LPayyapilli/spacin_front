(function messageContollerIIFE() {

  var messageController = function($http, $location, userFactory, messageFactory, spaceFactory) {
    /////////////////Empty message object//////////////////////
    /////////////////////////////////////////////////////////
    this.message = messageFactory.message;
    this.messages = messageFactory.messages;
    this.searchQuery = "";
    this.newMessage = {space: spaceFactory.space, recipient: spaceFactory.space._creator};

    /////////////////Show message Function///////////////////
    /////////////////////////////////////////////////////////
    // function init() {
    //   messageFactory.getMessages();

    // };

    // init();

  this.hostMessage = function() {
    console.log(this.newMessage);
      messageFactory.createMessage(this.newMessage);
  };
  this.search = function() {
    messageFactory.seachUser(this.searchQuery);
  };
  this.findOne = function() {
    spaceFactory.findOne(spaceFactory.space._id);
  };
};
  /////////////////Dependency Injections///////////////////
  /////////////////////////////////////////////////////////
  messageController.$inject = ['$http', '$location', 'userFactory', 'messageFactory', 'spaceFactory'];

  /////////////////Exporting Module////////////////////////
  /////////////////////////////////////////////////////////
  angular.module('spacin').controller('messageController', messageController);

})();
