angular.module('myApp', [])
	.constant('VERSION', "3")
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
			if($scope.myForm.$valid) {
				$scope.showResult = true;
			} else {
				$scope.showResult = false;
			};
		};
		$scope.return = function() {
			$scope.submitted = false;
			$scope.showResult = false;
		}
	}
);