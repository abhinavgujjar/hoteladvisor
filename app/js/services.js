'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
value('version', '0.1').
value('rateLimit', 15000).
value('defaults', {
	rateLimit: 15000,
	descLimit: 50
}).
factory('votingService', function() {
	return {
		upVote: function(hotel) {
			if (!hotel.rating) {
				hotel.rating = 0;
			}

			hotel.rating++;
		},
		downVote: function(hotel) {
			if (!hotel.rating) {
				hotel.rating = 0;
			}

			if (hotel.rating > 0) {
				hotel.rating--;
			}
		}
	}
});