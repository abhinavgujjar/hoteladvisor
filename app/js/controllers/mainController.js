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
	]);