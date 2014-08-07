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
	.controller('MyCtrl2', ['$scope',
		function($scope) {

		}
	]);