(function () {
	var app = angular.module('search');
	var base = "https://swapi.co/api/";
	var main = function main($scope, ssDataAccess) {
		$scope.state = 'starships';
		$scope.collection = [];
		$scope.winner = {};
		$scope.winnerStr = "";
		$scope.loser = {};
		$scope.result = false;
		$scope.showDetail = false;

		$scope.compare = function (collection, state) {
			$scope.winner = collection[0];$scope.loser = collection[1];
			if (state === "starships") {
				if (parseInt(collection[1].crew) > parseInt(collection[0].crew)) {
					$scope.winner = collection[1];
					$scope.loser = collection[0];
				}
				$scope.winner.number = $scope.winner.crew;
				$scope.loser.number = $scope.loser.crew;
			}
			if (state === "people") {
				if (parseInt(collection[1].mass) > parseInt(collection[0].mass)) {
					$scope.winner = collection[1];
					$scope.loser = collection[0];
				}
				$scope.winner.number = $scope.winner.mass;
				$scope.loser.number = $scope.loser.mass;
			}
			$scope.winnerStr = JSON.stringify($scope.winner, null, "\t");
			$scope.winnerStr = $scope.winnerStr.substring(1, $scope.winnerStr.length - 1);
			$scope.result = true;
		};
		$scope.toggleTypes = function () {
			$scope.collection = [];
			/*Result is not needed/irrelevant because user has selected another starship/person*/
			$scope.result = false;
			$scope.showDetail = false;

			$scope.state = $scope.state === "starships" ? "people" : "starships";
			$scope.getData(base + $scope.state + "/?page=1");
		};
		/*Utility function to de-structure the dataset after retrieving from the server or the cache*/
		destructureData = function destructureData(message) {
			$scope.ssdata = $scope.starshipData.results;
			$scope.count = $scope.starshipData.count;
			$scope.next = $scope.starshipData.next;
			$scope.previous = $scope.starshipData.previous;
			$scope.message = message;
		};
		$scope.getData = function (url) {
			$scope.datapage = url.substr(url.indexOf("=") + 1);
			$scope.message = "Getting the " + $scope.state + " data for page " + $scope.datapage;

			$scope.starshipData = ssDataAccess.getResource(url);
			if ($scope.starshipData) {
				$scope.starshipData = JSON.parse($scope.starshipData[1]);
				destructureData("Page " + $scope.datapage + " data for " + $scope.state + " is warp factor 5 now!");
			} else {

				ssDataAccess.getResourceFromServer(url).then(function (data) {
					$scope.starshipData = data;
					destructureData("Page " + $scope.datapage + " data for " + $scope.state + " is from the remote planet!");
				}, function (error) {
					$scope.message = "Error contact support :( " + error;
				});
			}
		};
		$scope.setSelected = function (selected) {
			$scope.ssdata.map(function (el) {
				el.selected = false;
			});
			selected.selected = true;
			$scope.collection.push(selected);
			if ($scope.collection.length > 2) {
				/*Remove the first element*/
				$scope.collection.shift();
			}

			/*Result is not needed/irrelevant because user has selected another starship/person*/
			$scope.result = false;
			$scope.showDetail = false;
		};
		$scope.toggleDetail = function () {
			$scope.showDetail = $scope.showDetail === true ? false : true;
		};
		$scope.getData(base + $scope.state + "/?page=1");
	};
	app.controller('maincontroller', ["$scope", "ssDataAccess", main]);
})();