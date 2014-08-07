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
				img: 'Ds7MGeY.jpg',
				description: 'Triumphantly much unlike and whooped scratched intense a well sensibly below that much pugnaciously morbid that caterpillar over that soberly seal and labrador far iguanodon far amongst rhinoceros raccoon that haughty won much.',
				area : 50000
			}, {
				name: 'Taj West End',
				location: {
					area: 'Race Course Road',
					city: 'Bangalore'
				},
				price: 17000,
				img: 'BQ1bQ6T.jpg',
				description: 'This is a hotel',
				area : 120000
			}, {
				name: 'Leela Palace',
				location: {
					area: 'Old Airport Road',
					city: 'Bangalore'
				},
				price: 30000,
				img: 'O3V6rIK.jpg',
				description: 'Or oh active bewitching lent a yikes well ouch much jeez the quail abrasive reserved since classic a then matter-of-fact shuddered.',
				area : 36000
			}]

		}
	])
	.controller('MyCtrl2', ['$scope',
		function($scope) {

		}
	]);