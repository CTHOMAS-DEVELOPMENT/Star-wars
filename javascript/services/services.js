(function () {
	var ssdataaccess = function ssdataaccess($http, $rootScope, $cacheFactory) {
		var httpCache = $cacheFactory.get('$http');
		var getResource = function getResource(url) {
			return httpCache.get(url);
		};
		var getResourceFromServer = function getResourceFromServer(url) {
			return $http.get(url, { cache: true }).then(function (response) {
				return response.data;
			});
		};

		return {
			getResource: getResource,
			getResourceFromServer: getResourceFromServer
		};
	};
	var app = angular.module("search");
	app.factory("ssDataAccess", ssdataaccess);
})();