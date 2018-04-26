(function () {
	var gamebar = function gamebar() {
		return {
			restrict: "AE",
			templateUrl: "templates/gamebar.html",
			scope: { message: "@", state: "@" }
		};
	};
	var app = angular.module("search");
	app.directive("messagebar", gamebar);
})();