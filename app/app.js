'use strict';

var iplayerApp = angular.module('iplayerApp', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/a', {
  templateUrl: 'views/aPrograms.html',
  controller: 'ProgramListCtrl'
});
  $routeProvider.when('/b', {
  templateUrl: 'views/bPrograms.html',
  controller: 'ProgramListCtrl'
});
  $routeProvider.when('/c', {
  templateUrl: 'views/cPrograms.html',
  controller: 'ProgramListCtrl'
});
  $routeProvider.when('/d', {
  templateUrl: 'views/dPrograms.html',
  controller: 'ProgramListCtrl'
});
  $routeProvider.when('/e', {
  templateUrl: 'views/ePrograms.html',
  controller: 'ProgramListCtrl'
});
  $routeProvider.when('/f', {
  templateUrl: 'views/fPrograms.html',
  controller: 'ProgramListCtrl'
});
  $routeProvider.when('/g', {
  templateUrl: 'views/gPrograms.html',
  controller: 'ProgramListCtrl'
});
  $routeProvider.when('/h', {
  templateUrl: 'views/hPrograms.html',
  controller: 'ProgramListCtrl'
});
  $routeProvider.when('/i', {
  templateUrl: 'views/iPrograms.html',
  controller: 'ProgramListCtrl'
});
  $routeProvider.when('/j', {
  templateUrl: 'views/jPrograms.html',
  controller: 'ProgramListCtrl'
});
  $routeProvider.when('/k', {
  templateUrl: 'views/kPrograms.html',
  controller: 'ProgramListCtrl'
});
  $routeProvider.when('/l', {
  templateUrl: 'views/lPrograms.html',
  controller: 'ProgramListCtrl'
});
  $routeProvider.when('/m', {
  templateUrl: 'views/mPrograms.html',
  controller: 'ProgramListCtrl'
});
  $routeProvider.when('/n', {
  templateUrl: 'views/nPrograms.html',
  controller: 'ProgramListCtrl'
});
  $routeProvider.when('/o', {
  templateUrl: 'views/oPrograms.html',
  controller: 'ProgramListCtrl'
});
  $routeProvider.when('/p', {
  templateUrl: 'views/pPrograms.html',
  controller: 'ProgramListCtrl'
});
  $routeProvider.when('/q', {
  templateUrl: 'views/qPrograms.html',
  controller: 'ProgramListCtrl'
});
  $routeProvider.when('/r', {
  templateUrl: 'views/rPrograms.html',
  controller: 'ProgramListCtrl'
});
  $routeProvider.when('/s', {
  templateUrl: 'views/sPrograms.html',
  controller: 'ProgramListCtrl'
});
  $routeProvider.when('/t', {
  templateUrl: 'views/tPrograms.html',
  controller: 'ProgramListCtrl'
});
  $routeProvider.when('/u', {
  templateUrl: 'views/uPrograms.html',
  controller: 'ProgramListCtrl'
});
  $routeProvider.when('/v', {
  templateUrl: 'views/vPrograms.html',
  controller: 'ProgramListCtrl'
});
  $routeProvider.when('/w', {
  templateUrl: 'views/wPrograms.html',
  controller: 'ProgramListCtrl'
});
  $routeProvider.when('/x', {
  templateUrl: 'views/xPrograms.html',
  controller: 'ProgramListCtrl'
});
  $routeProvider.when('/y', {
  templateUrl: 'views/yPrograms.html',
  controller: 'ProgramListCtrl'
});
  $routeProvider.when('/z', {
  templateUrl: 'views/zPrograms.html',
  controller: 'ProgramListCtrl'
});
  $routeProvider.when('/0-9', {
  templateUrl: 'views/0-9Programs.html',
  controller: 'ProgramListCtrl'
});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
