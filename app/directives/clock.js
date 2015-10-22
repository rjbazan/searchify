angular.module('searchifyApp').directive('myClock', myClock);

function myClock() {
	return {
		restrict: 'E',
		templateUrl: 'directives/clock.html',
		scope: {
			
		},
		controller: clockCtrl
	}
}

clockCtrl.$inject = ['$scope', '$timeout', 'Weather']

function clockCtrl($scope, $timeout, Weather) {
	$scope.date = {};
	$scope.weather = {};
	
	Weather.getWeatherForecast('AR/tucuman')
	.then(function(data) {
		$scope.weather.forecast = data;
	})
	
	var updateTime = function() {
		$scope.date.raw = new Date();
		$timeout(updateTime, 1000);
	}
	
	updateTime();
}