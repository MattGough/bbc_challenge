'use strict';

angular.module('iPlayerAZ', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);
