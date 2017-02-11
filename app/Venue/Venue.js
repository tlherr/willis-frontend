'use strict';

angular.module('Willis.Venue', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/venue', {
    templateUrl: 'Venue/Venue.html',
    controller: 'VenueCtrl'
  });
}])

.controller('VenueCtrl', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
	
}]);