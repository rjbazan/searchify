angular.module('searchifyApp').directive('searchBar', searchBar);

searchBar.$inject = [];

function searchBar() {
	return {
		restrict: 'E',
		templateUrl: 'directives/searchBar.html',
		controller: searchBarCtrl,
                scope: {}
	}
}

searchBarCtrl.$inject = ['$scope', 'spotify'];

function searchBarCtrl($scope, spotify) {
        $scope.results = [];
        $scope.request = request;

        function request() {
                if ($scope.query.length > 0) {
                        spotify.GetAll($scope.query).then(function (data) { //get albums+artists
                                $scope.results = data;
                        });
                } else {
                        $scope.results = [];
                }
        };
}