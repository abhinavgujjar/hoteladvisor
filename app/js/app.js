'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/listing', {templateUrl: 'partials/listing.html'});
  $routeProvider.when('/login', {templateUrl: 'partials/login.html'});
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