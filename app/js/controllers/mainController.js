angular.module('myApp.controllers', [])
	.controller('mainController', ['$scope', '$rootScope', 'defaults', 'hotelsProvider', 'votingService', '$location','$http',
		function($scope, $rootScope, defaults, hotelsProvider, vService, $location, $http) {

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

			function handleResult(result){
				$scope.hotels = result;	
			}

			hotelsProvider.getHotels(handleResult);

		}
	]);