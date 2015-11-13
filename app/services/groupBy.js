'use strict'
angular.module('searchifyApp').service('groupBy', groupByService);

groupByService.$inject = ['_'];

function groupByService(_) {
	var svc = this;
	this.groupByDiscNumber = function (items, key) {
		var results = [];

		results = _.groupBy(items, key);

		return results
	}
	return svc;
}

