angular.module('myApp.controllers')
	.controller('createController', ['$scope', 'hotelsProvider', '$location',
		function($scope, hotelsProvider, $location) {
			$scope.add = function(hotel) {
				console.log(hotel);
				hotelsProvider.addHotel(hotel);
				$location.url('/listing');
			}
		}
	]);