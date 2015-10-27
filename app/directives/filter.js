angular.module('searchifyApp').filter('agrupar', newFilter);

function newFilter() {
	return function (collection, key) {
		if (collection === null) return;
		return {
			function(data, key) {
				var result = [];
				for (var i = 0; i < data.length; i++) {
					var value = data[i][key];
					if (result.indexOf(value) == -1) {
						result.push(value);
					}
				}
				return result;
			}
		}
	}

}
