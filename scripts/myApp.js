angular.module('myApp', ["ngAnimate"])
	.constant('VERSION', "4.1")
	.run(function(VERSION, $rootScope) {
		$rootScope.version = VERSION;
	})
	.controller('madLibsCtrl', function($scope) {
		$scope.data = {gender: 'male', heShe: "he", hisHer: "his", showResult: false}
		$scope.submit = function() {
			if($scope.data.gender == 'male') {
				$scope.data.heShe = "he";
				$scope.data.hisHer = "his";
				$scope.data.himHer = "him"
			} else {
				$scope.data.heShe = "she";
				$scope.data.hisHer	= "her";
				$scope.data.himHer = "her"
			};
			if(['a','e','i','o','u'].indexOf($scope.data.jobTitle.charAt(0)) !== -1) {
				$scope.data.aAn = "an"
			} else {
				$scope.data.aAn = "a"
			};
			if($scope.myForm.$valid) {
				$scope.showResult = true;
			};
		};
		$scope.return = function() {
			$scope.submitted = false;
			$scope.showResult = false;
		}
	}
);