(function spaceContollerIIFE() {

  var spaceController = function($http, $location, userFactory, spaceFactory) {
    /////////////////Empty space object//////////////////////
    /////////////////////////////////////////////////////////
    this.space = spaceFactory.space;
    this.newSpace = {};

    /////////////////Show Space Function/////////////////////
    /////////////////////////////////////////////////////////
    this.showSpaces = function() {
      console.log('hello');
      spaceFactory.showSpaces();
    }
    /////////////////Show Host Function//////////////////////
    /////////////////////////////////////////////////////////
    this.host = function() {
      return spaceFactory.displayHost;
    }
    /////////////////Show HostDiv Function///////////////////
    /////////////////////////////////////////////////////////
    this.hostDiv = function() {
      return spaceFactory.displayHostDiv;
    }

    // function init() {
    //   spaceFactory.getspace();

    // }
    // init();
     }


  // this.showMessages = function() {
  //   messageFactory.getMessages();
  // }
  this.getSpaces = function() {
    spacesFactory.getSpaces();
  }
  // this.postSpace = function() {
  //   spaceFactory.show();
  // }

  /////////////////Dependency Injections///////////////////
  /////////////////////////////////////////////////////////
  spaceController.$inject = ['$http', '$location', 'userFactory', 'spaceFactory'];

  /////////////////Exporting Module////////////////////////
  /////////////////////////////////////////////////////////
  angular.module('spacin').controller('spaceController', spaceController);

})();
