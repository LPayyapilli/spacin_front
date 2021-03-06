(function spaceContollerIIFE() {

  var spaceController = function($http, $location, userFactory, spaceFactory) {
    /////////////////Empty space object//////////////////////
    /////////////////////////////////////////////////////////
    this.space = spaceFactory.space;
    this.newSpace = {};
    this.spaces = spaceFactory.spaces;
    this.searchQuery = "";
    this.newSpace = {};

    /////////////////Show Spaces Function////////////////////
    /////////////////////////////////////////////////////////
    function init() {
      spaceFactory.getSpaces();

    };

    init();

  /////////////////function to create space//////////////////
  ///////////////////////////////////////////////////////////
  this.hostSpace = function() {
      spaceFactory.createSpace(this.newSpace);
  };

  /////////////////function to search space//////////////////
  ///////////////////////////////////////////////////////////
  this.search = function() {
    spaceFactory.searchZip(this.searchQuery);
  };

  /////////////////function to find one space////////////////
  ///////////////////////////////////////////////////////////
  this.findOne = function(space_id) {
    spaceFactory.findOne(this.space._id);
  };

  /////////////////function to get a users space/////////////
  ///////////////////////////////////////////////////////////
  this.getUserSpaces = function() {
    spaceFactory.getUserSpaces();
  }
};
  /////////////////Dependency Injections///////////////////
  /////////////////////////////////////////////////////////
  spaceController.$inject = ['$http', '$location', 'userFactory', 'spaceFactory'];

  /////////////////Exporting Module////////////////////////
  /////////////////////////////////////////////////////////
  angular.module('spacin').controller('spaceController', spaceController);

})();
