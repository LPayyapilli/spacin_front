(function spaceContollerIIFE() {

  var spaceController = function($http, $location, userFactory, spaceFactory) {
    /////////////////Empty space object//////////////////////
    /////////////////////////////////////////////////////////
    this.space = spaceFactory.space;
    this.newSpace = {};
    this.spaces = spaceFactory.spaces;
    this.searchQuery = "";
    this.newSpace = {};

    /////////////////Show Space Function/////////////////////
    /////////////////////////////////////////////////////////
    function init() {
      spaceFactory.getSpaces();

    };

    init();

  this.hostSpace = function() {
      spaceFactory.createSpace(this.newSpace);
    }
  this.search = function() {
    console.log("yo");
    spaceFactory.searchUser(this.searchQuery);
  };
};
  /////////////////Dependency Injections///////////////////
  /////////////////////////////////////////////////////////
  spaceController.$inject = ['$http', '$location', 'userFactory', 'spaceFactory'];

  /////////////////Exporting Module////////////////////////
  /////////////////////////////////////////////////////////
  angular.module('spacin').controller('spaceController', spaceController);

})();
