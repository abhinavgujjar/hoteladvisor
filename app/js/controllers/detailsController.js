angular.module('myApp.controllers')
.controller('detailsController', ['$scope', 'hotelsProvider', '$location','$routeParams',
		function($scope, hotelsProvider, $location, $routeParams) {

			var hotelId = $routeParams.hotelId;

			var hotels = hotelsProvider.getHotels();
			
			var targetHotel;
			angular.forEach(hotels, function(item){
				if (item.id === hotelId){
					targetHotel = item;
				}
			});

			$scope.item = targetHotel;
		}
	]);