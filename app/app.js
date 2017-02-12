'use strict';

// Declare app level module which depends on views, and components
angular.module('Willis', [
    'ngRoute',
    'ngSanitize',
    'Willis.Home',
    'Willis.Events',
    'Willis.Schedule',
    'Willis.Venue',
    'Willis.History',
    'Willis.Elders',
    'Willis.Ministers',
    'Willis.Prayers',
    'Willis.Contact'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
