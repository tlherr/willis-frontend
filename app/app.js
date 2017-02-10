'use strict';

// Declare app level module which depends on views, and components
angular.module('Willis', [
  'ngRoute',
  'Willis.Home',
  'Willis.Events',
  'Willis.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
