angular.module('myApp.controllers')
.controller('navController', ['$scope',
		function($scope) {
			$scope.item = {
				name : 'Default Header'
			}

			$scope.showNavbar = false;

			$scope.$on('navbar:display', function(evt, current, previous, rejection) {
				$scope.showNavbar = current;
			});
		}
	]);