
	angular.module('searchifyApp').service('groupBy', groupBy);

	groupBy.$inject = ['spotify', '_'];

	function groupBy( spotify, _) {
		var group = this;
		this.groupByAlbum = function(items) {
			console.log(items);//return filteredItems;
		}
		return group;
	}

