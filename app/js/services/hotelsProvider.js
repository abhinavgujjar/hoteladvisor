angular.module('myApp.services')
.factory('hotelsProvider', function() {

	var hotels = [{
		id : "1",
		name: 'Mariott',
		location: {
			area: 'Whitefield',
			city: 'Bangalore'
		},
		price: 13000,
		img: 'Ds7MGeY.jpg',
		description: 'Triumphantly much unlike and whooped scratched intense a well sensibly below that much pugnaciously morbid that caterpillar over that soberly seal and labrador far iguanodon far amongst rhinoceros raccoon that haughty won much.',
		area: 50000
	}, {
		id : "2",
		name: 'Taj West End',
		location: {
			area: 'Race Course Road',
			city: 'Bangalore'
		},
		price: 17000,
		img: 'BQ1bQ6T.jpg',
		description: 'This is a hotel',
		area: 120000
	}, {
		id : "3",
		name: 'Leela Palace',
		location: {
			area: 'Old Airport Road',
			city: 'Bangalore'
		},
		price: 30000,
		img: 'O3V6rIK.jpg',
		description: 'Or oh active bewitching lent a yikes well ouch much jeez the quail abrasive reserved since classic a then matter-of-fact shuddered.',
		area: 36000
	}, {
		id : "4",
		name: 'Hilton',
		location: {
			area: 'Lavelle Road',
			city: 'Bangalore'
		},
		price: 30000,
		img: 'FS46AwM.jpg',
		description: 'Or oh active bewitching lent a yikes well ouch much jeez the quail abrasive reserved since classic a then matter-of-fact shuddered.',
		area: 45000
	}];


	return {
		getHotels: function() {
			return hotels;
		},
		addHotel : function(hotel){
			hotels.push(hotel);
		}
	};

});