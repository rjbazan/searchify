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

searchOutputCtrl.$inject = ['$scope', 'spotify', 'UserService', '$rootScope', '$timeout'];

function searchOutputCtrl($scope, spotify, UserService, $rootScope, $timeout) {
        $scope.results = [];
        $scope.request = request;
        var timeout;


        function request() {
                if ($scope.query.length > 0) {
                        if (timeout) $timeout.cancel(timeout);
                        timeout = $timeout(function () {
                                spotify.GetAll($scope.query).then(function (data) { //get albums+artists
                                        $scope.results = data;
                                });
                        }, 350);
                } else {
                        $scope.results = [];
                }
        };
}
