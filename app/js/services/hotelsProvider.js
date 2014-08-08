angular.module('myApp.services')
.factory('hotelsProvider', function($http) {

	
	return {
		getHotels: function(callback) {
			$http.get('data/hotels.json').success(function(data){
				callback(data.result);
			});

		},
		addHotel : function(hotel){
			hotels.push(hotel);
		}
	};

});