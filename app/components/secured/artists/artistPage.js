(function (angular) {
  'use strict';
  angular.module('sf.secured').directive('artistPage', artistPage);

  function artistPage() {
    return {
      restrict: 'E',
      templateUrl: 'components/secured/artists/artistPage.html',
      controller: ArtistCtrl
    }
  }

  ArtistCtrl.$inject = ['$scope', 'spotify', '$stateParams'];

  function ArtistCtrl($scope, spotify, $stateParams) {

    $scope.tooltip = {};
    var vm = this, showTooltip = false;
    $scope.tooltip.showTooltip ? vm.showTooltip = true : vm.showTooltip = false;

    spotify.GetArtist($stateParams.id).then(function (data) {
      $scope.artist = data;
    });

    spotify.GetRelatedArtists($stateParams.id).then(function (data) {
      $scope.relatedArtists = data;
    });

    spotify.GetArtistAlbums($stateParams.id).then(function (data) {
      $scope.artistAlbums = data.items;
    });
  }
})(angular);
