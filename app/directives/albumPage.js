angular.module('searchifyApp').directive('albumPage', albumPage);

function albumPage() {
	return {
		restrict: 'E',
		templateUrl: 'directives/albumPage.html',
		controller: albumPageCtrl
	}
}

albumPageCtrl.$inject = ['$scope', '$routeParams', 'spotify', 'groupBy'];

function albumPageCtrl($scope, $routeParams, spotify, groupBy) {
  
  spotify.GetAlbum($routeParams.id).then(function (data){//get album
    $scope.album=data;
  });

  spotify.GetAlbumTracks($routeParams.id).then(function (data){ //get album tracks
    groupBy.groupByAlbum(data.items);
    $scope.tracks=data.items;

  });
}