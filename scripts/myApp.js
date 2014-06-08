angular.module('myApp', [])
	.constant('VERSION', "2.0")
	.run(function(VERSION, $rootScope){
	$rootScope.version = VERSION;
})
	.controller('madLibsController', function($scope){
		$scope.words = {
			femaleName:"",
			jobTitle:"",
			tediousTask:"",
			dirtyTask:"",
			celebrity:"",
			uselessSkill:"",
			obnoxiousCeleb:"",
			hugeNumber:"",
			adjective:""
		}
	})