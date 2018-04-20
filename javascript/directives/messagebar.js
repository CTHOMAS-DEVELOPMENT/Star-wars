/*jshint esversion: 6 */ 
(
function(){
	var gamebar=function(){
		return {
				restrict: "AE",
				templateUrl:"templates/gamebar.html",
				scope: { message:"@", state:"@"}
		};
	};
	let app=angular.module("search");
	app.directive("messagebar",gamebar);
}()
);

