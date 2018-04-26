'use strict';

(function () {
	var app = angular.module('search', ['ui.router']);

	app.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider.state("main", { url: "/main", templateUrl: "templates/main.html", controller: "maincontroller" }).state("mainmessage", { url: "/main/:error", templateUrl: "templates/main.html", controller: "maincontroller" });
		$urlRouterProvider.otherwise("main");
	}).run(function ($rootScope) {

		$rootScope.$on("$stateChangeError", function (event, toState, toParams, fromState, fromParams, error) {});
	});
})();
//# sourceMappingURL=app.js.map
