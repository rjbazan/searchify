'use strict'
angular.module('searchifyApp').service('groupBy', groupByService);

groupByService.$inject = ['_'];

function groupByService(_) {
	var svc = this;

	svc.groupByDiscNumber = discNumber;

	return svc;

	function discNumber(items, key) {
		var results = [];

		results = _.groupBy(items, key);

		return results
	}
}

