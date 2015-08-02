(function messageContollerIIFE() {

  var messageController = function($http, $location, userFactory, messageFactory) {
    /////////////////Empty message object//////////////////////
    /////////////////////////////////////////////////////////
    this.message = messageFactory.message;
    this.newmessage = {};
    this.messages = messageFactory.messages;
    this.searchQuery = "";
    this.newmessage = {};

    /////////////////Show message Function///////////////////
    /////////////////////////////////////////////////////////
    // function init() {
    //   messageFactory.getMessages();

    // };

    // init();

  this.hostMessage = function() {
      messageFactory.createMessage(this.newMessage);
    }
  this.search = function() {
    messageFactory.seachUser(this.searchQuery);
  };
};
  /////////////////Dependency Injections///////////////////
  /////////////////////////////////////////////////////////
  messageController.$inject = ['$http', '$location', 'userFactory', 'messageFactory'];

  /////////////////Exporting Module////////////////////////
  /////////////////////////////////////////////////////////
  angular.module('spacin').controller('messageController', messageController);

})();
