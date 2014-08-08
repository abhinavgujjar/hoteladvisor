'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('hotelEntry', [function() {
    return {
      restrict : 'E',
      templateUrl : 'partials/hotelentry.html',
      scope :{
        hotel : '='
      }
    }
  }]).directive('preview', [function() {
    return {
    	restrict : 'E',
    	templateUrl : 'partials/preview.html',
    	scope :{
    		text : '=',
        sclass : '@'
    	}
    }
  }]);


