'use strict';

juke.controller('SidebarCtrl', function ($scope, $rootScope,$state) {

  $scope.viewAlbums = function () {
    $state.go("allAlbums");
  };

  $scope.viewAllArtists = function () {
   $state.go("allArtist");
  };

 

});
