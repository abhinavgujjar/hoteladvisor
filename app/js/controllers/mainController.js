angular.module('myApp.controllers', [])
	.controller('mainController', ['$scope', '$rootScope', 'defaults', 'hotelsProvider', 'votingService', '$location','$http',
		function($scope, $rootScope, defaults, hotelsProvider, vService, $location, $http) {

			$rootScope.loggedIn = true;

			$rootScope.$broadcast('navbar:display', true);

			$scope.message = "Good Morning";

			$scope.limit = defaults.rateLimit;
			$scope.descLimit = defaults.descLimit;

			$scope.upvote = vService.upVote;
			$scope.downvote = vService.downVote;

			$scope.addToFav = function(hotel){
				hotelsProvider.favorites.push(hotel);
			}

			$scope.addHotel = function(){
				$http.get('data/morehotel.json').success(function(data){
					var morehotels = data.results;
					$scope.hotels = [];
					angular.forEach(morehotels, function(hotel){
						$scope.hotels.push(hotel);
					})	
				})
			}

			$scope.showDetails = function(hotel) {
				hotelsProvider.selectedHotel = hotel;
				$location.url('/details');
			}


			hotelsProvider.getHotels().then(function(hotels){
				$scope.hotels = hotels;
			});

		}
	]);