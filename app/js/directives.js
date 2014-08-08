'use strict';

/* Directives */


angular.module('myApp.directives', []).
directive('appVersion', ['version',
  function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }
])
  .directive('hotelEntry', [

    function() {
      return {
        restrict: 'E',
        templateUrl: 'partials/hotelentry.html',
        scope: {
          hotel: '='
        }
      }
    }
  ]).directive('preview', [

    function() {
      return {
        restrict: 'E',
        templateUrl: 'partials/preview.html',
        scope: {
          text: '=',
          sclass: '@'
        }
      }
    }
  ]).directive('favorites', ['hotelsProvider',
    function(hotelsProvider) {
      return {
        restrict: 'E',
        templateUrl: 'partials/favorites.html',
        link: function(scope, element, attrs, controller) {
          scope.favorites = hotelsProvider.favorites;
        }
      }
    }
  ]).directive('ticker', ['$interval',

    function($interval) {
      return {
        restrict: 'E',
        link: function(scope, element, attrs, controller) {
          var ticks = 0;
          element.html('<span class="label label-danger">' + ticks + '</span>');
          $interval(function(){
            ticks ++;

            element.html('<span class="label label-danger">' + ticks + '</span>');
          }, 300);
        }
      }
    }
  ]);