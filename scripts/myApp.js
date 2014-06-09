angular.module('myApp', [])
	.constant('VERSION', "2.0")
	.run(function(VERSION, $rootScope){
	$rootScope.version = VERSION;
}
