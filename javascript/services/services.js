(
function(){
	let ssdataaccess=function($http,$rootScope,$cacheFactory)
	{
		let httpCache = $cacheFactory.get('$http');
		let getResource=function(url)
		{
			return httpCache.get(url);
		}
		let getResourceFromServer=function(url)
		{
			return $http.get(url, { cache: true})
			.then( function(response){ return response.data; });
		};		

		return {
			getResource:getResource,
			getResourceFromServer:getResourceFromServer
		}
	};
	let app=angular.module("search");
	app.factory("ssDataAccess",ssdataaccess);
}()
)