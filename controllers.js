angular.module('controllers', [])

.controller('mainCtrl', function($scope, $http) {
	// $scope.data = {};
	// $scope.data.hello = "$scope.data.hello from mainCtrl";

	// $scope.scheiss = function() {
	// 	alert($scope.data.hi);
	// }

	// $scope.money = {
	// 	playerStartMoney: 100,
	// 	betMoney: 0,
	// 	playerWinMoney: 0,
	// 	playerCurrentMoney: 0
	// }

	// $scope.startGame = function() {
	// 	$scope.money.playerCurrentMoney = $scope.money.playerStartMoney;
	// }

	// $scope.correctAnswer = function() {
	// 	$scope.money.playerCurrentMoney += $scope.money.betMoney;
	// }

	// $scope.wrongAnswer = function() {
	// 	$scope.money.playerCurrentMoney -= $scope.money.betMoney;
	// }

	// $scope.country = {
	// 	countryName: "",
	// 	population: 0,
	// 	capital: ""
	// }

	// $scope.trickCountry1 = {
	// 	countryName: "",
	// 	population: 0,
	// 	capital: ""
	// }

	// $scope.trickCountry2 = {
	// 	countryName: "",
	// 	population: 0,
	// 	capital: ""
	// }

	// $scope.trickCountry3 = {
	// 	countryName: "",
	// 	population: 0,
	// 	capital: ""
	// }

	// $scope.trickCountry4 = {
	// 	countryName: "",
	// 	population: 0,
	// 	capital: ""
	// }

	// $scope.trickCountry5 = {
	// 	countryName: "",
	// 	population: 0,
	// 	capital: ""
	// }



	//Earth's geonameID = 6295630
	$scope.getContinent = function() {
		var url = "http://api.geonames.org/countryInfoJSON?username=billh";
		$http.get(url)
		.then(function(result) {
			var totalCountries = result.data.geonames.length;

			var currentCountry = Math.floor((Math.random()*totalCountries)+1);

			var realCountry = {};
			var trick1 = {};
			var trick2 = {};
			var trick3 = {};
			var trick4 = {};
			var trick5 = {};
			//three more tricks for testing
			// var trick6 = {};
			// var trick7 = {};
			// var trick8 = {};
			
			var countryObjectArray = [realCountry,trick1,trick2,trick3,trick4,trick5];

			function populateArrayOfCountries(a) {
				for(var i = 0; i < a.length; i++) {
					populateCountryObject(a[i]);
				}
			}

			function populateCountryObject(countryObject) {
				var cNumber = Math.floor((Math.random()*totalCountries)+1);
				countryObject.countryName = result.data.geonames[cNumber].countryName;
				countryObject.population = result.data.geonames[cNumber].population;
				countryObject.capital = result.data.geonames[cNumber].capital;
			}

			//populates the real country and the five trick countries
			populateArrayOfCountries(countryObjectArray);

			//this populates trick6 for testing
			// trick6 = {
			// 	countryName: "Jackscheissland",
			// 	population: 333,
			// 	capital: "Sh"
			// }

			//this populates trick7 - I can control what country comes up (for testing)
			// function populateCountryObjectzzz(countryObject) {
			// 	var cNumber = 232;
			// 	countryObject.countryName = result.data.geonames[cNumber].countryName;
			// 	countryObject.population = result.data.geonames[cNumber].population;
			// 	countryObject.capital = result.data.geonames[cNumber].capital;
			// }

			// populateCountryObjectzzz(trick7);

			// trick8 = {
			// 	countryName: "Jackscheissland",
			// 	population: 333,
			// 	capital: "Sh"
			// }

			// for testing: array with country and all 8 tricks
			// var countriesArray = [realCountry, trick1, trick2, trick3, trick4, trick5, trick6, trick7, trick8];

			//to make sure we don't get two of the same countries:
			do {
				var doAgain = false;
				for(var i = 0; i < countryObjectArray.length; i++) {
					for(var j = i+1; j < countryObjectArray.length; j++) {
						if(countryObjectArray[j].countryName === countryObjectArray[i].countryName) {
							popCountries(countryObjectArray);
							doAgain = true;
						}
					}
				}
			} while (doAgain == true);

			//to make sure no values come undefined or null
			for(var i = 0; i < countryObjectArray.length; i++) {
				if(countryObjectArray[i].capital === null || 
					countryObjectArray[i].capital === undefined || 
					countryObjectArray[i].capital === "" ||
					countryObjectArray[i].population === 0 ||
					countryObjectArray[i].population === "0") {
					populateCountryObject(countryObjectArray[i]);
				}
			}

			$scope.country = realCountry;
			$scope.trickCountry1 = trick1;
			$scope.trickCountry2 = trick2;
			$scope.trickCountry3 = trick3;
			$scope.trickCountry4 = trick4;
			$scope.trickCountry5 = trick5;

			// console.log(result.data.geonames[currentCountry].population);
			// console.log("total number = "+totalCountries);
			// console.log($scope.country.countryName);
			// console.log(result.data.geonames[currentCountry].capital);
		})
}



});