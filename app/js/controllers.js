'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('mainController', ['$scope', 'defaults', 'hotelsProvider', 'votingService',
		function($scope, defaults, hotelsProvider, vService) {

			$scope.message = "Good Morning";

			$scope.limit = defaults.rateLimit;
			$scope.descLimit = defaults.descLimit;

			$scope.upvote = vService.upVote;
			$scope.downvote = vService.downVote;

			$scope.hotels = hotelsProvider.getHotels();

		}
	])
	.controller('createController', ['$scope','hotelsProvider', '$location',
		function($scope, hotelsProvider, $location) {
			$scope.add = function(hotel){
				console.log(hotel);
				hotelsProvider.addHotel(hotel);
				$location.url('/listing');
			}
		}
	]);