angular.module('myApp', []);
angular.module('myApp').constant('VERSION', "1.0");
angular.module('myApp').run(function(VERSION, $rootScope){
	$rootScope.version = VERSION;
});