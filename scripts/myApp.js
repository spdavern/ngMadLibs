angular.module('myApp', ["ngAnimate"])
	.constant('VERSION', "4.1")
	.run(function(VERSION, $rootScope) {
		$rootScope.version = VERSION;
	})
	.controller('madLibsCtrl', function($scope) {
		$scope.data = {gender: 'male', heShe: "he", hisHer: "his", showResult: false,
					   hideWords: false}
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
			if($scope.data.jobTitle !== undefined) {
				if(['a','e','i','o','u'].indexOf($scope.data.jobTitle.charAt(0)) !== -1) {
					$scope.data.aAn = "an"
				} else {
					$scope.data.aAn = "a"
				};
			};
			var TextObj = document.getElementById("personNameText");
			var objX = parseInt(TextObj.getBoundingClientRect().left);
			var objY = parseInt(TextObj.getBoundingClientRect().top);
			var fromInput = document.myForm.personName;
			var fromX = parseInt(fromInput.getBoundingClientRect().left);
			var fromY = parseInt(fromInput.getBoundingClientRect().top);
			var btnLocation = document.myForm.submitButton;
			var btnX = parseInt(btnLocation.getBoundingClientRect().left);
			var btnY = parseInt(btnLocation.getBoundingClientRect().top);
			$scope.data.hideWords = false;
			TweenLite.to(TextObj, 2, {x: fromX + "px", y: fromY + "px"});
			// TweenLite.fromTo(obj, 2, {x: fromX + "px", y: fromY + "px"}, 
			// 						 {x: btnX + "px", y: btnY + "px"});
			// if($scope.myForm.$valid) {
			// 	$scope.showResult = true;
			// };
		};
		$scope.return = function() {
			$scope.submitted = false;
			$scope.showResult = false;
		}
	}
);