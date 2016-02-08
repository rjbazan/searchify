angular.module('searchifyApp').directive('searchOutput', searchOutput);


function searchOutput() {
  return {
    scope: {},
    restrict: 'E',
    templateUrl: 'components/secured/home/searchOutput.html',
    controller: searchOutputCtrl,
    link: function (scope, elm, att) {

    }
  }
}

searchOutputCtrl.$inject = ['$scope', 'spotify', 'UserService', '$rootScope', '$timeout', '$state'];

function searchOutputCtrl($scope, spotify, UserService, $rootScope, $timeout, $state) {
  $scope.results = [];
  $scope.request = request;
  $scope.goToArtistPage = goToArtistPage;
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

  function goToArtistPage(clickedArtistId) {
    $state.go('secured.home.artist', {'id': clickedArtistId});
  }
}
