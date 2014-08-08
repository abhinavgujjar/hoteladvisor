'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('mainController', ['$scope', '$rootScope', 'defaults', 'hotelsProvider', 'votingService', '$location',
		function($scope, $rootScope, defaults, hotelsProvider, vService, $location) {

			$rootScope.$broadcast('navbar:display', true);

			$scope.message = "Good Morning";

			$scope.limit = defaults.rateLimit;
			$scope.descLimit = defaults.descLimit;

			$scope.upvote = vService.upVote;
			$scope.downvote = vService.downVote;

			$scope.showDetails = function(hotel) {
				hotelsProvider.selectedHotel = hotel;
				$location.url('/details');
			}

			$scope.hotels = hotelsProvider.getHotels();

		}
	])
	.controller('createController', ['$scope', 'hotelsProvider', '$location',
		function($scope, hotelsProvider, $location) {
			$scope.add = function(hotel) {
				console.log(hotel);
				hotelsProvider.addHotel(hotel);
				$location.url('/listing');
			}
		}
	]).controller('detailsController', ['$scope', 'hotelsProvider', '$location',
		function($scope, hotelsProvider, $location) {
			$scope.item = hotelsProvider.selectedHotel;
		}
	]).controller('navController', ['$scope',
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