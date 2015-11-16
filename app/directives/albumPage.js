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
    var newJSON = groupBy.groupByDiscNumber(data.items,'disc_number'); //group by disc_number property
    
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