angular.module('searchifyApp').directive('albumPage', albumPage);

function albumPage() {
	return {
		restrict: 'E',
		templateUrl: 'directives/albumPage.html',
		controller: albumPageCtrl
	}
}

albumPageCtrl.$inject = ['$scope', '$routeParams', 'spotify'];

function albumPageCtrl($scope, $routeParams, spotify) {
  
  spotify.GetAlbum($routeParams.id).then(function (data){//get album
    $scope.album=data;
  });

  spotify.GetAlbumTracks($routeParams.id).then(function (data){ //get album tracks
    $scope.tracks=data.items;

  });
}