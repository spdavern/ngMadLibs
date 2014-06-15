angular.module('myApp', [])
	.constant('VERSION', "2.1")
	.run(function(VERSION, $rootScope) {
		$rootScope.version = VERSION;
	})
	.controller('madLibsCtrl', function($scope) {
	})
	.controller('formCtrl', ['$scope', function($scope){
		$scope.submit = function() {
			if($scope.myForm.$valid) {
				console.log('The form is valid');
			} else {
				console.log('The form is invalid');
			}
		};
	}]);