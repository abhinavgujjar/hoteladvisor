'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngSanitize',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/listing', {templateUrl: 'partials/listing.html', controller :'mainController'});
  $routeProvider.when('/login', {templateUrl: 'partials/login.html'});
  $routeProvider.when('/details/:hotelId', {templateUrl: 'partials/details.html', controller :'detailsController'});
  $routeProvider.when('/new', {templateUrl: 'partials/create.html', controller : 'createController'});
  $routeProvider.otherwise({redirectTo: '/login'});
}]);

angular.module('myApp').
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }]).
  filter('toFeet', [ function() {

    return function(input) {
      return input * 5.7639;
    };


  }]);