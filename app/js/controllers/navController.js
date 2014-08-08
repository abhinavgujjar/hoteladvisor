angular.module('myApp.controllers')
	.controller('navController', ['$scope', '$rootScope',
		function($scope, $rootScope) {
			$scope.item = {
				name: 'Default Header'
			}

			$scope.showNavbar = false;

			$scope.$on('navbar:display', function(evt, current, previous, rejection) {
				$scope.showNavbar = current;
			});

			$scope.$on('$locationChangeStart', function(evt, current, previous, rejection) {
				if (current.indexOf('/login') > 0 && $rootScope.loggedIn) {
					evt.preventDefault();
					$location.url('/logout');
				}
			});
		}
	]);