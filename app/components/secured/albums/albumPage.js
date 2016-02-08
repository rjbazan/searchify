(function (angular) {
  'use strict';
  angular.module('sf.secured').directive('albumPage', albumPage);

  function albumPage() {
    return {
      restrict: 'E',
      templateUrl: 'components/secured/albums/albumPage.html',
      controller: albumPageCtrl
    }
  }

  albumPageCtrl.$inject = ['$scope', '$stateParams', 'spotify', 'groupBy'];

  function albumPageCtrl($scope, $stateParams, spotify, groupBy) {

    spotify.GetAlbum($stateParams.id).then(function (data) {//get album
      $scope.album = data;
    });

    spotify.GetAlbumTracks($stateParams.id).then(function (data) { //get album tracks
      var newJSON = groupBy.groupByDiscNumber(data.items, 'disc_number'); //group by disc_number property
    
      $scope.discs = newJSON;
      $scope.tabHeader = hasManyDiscs;
    });

    function hasManyDiscs(index, discsArray) {
      if (discsArray.hasOwnProperty('2')) {
        return "DISC " + (parseInt(index, 10) + 1).toString();
      }
      else {
        return "Tracks";
      }
    }
  }
})(angular);