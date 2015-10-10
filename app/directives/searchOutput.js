angular.module('searchifyApp').directive('searchOutput', searchOutput);


function searchOutput(){
	return {
		scope: {},
                restrict: 'E',
                templateUrl: 'directives/searchOutput.html',
		controller: searchOutputCtrl,
		link: function(scope, elm, att){
                        
                }
	}
}

searchOutputCtrl.$inject = ['$scope', 'spotify', 'UserService', '$rootScope'];

function searchOutputCtrl($scope, spotify, UserService, $rootScope) {
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
