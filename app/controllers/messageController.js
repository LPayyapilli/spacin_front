(function messageContollerIIFE() {

  var messageController = function($http, $location, userFactory, messageFactory, spaceFactory) {
    /////////////////Empty message object//////////////////////
    /////////////////////////////////////////////////////////
    this.message = messageFactory.message;
    this.newmessage = {};
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
    }
  this.search = function() {
    messageFactory.seachUser(this.searchQuery);
  };
};
  /////////////////Dependency Injections///////////////////
  /////////////////////////////////////////////////////////
  messageController.$inject = ['$http', '$location', 'userFactory', 'messageFactory', 'spaceFactory'];

  /////////////////Exporting Module////////////////////////
  /////////////////////////////////////////////////////////
  angular.module('spacin').controller('messageController', messageController);

})();
