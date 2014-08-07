'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('mainController', ['$scope',
		function($scope) {

			$scope.message = "Good Morning";

			$scope.limit = 15000;

			$scope.highlight_class = 'highlight_green';

			$scope.upvote = function(hotel) {
				if (!hotel.rating) {
					hotel.rating = 0;
				}

				hotel.rating++;
			}

			$scope.downvote = function(hotel) {
				if (!hotel.rating) {
					hotel.rating = 0;
				}
				hotel.rating--;
			}


			$scope.hotels = [{
				name: 'Mariott',
				location: {
					area: 'Whitefield',
					city: 'Bangalore'
				},
				price: 13000,
				img: 'Ds7MGeY.jpg'
			}, {
				name: 'Taj West End',
				location: {
					area: 'Race Course Road',
					city: 'Bangalore'
				},
				price: 17000,
				img: 'BQ1bQ6T.jpg'
			}, {
				name: 'Leela Palace',
				location: {
					area: 'Old Airport Road',
					city: 'Bangalore'
				},
				price: 30000,
				img: 'O3V6rIK.jpg'
			}]

		}
	])
	.controller('MyCtrl2', ['$scope',
		function($scope) {

		}
	]);