angular.module('myApp', [])
	.constant('VERSION', "2.2")
	.run(function(VERSION, $rootScope) {
		$rootScope.version = VERSION;
	})
	.controller('madLibsCtrl', function($scope) {
		$scope.data = {gender: 'male', heShe: "he", hisHer: "his", showResult: false}
	})
	.controller('formCtrl', ['$scope', function($scope){
		$scope.submit = function() {
			if($scope.data.gender == 'male') {
				$scope.data.heShe = "he";
				$scope.data.hisHer = "his";
			} else {
				$scope.data.heShe = "she";
				$scope.data.hisHer	= "her";
			};
			if($scope.myForm.$valid) {
				$scope.showResult = true;
				console.log('The form is valid', $scope.data, $scope.showResult);
			} else {
				$scope.showResult = false;
				console.log('The form is invalid', $scope.data, $scope.showResult);
			};
		};
	}]);