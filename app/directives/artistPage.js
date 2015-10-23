angular.module('searchifyApp').directive('artistPage', artistPage);

function artistPage() {
        return {
                restrict: 'E',
                templateUrl: 'directives/artistPage.html',
                controller: ArtistCtrl
        }
}

ArtistCtrl.$inject = ['$scope', 'spotify', '$routeParams'];

function ArtistCtrl($scope, spotify, $routeParams) {

        $scope.tooltip = {};
        var vm = this,showTooltip = false;
        $scope.tooltip.showTooltip ? vm.showTooltip = true : vm.showTooltip = false;

        spotify.GetArtist($routeParams.id).then(function (data) {
                $scope.artist = data;
        });

        spotify.GetRelatedArtists($routeParams.id).then(function (data) {
                $scope.relatedArtists = data;
        });

        spotify.GetArtistAlbums($routeParams.id).then(function (data) {
                $scope.artistAlbums = data.items;
        });
}
