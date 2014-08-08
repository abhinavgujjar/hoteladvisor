angular.module('myApp.services')
.factory('hotelsProvider', function($http, $q) {

	
	return {
		getHotels: function() {
			var deferred = $q.defer();

			$http.get('data/hotels.json').success(function(data){
				deferred.resolve(data.results);
			});

			return deferred.promise;

		},
		addHotel : function(hotel){
			hotels.push(hotel);
		}
	};

});